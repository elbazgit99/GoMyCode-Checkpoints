import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  // Redux DevTools Extension setup (optional, but very helpful for debugging)
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
