import React, { useState } from 'react';
import './add-form.css';

const AddForm = () => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState();

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
            <div>
                <label>Category</label>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddForm;
