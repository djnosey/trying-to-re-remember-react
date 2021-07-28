import React from "react";

function Todos(props) {
  console.log(props);
  return (
    <div>
      <ul>
        {props.todos.map((todo) => {
          return (
            <li key={todo.id}>
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
