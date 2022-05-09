import Expenses from "./components/Expenses"

function App(props) {
  return (
    <Expenses items={props.ExpenseItem}/>
  );
}

export default App;
