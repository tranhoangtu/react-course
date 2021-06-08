import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("");

  const filterHandler = (year) => {
    setFilterYear(year);
  };

  const filterExpenses = props.items.filter(
    (item) => item.date.getFullYear().toString() === filterYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter selectedYear={filterYear} onFilter={filterHandler} />
      <ExpensesChart expenses={filterExpenses} />
      <ExpensesList items={filterExpenses} />
    </Card>
  );
};

export default Expenses;
