// Core
import { createStore } from 'redux';

// Root reducer
import { reducer } from './reducers';

const store = createStore(reducer);

export { store };
