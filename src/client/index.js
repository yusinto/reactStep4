// Import the render method from react-dom so we can mount our
// component onto an html element
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from '../common/route';

// This is the entry point into our react app on the client side. Again
// we use jsx to create our ReactElement and mount it onto a div called
// reactDiv on the html template.
render(<Router routes={routes} history={browserHistory}/>, document.getElementById('reactDiv'));