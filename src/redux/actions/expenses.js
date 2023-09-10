import {ADD_EXPENSE, SEARCH_EXPENSE} from '../action-types/expenses';
import { DELETE_EXPENSE } from '../action-types/expenses';

export const addExpense = (data) => {       //data is passed through params, and is going to reducers, which parse it as an array
    // console.log(data);
    return {
        type : ADD_EXPENSE,
        //this type will be referenced by the reducer, and write cases for each function in reducer
        data
    }
};

export const deleteExpense = (data) => {
    return {
        type : DELETE_EXPENSE,
        data
    }
};

export const  searchExpense = (query) => {
    return {
        type : SEARCH_EXPENSE,
        query,
    }
}