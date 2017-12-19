import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import { Idiots, Idioms, Adjectives, Nouns, Verbs } from '/lib/collections';
import _ from 'lodash';
import nlp from 'nlp_compromise';
import md5 from 'md5';

export default function () {
  Meteor.methods({
    'idiots.upvote'(idiotId) {
      console.log('upvote method', idiotId);
      Idiots.update({_id: idiotId}, {
        $inc: {
          votes: 1
        }
      });
    },
    'idiots.generate'() {
      const idioms = Idioms.find().fetch();

      const dictionary = {
        nouns: Nouns.find().fetch().map((noun) => noun.word),
          verbs: Verbs.find().fetch().map((verb) => verb.word),
            adjectives: Adjectives.find().fetch().map((adjective) => adjective.word),
      };

      const randomOf = (array) => {
        const index = Math.floor(Math.random() * array.length);
        return array[index];
      };

      const insertWordsOfType = (template, wordType, localDictionary) => {
        let [ type, filter ] = wordType.split(':');

        const words = localDictionary[`${type}s`];
        let output = template;

        while (output.indexOf(`{${wordType}}`) > -1) {
          let word = randomOf(words);
          let newWord = word;

          // if we have a filter on the type
          // do filter
          if (typeof filter !== 'undefined') {
            switch (filter) {
              case 'with_article':
                newWord = 'a';
                if (['a', 'e', 'i', 'o', 'u', 'h'].indexOf(word[0]) > -1) {
                  newWord += 'n';
                }
                newWord += ' ' + word;
                break;
              case 'plural':
                newWord = nlp.noun(word).pluralize();
                break;
              case 'possessive':
                newWord += `'`;
                if (newWord[newWord.length -2] !== 's') {
                  newWord += 's';
                }
                break;
              case 'superlative':
                newWord = nlp.adjective(word).to_superlative();
                break;
              default:
                newWord = nlp.verb(word).conjugate()[filter];
            }
          }

          // remove duplicate
          _.pull(words, word);
          output = output.replace(`{${wordType}}`, newWord);
        }

        return output;
      };

      const mix = () => {
        let idiom = randomOf(idioms);
        let output = idiom.template;
        let localDictionary = Object.assign({}, dictionary);
        const types = output.match(/{([\w:]+)+}/g).map(function(x) { return x.match(/([\w:]+)+/)[0]; });
        console.log(types);
        types.forEach((type) => {
          output = insertWordsOfType(output, type, localDictionary);
        });

        idiom.output = output;

        return idiom;
      };

      const idiot = mix();
      return Meteor.call('idiots.create', idiot);
    },
    'idiots.create'(idiot) {
      check(idiot, Object);
      idiot.originalId = idiot._id;
      idiot._id = md5(idiot.output);
      if (Idiots.findOne(idiot._id)) {
        return idiot._id
      }
      return Idiots.insert(Object.assign(idiot, {createdAt: new Date(), votes: 0}));
    }
  });
}
