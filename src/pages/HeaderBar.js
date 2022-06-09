import React, { useContext } from 'react'
import UserBar from '../UserBar'
import CreateTodo from '../CreateTodo'

import StateContext from '../context'
import TodoList from '../TodoList';

export default function HeaderBar () {
    const {state} = useContext(StateContext);
    const {user} = state;
return (
    <>
    <nav class = "navbar navbar"><div class="container-fuild"><h1>My Todo</h1></div></nav>
    <UserBar  />
    {user && <CreateTodo  />}
    <TodoList /> 
    </>
)}