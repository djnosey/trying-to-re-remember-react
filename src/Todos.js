import React from "react";

function Todos(props) {
  console.log(props);
  return (
    <div>
      <ul>
        {props.todos.map((todo) => {
          return (
            <li className={todo.completed ? "green-background" : ""} key={todo.id}>
              <input
                onChange={() => props.completeTodo(todo.id)}
                name="completed"
                type="checkbox"
              ></input>
              {todo.title}
              {todo.content}
              <button onClick={() => props.deleteTodo(todo.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todos;
