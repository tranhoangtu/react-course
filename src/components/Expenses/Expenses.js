import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {

  const [filterYear, setFilterYear] = useState('');
  
  const filterHandler = (year) => {
    setFilterYear(year);
  }

  const filterExpenses = props.items.filter(item => item.date.getFullYear().toString() === filterYear);

  return (
    <Card className="expenses">
    <ExpensesFilter selectedYear={filterYear} onFilter={filterHandler} />
    {filterExpenses.length === 0 ? <p>No results.</p> : filterExpenses.map(item => <ExpenseItem
        key={item.id}
        id={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />)}
    </Card>
  );
}

export default Expenses;
