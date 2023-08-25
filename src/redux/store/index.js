import {combineReducers, createStore} from "redux";
import { expenseReducer } from "../reducers/expenses";

const initialState = {}
const reducer = combineReducers({       //combine all the reducers together so that it can be passed to the store
    expenses : expenseReducer

})
const store = createStore(reducer, initialState);    //contains 2 args, 3 if using middlewares

export default store;