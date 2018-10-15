import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';


let middleware = [
    thunkMiddleware,
];
export default applyMiddleware(...middleware)(createStore);
