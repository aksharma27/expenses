import {ADD_EXPENSE, DELETE_EXPENSE, SEARCH_EXPENSE} from '../action-types/expenses';

//function to call our local storage so that we donot lose our data after reload and add search/filter function
const initialList =() => {
    // has 2 things, getItem and setItem, setItem() in ADD_EXPENSE case
    const list = localStorage.getItem('expenseList');  //getItem(key); key = 'expenseList' here
    let expenses = [];
    if (list)   //list in string format, it will check if list is empty or not, if not then it will go to if condition
    {
        expenses = JSON.parse(list);
    }
    return expenses;        //if nothing in the list, empty array will be returned
}


const initialState = { //all the initial state of variables/objects which we'll be passing
    expenseList: initialList(), //pass all localStorage data here and all the expenses which we'll add by the add button in our application, later we'll replace it will local storage to keep the state even after reloading

    //ANOTHER STATE FOR FILTERING IN QUERY SEARCH
    query: " ", // 
};

export const expenseReducer = (state = initialState, action) => {
    switch (action.type) {  //based on the actions we have switch statement to carry on the tast according to the action
        case ADD_EXPENSE : {
            localStorage.setItem("expense-list", JSON.stringify([...state.expenseList, action.data]));   //setItem(key, JSON.stringify(state.expenseList)
            return {
                //return rest of the state as it is by spread operator
                ...state,
                //and add expense
                expenseList : [...state.expenseList, action.data],  // got the data from action and add it to the array expenseList[]
            }         

        }
        case DELETE_EXPENSE : {
            const {data} = action;
                const updatedList = state.expenseList.filter(
                item => item.createdAt !== data.createdAt
            );
            localStorage.setItem("expense-list", JSON.stringify(updatedList));
            return {
                ...state,
                expenseList: updatedList,
            }
        }

        case SEARCH_EXPENSE : {     //CALL THIS SEARCH_EXPENSE FUNCTION IN topfold (index.js)
            const {query} = action
            return {
                ...state,
                query: query
            }
        }
        default: 
            return state;
    }
}

//TO CHECK LOCAL STORAGE IN INSPECT : 

// inspect -> application -> application -> storage -> localStorage