import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoList from './todolist/ToDoList'
import ToDoListItem from './todolist/ToDoListItem'

function App() {
  const [count, setCount] = useState(0)

  const items = [
    new ToDoListItem("Jumping jacks", false),
    new ToDoListItem("Do the dishes", true)
  ]

  return (
    <>
      <ToDoList initItems={items} />
    </>
  )
}

export default App
