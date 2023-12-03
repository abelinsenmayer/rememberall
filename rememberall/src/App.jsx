import { useState } from 'react'
import './App.css'
import ToDoList from './todolist/ToDoList'
import { ToDo } from './todolist/ToDoListItem'
import { useEffect } from 'react'

function App() {
  const items = [
    new ToDo("Jumping jacks", false),
    new ToDo("Do the dishes", false)
  ]

  return (
    <>
      <ToDoList initItems={items} title="My First List" />
    </>
  )
}

export default App
