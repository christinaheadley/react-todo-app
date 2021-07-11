// import logo from "./logo.svg";
import "./App.css";
import TodoItem from "./components/TodoItem";
import todosData from "./todosData";

function App() {
  const todoItems = todosData.map((item) => <TodoItem key={item.id} item={item} />);
  return <div className="todo-list">{todoItems}</div>;
}

// examples of how to include dynamic JS
// function App() {
//   const firstName = "Bob"
//   const lastName = "Ziroll"

//   return (
//     <h1>Hello {firstName + " " + lastName}!</h1>
// OR <h1>Hello {`${firstName} ${lastName}`}!
// <h1>It is currently about {date.getHours() % 12} o'clock!</h1>
//   )
// }
// OR
// function App() {
//   const date = new Date()
//   const hours = date.getHours()
//   let timeOfDay

//   if (hours < 12) {
//     timeOfDay = "morning"
//   } else if (hours >= 12 && hours < 17) {
//     timeOfDay = "afternoon"
//   } else {
//     timeOfDay = "night"
//   }

//   return (
//     <h1>Good {timeOfDay}!</h1>
//   )
// }

export default App;
