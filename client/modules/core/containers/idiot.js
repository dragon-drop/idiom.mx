import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Idiot from '../components/idiot.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, FlowRouter, Collections} = context();
  const idiotId = FlowRouter.getParam('_id');
  if (Meteor.subscribe('idiot', idiotId).ready()) {
    const idiot = Collections.Idiots.findOne(idiotId);
    onData(null, {idiot});
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Idiot);
