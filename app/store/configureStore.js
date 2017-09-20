import { createStore } from 'redux';
import rootReducer from '../reducers';

export default (options = {}) => {
  const {
    initialState = {}
  } = options;


  const store = createStore(rootReducer, initialState);

  return store;
}