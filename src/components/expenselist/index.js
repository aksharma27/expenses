import React from 'react'
import './expense.css';
import Card from './Card';

const ExpenseList = () => {
    const list = [{
        title: 'Made a purchase',
        logo: 'ddlh',
        createdAt: Date.now(),
        amount: 1234,
    }];

 return <div> 
        {list.length ? (
            list.map(item => (
               <Card item={item}/>
            ))
        ) : null}
  </div>
};

export default ExpenseList;