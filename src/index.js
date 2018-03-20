import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './css/custom.css';

import store from './store/store.js';

import App from './router/App.jsx';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
            </Switch>
        </Router>
    </Provider>
    , document.getElementById('root'),
);
