import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
//import { createLogger } from 'redux-logger';


let middleware = [
    thunkMiddleware,
    //createLogger(),
];
export default applyMiddleware(...middleware)(createStore);
