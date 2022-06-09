import React, { useState } from "react";

export default function Todo({ 
  title,
  author,
  description,
  dateCreated,
  complete,
  dateCompleted,
  id,
  updateTodo,
  deleteTodo}) {
  /*function handleCheckbox(event){
    const newTodo = {
      title,
      description,
      complete: event.target.checked,
      dateCreated,
      dateCompleted: Date.now(),
    }
    updateTodos(index, newTodo)
  }*/
  const [checked, updateChecked] = useState(false)
  const handleToggleEvent = (event) => {
    updateChecked(event.target.checked)
    const updatedTodo = {title, description, dateCreated, complete:!complete, dateCompleted: Date.now(), id}
    updateTodo(id,updatedTodo)
  }
  return (
    <div>
      <h3>{title}</h3>
      <div>{description}</div>
      <br />
      Author: <b>{author}</b>
      <br/>
      Date Created: {new Date(dateCreated).toDateString()}
      <br/>
      Complete: {complete}
      <input type="checkbox" value={checked} onChange={handleToggleEvent}/>
      <br />
      Date Completed: {complete ? new Date(dateCompleted).toDateString() : 'Not yet completed'}
      <br />
      <input type="button" value="Delete this todo" onClick={() => deleteTodo(id)} />
    </div>
  );
}