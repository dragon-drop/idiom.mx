import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Idiot from '../components/idiot.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, FlowRouter, Collections} = context();
  const idiotId = FlowRouter.getParam('idiotId');
  if (Meteor.subscribe('idiot', idiotId).ready()) {
    const idiot = Collections.Idiots.findOne(idiotId);
    let isUpvoted = false;

    let idiomLocal = window.localStorage.getItem('idiom.mx');

    if (idiomLocal) {
      const { upvoted } = JSON.parse(idiomLocal);
      isUpvoted = upvoted && upvoted.indexOf(idiotId) > -1;
    }

    onData(null, {idiot, isUpvoted});
  }
};

export const depsMapper = (context, actions) => ({
  upvote: actions.idiots.upvote,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Idiot);
