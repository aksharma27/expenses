import React from 'react'
import TopFold from '../../components/topfold/index';
import './add-expense.css';
import AddForm from '../../components/add-form/index';

const AddExpense = () => {
  return (
    <div className='add-expense'>
      <TopFold/>
      <AddForm/>
    </div>
  )
}

export default AddExpense;
