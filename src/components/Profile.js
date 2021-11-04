import React from "react"
import TodoForm from "./TodoForm.js"


export default function Profile(){
  return(
    <div>
      <h1>Welcome! {}</h1>
      <h3>Add Todo</h3>
      <TodoForm />
      <h3>Your Todos</h3>
    </div>
  )
}