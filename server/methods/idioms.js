import {Idioms, Nouns, Adjectives, Verbs } from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import md5 from 'md5';

export default function () {
  Meteor.methods({
    'idioms.create'(idiom) {
      check(idiom, Object);
      const { adjectives, nouns, verbs } = idiom;

      delete idiom.nouns;
      delete idiom.adjectives;
      delete idiom.verbs;

      idiom._id = md5(idiom.original);
      Idioms.insert(idiom);

      if (typeof nouns !== 'string') {
        nouns.forEach((noun) => {
          const word = noun.trim();
          Nouns.insert({
            _id: word,
            idiomId: idiom._id,
            word,
          });
        });
      }

      if (typeof verbs !== 'string') {
        verbs.forEach((verb) => {
          const word = verb.trim();
          Verbs.insert({
            _id: word,
            idiomId: idiom._id,
            word,
          });
        });
      }

      if (typeof adjectives !== 'string') {
        adjectives.forEach((adjective) => {
          const word = adjective.trim();
          Adjectives.insert({
            _id: word,
            idiomId: idiom._id,
            word,
          });
        });
      }
    }
  });
}
