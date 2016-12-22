import { Idioms, Idiots, Adjectives, Nouns, Verbs } from '/lib/collections';
import { Meteor } from 'meteor/meteor';


export default function () {
  Idioms.remove({});
  Idiots.remove({});
  Adjectives.remove({});
  Nouns.remove({});
  Verbs.remove({});

  if (Idioms.find().count() === 0) {
    const idioms = [
      {
        original: 'Once in a blue moon',
        template: 'Once in {adjective:with_article} {noun}',
        nouns: ['moon'],
        adjectives: ['blue', 'awesome']
      },
      {
        original: 'Actions speak louder than words',
        template: '{noun:plural} speak louder than {noun:plural}',
        nouns: ['action', 'word'],
      },
      {
        original: 'Curiosity killed the cat',
        template: 'Curiosity {verb:past} the {noun}',
        nouns: ['cat'],
        verbs: ['kill'],
      },
      {
        original: 'Best thing since sliced bread',
        template: '{adjective:superlative} thing since {verb:past} {noun}',
        nouns: ['bread'],
        verbs: ['slice'],
        adjectives: ['good'],
      },
      {
        original: 'Straight from the horse\'s mouth',
        template: 'Straight from the {noun:possessive} {noun}',
        nouns: ['horse', 'mouth'],
      },
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
        template: 'Is the {noun} {noun:with_article}?',
        description: 'A rhetorical question, implying the answer is an obvious yes',
        original: 'Is the pope a catholic?',
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
      },
      {
        original: 'Beat around the bush',
        template: '{verb} around the {noun}',
        nouns: ['bush'],
        verbs: ['beat'],
      },
      {
        original: 'Bite off more than you can chew',
        template: '{verb} off more than you can {verb}',
        verbs: ['bite', 'chew'],
      },
      {
        original: 'Burn the midnight oil',
        template: '{verb} the midnight {noun}',
        verbs: ['burn'],
        nouns: ['oil'],
      },
      {
        original: "Don't judge a book by its cover",
        template: "Don't {verb} {noun:with_article} by its cover",
        verbs: ['judge'],
        nouns: ['book' ],
      },
      {
        original: "Drastic times call for drastic measures",
        template: "Drastic {noun:plural} call for drastic {noun:plural}",
        nouns: ['time', 'measure'],
      },

      {
        original: 'Every cloud has a silver lining',
        template: 'Every {noun} has a silver {noun}',
        nouns: ['cloud', 'lining'],
      },
      {
        original: 'Hit the nail on the head',
        template: 'Hit the {noun} on the {noun}',
        nouns: ['nail', 'head'],
      },
      {
        original: 'Kill two birds with one stone',
        template: 'Kill two {noun:plural} with one {noun}',
        nouns: ['bird', 'stone'],
      },
      {
        original: 'Let sleeping dogs lie',
        template: 'Let {verb:gerund} {noun:plural} lie',
        nouns: ['dog'],
        verbs: ['sleep'],
      }
    ];

    idioms.forEach((idiom) => {
      Meteor.call('idioms.create', idiom);
    });
  }
}
