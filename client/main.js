import React from 'react';
import { Meteor } from 'meteor/meteor';
// import '../lib/config/at_config.js'
import { user } from '../imports/api/user.js'
import { child } from '../imports/api/child.js'
import { render } from 'react-dom';
import { Childcolb } from '../imports/ourdb/Contents.js';

import App from '../imports/mainContainer/App.jsx';
import '../imports/startup/accounts-config.js';
Meteor.startup(() => {
    render( < App / > , document.getElementById('render-target'));
});