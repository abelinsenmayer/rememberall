import { useState } from 'react'
import CreateItemForm from './CreateItemForm'
import { ToDoListItem, ToDo } from './ToDoListItem'
import { Button } from '@mui/base'

export default function ToDoList({ initItems }) {
    const [items, setItems] = useState(initItems)
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

    return (
        <>
            <h1>To-Do List</h1>
            <ul>
                {items.map((item) =>
                    <ToDoListItem
                        key={item.id}
                        todo={item}
                        toggleDone={toggleDone}
                        remove={remove}
                        updateItem={updateText}
                    />
                )}
            </ul>
            <CreateItemForm addItem={addItem} />
            <Button variant="contained" onClick={clearCompleted}>Clear Complted</Button>
        </>
    )
}