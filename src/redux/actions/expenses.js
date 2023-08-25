import {ADD_EXPENSE} from '../action-types/expenses';

export const addExpense = (data) => {
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
}