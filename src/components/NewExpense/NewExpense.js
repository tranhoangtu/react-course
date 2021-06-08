import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  const [isAdd, setIsAdd] = useState(false);

  const saveExpense = (expense) => {
    let newExpense = {
      ...expense,
      id: Math.random().toString()
    }
    props.onAddExpense(newExpense);
  }

  const clickAddExpenseHandler = (e) => {
    setIsAdd(true);
  }

  const clickCancelHandler = () => {
    setIsAdd(false);
  }

  return (
    <div className='new-expense'>
      {!isAdd && <button onClick={clickAddExpenseHandler}>Add New Expense</button>}
      {isAdd && <ExpenseForm onSaveExpenseData={saveExpense} onCancel={clickCancelHandler} />}
    </div>
  );
};

export default NewExpense;
