import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout.jsx';
import NewIdiom from './containers/new_idiom';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/partridge/the-real-ira', {
    name: 'new_idiom',
    action() {
      mount(MainLayoutCtx, {
        content: () => (< NewIdiom />)
      });
    }
  });
}
