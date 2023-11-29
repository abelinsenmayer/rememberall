import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoList from './todolist/ToDoList'
import { ToDo } from './todolist/ToDoListItem'
import { DragDropContext } from 'react-beautiful-dnd'

function App() {
  const [count, setCount] = useState(0)

  const items = [
    new ToDo("Jumping jacks", false),
    new ToDo("Do the dishes", false)
  ]

  return (
    <DragDropContext>
      <ToDoList initItems={items} />
    </DragDropContext>
  )
}

export default App
