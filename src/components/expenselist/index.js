import React from 'react'
import './expense.css';
import Card from './Card';
import { useSelector } from 'react-redux';
import emptyImage from '../../assets/images/empty.png';
import { ToastContainer, toast } from 'react-toastify';

const ExpenseList = () => {

    const notifySuccess = () => toast.success("Expense Deleted Successfully!")
    // const list = [{
    //     title: 'Made a purchase',
    //     logo: 'ddlh',
    //     createdAt: Date.now(),
    //     amount: 1234,
    // }];

    const {expenseList : list} = useSelector(state => state.expenses);  //will give all the data inside the expenses, when we enter the expenses and move back to home, it will be updated
    console.log(list)

 return <div className='expense-list'> 
            <ToastContainer
position="top-right"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss={false}
draggable
pauseOnHover={false}
theme="dark"
/>

            {/* if we have at least 1 list in our expenses, then map throught it */}
            {list.length ? list.map(item=>(
                <Card item={item} notifySuccess = {notifySuccess}/> 
            )): <div className='empty-state' > {/*If Empty state then pass this */}
                <img src={emptyImage} alt="Empty List" className='empty-image' />
                <label htmlFor="">Your empty list is empty!!</label>
            </div> }
  </div>
};

export default ExpenseList;