import React, { useState } from 'react'
import './topfold.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchExpense } from '../../redux/actions/expenses';

const TopFold = () => {
    const [query, setQuery] = useState("");


    const dispatch = useDispatch();

    const handleQuery = (event) => {
        setQuery(event.target.value);
        //set query as target.value
        dispatch(searchExpense(event.target.value));    //whatever we'll type in searchbar, will be passed in our state and result will be displayed, but add this in expense list first
    }

  return (
    <div className='topfold'>
      {/* //render conditionally instead of router for now : get the pathname or route or api, if it is equal to '/' then show home component*/}
     {window.location.pathname === '/' ? 
        (<div className="home-topfold">
        <div className="searchbar">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
            <input type="text" placeholder='Search Expenses' value={query} onChange={(e)=>handleQuery(e)} />
        </div>
        <Link to='/add-expense'>
        <div className="add-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
</svg> 
            <label htmlFor="add">Add</label>
        </div>
        </Link>
        
      </div>  )
     : 
        (<div className="add-topfold">
          <Link to='/'>
          <div className='add-topfold-button'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
</svg>
              <label >Back</label>
            </div>
          </Link>
           
           <Link to='/'>
           <div className='add-topfold-button'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
              <label >Cancel</label>
            </div>
           </Link>
          
        </div>)
     }
      
    </div>
  )
}

export default TopFold
