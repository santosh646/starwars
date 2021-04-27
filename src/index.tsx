import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Business domain
import configureStore from "./redux/store/Store";
import Root from './components/Root/Root';
import 'bootstrap/dist/css/bootstrap.css';

// Generate the store
const store = configureStore();

// Render the App
ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root') as HTMLElement
);
