// Core
import { createStore } from 'redux';

// Root reducer
import { rootReducer } from './reducers';

const store = createStore(rootReducer);

export { store };
