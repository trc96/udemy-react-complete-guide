import React from 'react';

import Expenses from "./components/Expenses/Expenses"
import NewExpense from './components/NewExpense/NewExpense';
//Line 2 is for older react code, needed in the past for the commented out return format, It's in every file that has JSX

const App = (props) => {

  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense);
  }

  // return React.createElement(
  //   'div', 
  //   {}, 
  //   React.createElement('h2', {}, `Let's get started!`), 
  //   React.createElement(Expenses, {items: props.expenseItem})
  //   );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={props.ExpenseItem}/>
    </div>
  );
}

export default App;
