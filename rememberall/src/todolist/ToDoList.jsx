import { useState } from 'react'
import CreateItemForm from './CreateItemForm'
import { ToDoListItem, ToDo } from './ToDoListItem'
import { Button } from '@mui/base'
import { List } from '@mui/material'
import { v4 as uuid } from 'uuid'
import { DragDropContext } from 'react-beautiful-dnd'
import { StrictModeDroppable } from '../StrictModeDroppable'

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
    const moveItem = (fromIdx, toIdx) => {
        const [itemToMove] = items.splice(fromIdx, 1)
        items.splice(toIdx, 0, itemToMove)
        setItems(items)
    }

    // Drag handler
    const handleDragEnd = (result) => {
        if (!result.destination) {
            return
        }
        moveItem(result.source.index, result.destination.index)
    }

    return (
        <>
            <h1>To-Do List</h1>
            <DragDropContext onDragEnd={handleDragEnd}>
                <StrictModeDroppable type='TO_DO_LIST' droppableId={`to-do-list-${uuid()}`}>
                    {(provided, snapshot) => (
                        <div ref={provided.innerRef} {...provided.droppableProps} >
                            <List>
                                {items.map((item, index) =>
                                    <ToDoListItem
                                        key={item.id}
                                        todo={item}
                                        toggleDone={toggleDone}
                                        remove={remove}
                                        updateItem={updateText}
                                        index={index}
                                    />
                                )}
                            </List>
                            {provided.placeholder}
                        </div>
                    )}
                </StrictModeDroppable>
            </DragDropContext>
            <br />
            <CreateItemForm addItem={addItem} />
            <Button variant="contained" onClick={clearCompleted}>Clear Complted</Button>
        </>
    )
}