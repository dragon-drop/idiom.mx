import { Idioms, Adjectives, Nouns, Verbs } from '/lib/collections';
import { Meteor } from 'meteor/meteor';


export default function () {
  if(Idioms.find().count() === 0) { 
    const idioms = [
      {
        template: 'A hot {noun}',
        description: 'Speak of an issue (mostly current) which many people are talking about and which is usually disputed',
        original: 'A hot potato',
        nouns: ['potato'],
      },
      {
        template: 'Does the {noun} shit in the {noun}?',
        description: 'A rhetorical question, implying the answer is an obvious yes',
        original: 'Does the bear shit in the woods?',
        nouns: ['bear', 'woods'],
      },
      {
        template: 'Is the {noun} a {noun}?',
        description: 'A rhetorical question, implying the answer is an obvious yes',
        original: 'Is the Pope a Catholic?',
        nouns: ['pope', 'catholic'],
      },
      {
        template: '{verb:gerund} up the wrong {noun}',
        description: 'Looking in the wrong place. Accusing the wrong person',
        original: 'Barking up the wrong tree',
        nouns: ['tree'],
        verbs: ['bark'],
      },
      {
        template: 'Crying over {verb:past} {noun}',
        description: 'When you complain about a loss from the past',
        original: 'Crying over spilt milk',
        verbs: ['spill'],
        nouns: ['milk'],
      }
    ];

    idioms.forEach((idiom) => {
      Meteor.call('idioms.create', idiom);
    });
  }
}
