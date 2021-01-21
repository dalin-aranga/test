import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { productListReducer } from './reducers/productReducers';
import thunk from 'redux-thunk';
import { userSigninReducer } from './reducers/userReducers';


const initialState= {};
const reducer = combineReducers({
    productList: productListReducer,
    /*productDetails: productDetailstReducer,/*meka ain karala balanna awlk awoth*/
    userSignin: userSigninReducer,

})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(reducer, initialState, compose (applyMiddleware(thunk)));

export default store;