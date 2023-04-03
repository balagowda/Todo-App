import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import todoReducers from './reducer/todoReducers';
import {authReducers} from './reducer/auth.reducer';

const reducer = combineReducers({
   Todo:todoReducers,
   auth:authReducers,
});

const initialState = {}

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;