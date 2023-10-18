import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { rootReducer } from './reducers';
import { saveContactsToLocalStorage } from 'services/localStorage';

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);

store.subscribe(() => {
  saveContactsToLocalStorage(store.getState().contacts);
});
