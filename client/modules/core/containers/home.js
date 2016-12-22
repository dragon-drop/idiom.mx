import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Home from '../components/home.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, FlowRouter} = context();
    Meteor.call('idiots.generate', (error, idiotId) => {
      if(error) {
        return console.error(error);
      }
      FlowRouter.go(`/${idiotId}`);
    });
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Home);
