
import './App.css';
import React, { useState, useReducer, useEffect } from "react";
import UserBar from './UserBar'
import TodoList from "./TodoList";
import CreateTodo from "./CreateTodo";
import appReducer from './reducers';
import StateContext from "./context";
import { useResource } from 'react-request-hook';

import HeaderBar from "./pages/HeaderBar";
import HomePage from "./pages/HomePage";

import { Router, View } from 'react-navi'
import { mount, route } from 'navi'
import TodoPage from "./pages/TodoPage";


function App() {
  
  const routes = mount({
    '/': route({ view: <HomePage /> }),
    '/todos/create':route({ view: <CreateTodo /> }),
    '/todos/:id': route(req => {
        return { view: <TodoPage id={req.params.id} /> }
    }),
  })
  
  const [ state, dispatch ] = useReducer(appReducer, { user: '', todos: []})
 
  useEffect(() => {
    console.log('user effect hook firing')
    if (state.user) {
       document.title = `${state.user}’s Todos` 
     } else {
       document.title = 'My Todos'
     }
   }, [state.user]
  )

  return (
    <Router routes={routes}>
    <StateContext.Provider value={{ state, dispatch }}>
      <HeaderBar />
      <View />
    </StateContext.Provider>
    </Router>
  );
}

export default App;
