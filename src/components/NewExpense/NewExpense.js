import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  const saveExpense = (expense) => {
    let newExpense = {
      ...expense,
      id: Math.random().toString()
    }
    props.onAddExpense(newExpense);
  }

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpense} />
    </div>
  );
};

export default NewExpense;
