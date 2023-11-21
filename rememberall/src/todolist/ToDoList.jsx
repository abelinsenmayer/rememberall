import Button from '@mui/material/Button'
import { v4 as uuid } from 'uuid'
import CreateItemForm from './CreateItemForm'
import { useState } from 'react'

export default function ToDoList({ initItems }) {
    const [items, setItems] = useState(initItems)
    const addItem = (newItem) => {
        setItems((items) => [...items, newItem])
    }

    return (
        <>
            <h1>To-Do List</h1>
            <ul>
                {items.map((item => <li key={uuid()}>{item.text}</li>))}
                <br />
                <CreateItemForm addItem={addItem} />
            </ul>
        </>
    )
}