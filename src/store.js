
// 建立仓库
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './reducers';
const { composeWithDevTools } = require('redux-devtools-extension');

let store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store;