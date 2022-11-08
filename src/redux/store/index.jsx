import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducerAllMovies } from "../reducers/reducerAllMovies";
import thunk from "redux-thunk";

export const store = createStore(reducerAllMovies, applyMiddleware(thunk))