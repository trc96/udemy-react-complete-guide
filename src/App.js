import Expenses from "./components/Expenses/Expenses"
import React from 'react';
//Line 2 is for older react code, needed in the past for the commented out return format, It's in every file that has JSX

const App = (props) => {

  // return React.createElement(
  //   'div', 
  //   {}, 
  //   React.createElement('h2', {}, `Let's get started!`), 
  //   React.createElement(Expenses, {items: props.expenseItem})
  //   );
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={props.ExpenseItem}/>
    </div>
  );
}

export default App;
