import React, { useState } from 'react';
import './add-form.css';
import { categories } from '../../constants/add-expenes';
import { useDispatch } from 'react-redux';          //useDispatch hook is used to establish connection with reducer;
import {addExpense} from '../../redux/actions/expenses';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SuccessModal from './success-modal';

const AddForm = () => {
    const cat = categories;    //object of our cattegories array

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState();
    const [categoryOpen, setCategoryOpen] = useState(false);
    const[modalOpen, setModalOpen] = useState(false);

    const dispatch = useDispatch();                 //useDispatch() hook stored in dispatch

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }
    const handleAmount = (e) => {
        const val = parseFloat(e.target.value); //for value in decimal places
        if(isNaN(val)){ //so that only number are entered, not any other string value
            setAmount('')
            return 
        } else {
            setAmount(val)
        }
    }


    const handleCategory = (category) => {
        setCategory(category)
        setCategoryOpen(false)    //so that dropdown closes when the category is selected
    }

    //handle submit for adding our custom expense containing (title, category and amout)
    const handleSubmit = () => {
      // if title or amount or category is empty then give error message 
      if (title === '' || amount === '' || !category) {
          const notify = () => toast('Please enter valid data!');
          notify();
          return;
      } 
      const data = {
        title, 
        amount,
        category,
        createdAt : new Date()
      }
      console.log('here');
      dispatch(addExpense(data));         //data passed as argument to addExpense method in actions in redux
        //ELSE DO THIS : addexpense from reducer function
        //when submit is clicked, this data object is created and dispatch the AddExpense func and pass data as parameter
        // 1:38:45
        setModalOpen(true);
        
    };

  return (
    <div className='add-form'>

        {/* TOAST AFTER ADDING THE CATEGORY */}
        <ToastContainer
position="bottom-center"
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
<SuccessModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>


      {/* 3 form item : title, amount and dropdown */}
      <div className="form-item">
        <label>Title</label>
        <input placeholder='Expenditure Name' value={title} onChange={(event)=>handleTitle(event)}/>
      </div>
      <div className="form-item">
        <label htmlFor="">Amount ₹</label>
        <input placeholder='Enter Amount' value={amount} onChange={(e) => handleAmount(e)} className='amount-input'/>
      </div>
      <div className="category-container-parent">
        <div className="category">
            <div className='category-dropdown'    //category drop down
              onClick={()=>setCategoryOpen(!categoryOpen)}
            >
                <label>{category? category.title : 'Category'}</label> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
</svg>

{/* create category types in constants folder in our src folder */}
    {/* map through our category array */}
    {categoryOpen&&<div className='category-container'>
      {cat.map(category=>(
        //for each cateogry return a div with label containing the title of category, an image with category.icon
        <div className='category-item' style={{
          borderRadius: `5px solid ${category.color.default}`
        }} /* also pass the key, as react mandates to pass the key for better performance */
          key={category.id}
          onClick={()=> handleCategory(category)}       //onclick to store the current state on which category is selected
        >
          <label>{category.title}</label>
          <img src={category.icon} alt={categories.title}/>    {/* use default else the image won't be visible, because when we create react with npm default is mandatory*/}
        </div>
      ))}
      </div>}

            </div>
        </div>
      </div>
      <div className="form-add-button">
        <div onClick={handleSubmit} >
          <button>Add
          <svg  style={{cursor: 'pointer'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send-plus-fill" viewBox="0 0 16 16">
            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 1.59 2.498C8 14 8 13 8 12.5a4.5 4.5 0 0 1 5.026-4.47L15.964.686Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
            <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z"/>
          </svg>
          </button>
          
        </div>
      </div>
    </div>
  )
}

export default AddForm;
