import "./App.css";
import Navbar from "./Navbar";
import NewTodoForm from "./NewTodoForm";
import Todos from "./Todos";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    let copyOfState = [...todos];
    let newState = [...copyOfState, todo];
    setTodos(newState);
  };

  const deleteTodo = (id) => {
    let copyOfState = [...todos];
    let newState = copyOfState.filter((todo) => todo.id !== id);
    setTodos(newState);
  };

  console.log(todos);

  return (
    <div className="App">
      <Navbar />
      <NewTodoForm addTodo={addTodo} />
      <Todos todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
