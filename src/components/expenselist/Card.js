import React from 'react';
import './card.css';
import moment from 'moment/moment';
import { useDispatch } from 'react-redux';
import { deleteExpense } from '../../redux/actions/expenses';

const Card = ({item, logo}) => {
  const time = moment(item.caretedAt).fromNow();      //fromNow() is the method momentjs gives to show x moments ago in our app
  const dispatch = useDispatch(); //for delete function -> delete icon

  const handleDelete = () => {
    dispatch(deleteExpense(item));
  }


  console.log(item)
  return (
    <div className='card' style={{borderRight: `6px solid ${item.category.color}`}}>
      <div className="card-image-container">
        <img src={item.category.icon} alt={item.category.title} className='card-image'/>
      </div>

      <div className='card-info'>   
    {/* use npm package -> MomentJs to show active now or created x mins/hr/days/etc ago */}

    <label className='card-title'>{item.title} </label> <br />
    <label className='card-time'> {time} </label>
      </div>

      {/* new div for rightbar -> it will contain delete button and amount at the right end of the card */}
      <div className='card-right'>
        {/* amount */}
        <div>
          <label className='card-amount' >₹{item.amount}</label>
        </div>
        <div className="delete-icon" onClick={handleDelete}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg>
        </div>
      </div>

    </div>
  )
}

export default Card
