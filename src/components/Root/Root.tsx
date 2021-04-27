import * as React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';

// Business domain imports
import App from '../app/App';
import IAppState from '../../redux/store/IAppState.interface';

// Create interface for Props
interface IProps {
  store: Store<IAppState>;
}

// Create a root component that receives the store via props and
// wraps the App component with Provider, giving props to containers
const Root: React.SFC<IProps> = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
