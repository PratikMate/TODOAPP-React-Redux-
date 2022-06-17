import { combineReducers } from "redux";
import { counterReducer } from "./counter/counter.reducer";
import { todoReducer } from "./todo/todo.reducer";
import { legacy_createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const rootReducer = combineReducers({
    counter: counterReducer,
    todo: todoReducer,
});

export const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

//composeEnhancers(applyMiddleware() helps in debuging using redux chrome extension
// must remove this after website is ready to launch