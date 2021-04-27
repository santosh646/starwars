// Third-Party dependencies
import {
  applyMiddleware,
  combineReducers,
  createStore,
  Store
} from 'redux';

// React Sagas
import createSagaMiddleware from 'redux-saga';

import {createLogger} from 'redux-logger';

// Chrome Dev Tools
import { composeWithDevTools } from 'redux-devtools-extension';

// Business domain imports
import IAppState from './IAppState.interface';
import CharacterReducer from '../reducers/CharacterReducer';
import { charactersSaga } from '../sagas/Character';

// Saga Middleware
const sagaMiddleware = createSagaMiddleware();


// Create the root reducer
const rootReducer = combineReducers<IAppState>({
  characterState: CharacterReducer,
});

// Create a configure store function of type `IAppState`
export default function appStore(): Store<IAppState, any> {
  const store = createStore(
                  rootReducer,
                  undefined,
                  composeWithDevTools(applyMiddleware(sagaMiddleware,createLogger()))
                );

  sagaMiddleware.run(charactersSaga);

  return store;
}
