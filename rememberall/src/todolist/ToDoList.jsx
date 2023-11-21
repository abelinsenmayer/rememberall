import { useState } from 'react'
import CreateItemForm from './CreateItemForm'
import { ToDoListItem } from './ToDoListItem'

export default function ToDoList({ initItems }) {
    const [items, setItems] = useState(initItems)
    const addItem = (newItem) => {
        setItems((items) => [...items, newItem])
    }
    const markDone = (item) => {
        console.log(`marking ${item.text} as done!`)
    }
    const remove = (item) => {
        setItems(items.filter((i) => i != item))
    }

    return (
        <>
            <h1>To-Do List</h1>
            <ul>
                {items.map((item) =>
                    <ToDoListItem
                        key={item.id}
                        todo={item}
                        markDone={markDone}
                        remove={remove}
                    />
                )}
            </ul>
            <CreateItemForm addItem={addItem} />
        </>
    )
}