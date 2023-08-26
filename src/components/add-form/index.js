import React, { useState } from 'react';
import './add-form.css';
import { categories } from '../../constants/add-expenes';

const AddForm = () => {
    const cat = categories;    //object of our cattegories array

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState();
    const [categoryOpen, setCategoryOpen] = useState(false);

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

  return (
    <div className='add-form'>
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
    </div>
  )
}

export default AddForm;
