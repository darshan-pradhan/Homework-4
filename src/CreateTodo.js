import React, {useContext, useState} from "react";
import { useResource } from "react-request-hook";
import StateContext from "./context";

export default function CreateTodo() {
  const [ title, setTitle ] = useState("");
  const [ description, setDescription ] = useState("");

  const {state, dispatch} = useContext(StateContext);
  const {user} = state;

  const [todo , createTodo ] = useResource((newTodo) => ({
    url: "/todos",
    method: "post",
    data: newTodo
  }))

  function handleTitle (evt) { setTitle(evt.target.value) }
  function handleDescription (evt) { setDescription(evt.target.value) }

  function handleCreate (evt) {
    const newTodo = {
      title, 
      description, 
      author: user.username,
      complete: false,
      dateCreated: Date(Date.now()).toString(), 
      dateCompleted:null, 
      id: Math.floor(Math.random()*1000000)
    };
    createTodo(newTodo);
    dispatch({type: 'CREATE_TODO', ...newTodo});
  }

  /*function handleCreate (evt) {  
    //const newTodo = { title, description, author: user, dateCreated: Date.now(), complete: false, dateCompleted:null }
    //setTodos([newTodo, ...Todo])
    dispatch({type: 'CREATE_TODO', title, description, author:user, dateCreated: Date.now(), complete: false, dateCompleted:undefined, id: Math.floor(Math.random()*1000000)})
  }
  */
  return (
    <>
    <h2>Create a New Todo</h2>
    <form onSubmit={(e) => { e.preventDefault(); handleCreate(e) }}>
      <div>
        Author: <b>{user.username}</b>
      </div>
      <div>
        <label htmlFor="create-title">Title:</label>
        <input type="text" value={title} onChange={handleTitle} name="create-title" id="create-title" />
      </div>
      <textarea value={description} onChange={handleDescription} />
      <input type="submit" value="Create"/>
    </form>
    </>

  );
}