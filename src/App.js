// import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";
import TodoItem from "./components/TodoItem";
import Header from "./components/Header";

function App() {
  return (
    <div className="todo-list">
      <Header />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <Footer />
    </div>
  );
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
