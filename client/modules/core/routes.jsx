import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout.jsx';
import Home from './containers/home.js';
import Idiot from './containers/idiot.js';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'home',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Home />)
      });
    }
  });

  FlowRouter.route('/:_id', {
    name: 'idiot',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Idiot />)
      });
    }
  });
}
