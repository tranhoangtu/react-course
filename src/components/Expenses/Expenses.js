import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {

  const filterHandler = (year) => {
    console.log(year);
  }

  return (
    <Card className="expenses">
    <ExpensesFilter onFilter={filterHandler} />
    {
      props.items.map(item => <ExpenseItem
        title={item.title}
        amount={item.amount}
        date={item.date}
      />)
    }
    </Card>
  );
}

export default Expenses;
