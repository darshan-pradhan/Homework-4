import React,{ useContext} from "react";
import {useResource} from "react-request-hook";
import Todo from "./Todo";
import StateContext from "./context";

export default function TodoList({ todos = []}) {
  const {dispatch} = useContext(StateContext);
  const [todo , toggleTodo ] = useResource((updatedTodo) => ({
    url: `/todos/${updatedTodo.id}`,
    method: "patch",
    data: updatedTodo
  }))

    const updateTodo = (id, updatedTodo) => {
      const updatedTodos = todos.map((todo) => todo.id === id ? updatedTodo : todo)
      toggleTodo(updatedTodo);
      dispatch({type: 'TOGGLE_TODO', updatedTodos})
    }

    const [td, removeTodo ] = useResource(id => ({
      url: `/todos/${id}`,
      method: "delete",
    }))

    const deleteTodo = (id) => {
      const updatedTodos = todos.filter((todo) => todo.id !== id)
      removeTodo(id);
      dispatch( {type: 'DELETE_TODO', updatedTodos})
    }

    return (
    <div>
      {todos.map((p, i) => (
        <Todo {...p} updateTodo={updateTodo} deleteTodo={deleteTodo} key={p.id} />
      ))}
    </div>
  );
}