import React, { useState } from "react";

function NewTodoForm(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [id, setId] = useState(0);

  console.log(props);

  const ubmit = (e) => {
    e.preventDefault();
    let newid = id +1 
    setId(newid);
    let newTodo = { id, title, content };
    props.addTodo(newTodo);
  };

  return (
    <div className="newTodoForm">
      <form>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name="title"
        ></input>
        <br />
        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          name="content"
        ></input>
        <br />
        <button onClick={(e) => ubmit(e)}>Submit</button>
      </form>
    </div>
  );
}

export default NewTodoForm;
