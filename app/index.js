import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import configureStore from './store/configureStore';
import Routes from './routes';
import './styles/homepage.css';

const history = createBrowserHistory();
const store = configureStore({
  initialState: {}
});

ReactDOM.render(
  <Provider store={store} >
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById('root')
);