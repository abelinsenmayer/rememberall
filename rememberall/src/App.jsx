import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoList from './todolist/ToDoList'
import { ToDo } from './todolist/ToDoListItem'

function App() {
  const [count, setCount] = useState(0)

  const items = [
    new ToDo("Jumping jacks", false),
    new ToDo("Do the dishes", false)
  ]

  return (
    <>
      <ToDoList initItems={items} />
    </>
  )
}

export default App
