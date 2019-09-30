import React from 'react';
import ReactDOM from 'react-dom';
import './SCSS/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ContextProvider} from './context/providerComposer.js';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

ReactDOM.render(
  <ContextProvider>
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <App />
    </MuiPickersUtilsProvider>
  </ContextProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
