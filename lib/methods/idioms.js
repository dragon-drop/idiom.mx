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

      if (typeof nouns !== 'undefined' && typeof nouns !== 'string') {
        nouns.forEach((noun) => {
          const word = noun.trim();
          Nouns.upsert({
            _id: word},
            {
              $set: {
                idiomId: idiom._id,
                word,
              }
            }
          );
        });
      }

      if (typeof verbs !== 'undefined' && typeof verbs !== 'string') {
        verbs.forEach((verb) => {
          const word = verb.trim();
          Verbs.upsert({ _id: word },
            {
              $set: {
                idiomId: idiom._id,
                word,
              }
            });
        });
      }

      if (typeof adjectives !== 'undefined' && typeof adjectives !== 'string') {
        adjectives.forEach((adjective) => {
          const word = adjective.trim();
          Adjectives.upsert({ _id: word} ,
            {
              $set: {
                idiomId: idiom._id,
                word,
              }
            });
        });
      }
    }
  });
}
