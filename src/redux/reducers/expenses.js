const initialState = { //all the initial state of variables/objects which we'll be passing
    expenseList: [], //all the expenses which we'll add by the add button in our application, later we'll replace it will local storage to keep the state even after reloading
};

export const expenseReducer = (state = initialState, action) => {
    switch (action.type) {  //based on the actions we have switch statement to carry on the tast according to the action
        default: 
            return state;
    }
}