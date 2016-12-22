import {Idiots} from '/lib/collections';
import {Meteor} from 'meteor/meteor';

export default function () {
  console.log('running publication');
  Meteor.publish('idiot', function (idiotId) {
    console.log('idiotId', idiotId);
    return Idiots.find(idiotId);
  });
}
