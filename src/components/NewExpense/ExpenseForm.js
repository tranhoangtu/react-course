import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {

  const [userInput, setUserInput] = useState({title: '', amount: '', date: ''});

  const userInputChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    console.log(name);
    setUserInput((prevState) => {return {
      ...prevState,
      [name]: value
    }});
  }

  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' name='title' onChange={userInputChangeHandler} value={userInput.title} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' name='amount' min='0.01' step='0.01' onChange={userInputChangeHandler} value={userInput.amount} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' name='date' min='2019-01-01' max='2022-12-31' onChange={userInputChangeHandler} value={userInput.date} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
