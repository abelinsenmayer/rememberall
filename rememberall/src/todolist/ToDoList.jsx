import { useState } from 'react'
import CreateItemForm from './CreateItemForm'
import { ToDoListItem, ToDo } from './ToDoListItem'
import { Button } from '@mui/base'
import { List } from '@mui/material'

export default function ToDoList({ initItems }) {
    const [items, setItems] = useState(initItems)

    // Handlers for modifying list items
    const addItem = (newItem) => {
        setItems((items) => [...items, newItem])
    }
    const toggleDone = (item) => {
        setItems(items.map((i) => i == item ? new ToDo(i.text, !i.done) : i))
    }
    const remove = (item) => {
        setItems(items.filter((i) => i != item))
    }
    const updateText = (item, text) => {
        setItems(items.map((i) => i == item ? new ToDo(text, item.done) : i))
    }
    const clearCompleted = () => {
        setItems(items.filter((i) => i.done == false))
    }

    // Handlers for dragging events
    const handleDragOver = (evt) => {
        evt.preventDefault()
        evt.stopPropagation()
    }
    const handleDragEnter = (evt) => {
        evt.preventDefault()
        evt.stopPropagation()
    }
    const handleDragLeave = (evt) => {
        evt.preventDefault()
        evt.stopPropagation()
    }
    const handleDrop = (evt) => {
        evt.dataTransfer.dropEffect = "move"
        console.log(`set dropEffect to ${evt.dataTransfer.dropEffect}`)
    }

    return (
        <section onDragOver={handleDragOver} onDragEnter={handleDragEnter} onDragLeave={handleDragLeave} onDrop={handleDrop}>
            <h1>To-Do List</h1>
            <List>
                {items.map((item) =>
                    <ToDoListItem
                        key={item.id}
                        todo={item}
                        toggleDone={toggleDone}
                        remove={remove}
                        updateItem={updateText}
                    />
                )}
            </List>
            <br />
            <CreateItemForm addItem={addItem} />
            <Button variant="contained" onClick={clearCompleted}>Clear Complted</Button>
        </section>
    )
}