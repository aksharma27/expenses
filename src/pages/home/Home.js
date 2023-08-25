import React from 'react'
import TopFold from '../../components/topfold/index';
import './home.css';
import ExpenseList from '../../components/expenselist/index';

const Home = () => {
  return (
    <div className='home'>
    <TopFold/>
    <ExpenseList/>
    </div>
  )
};

export default Home;