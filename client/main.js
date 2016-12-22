import {createApp} from 'mantra-core';
import initContext from './configs/context';
import { DocHead } from 'meteor/kadira:dochead';

// modules
import coreModule from './modules/core';
import adminModule from './modules/admin';

// Configure head
DocHead.addMeta({
  name: 'viewport',
  content: 'width=device-width, initial-scale=1.0',
});

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(adminModule);
app.init();
