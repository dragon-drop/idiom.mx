import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import NewIdiom from '../components/new_idiom.jsx';

export const composer = ({context}, onData) => {
  const { LocalState } = context();
  const status = LocalState.get('status');
  onData(null, { status });
};

export const depsMapper = (context, actions) => ({
  createIdiom: actions.idioms.create,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(NewIdiom);
