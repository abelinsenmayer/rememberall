import { useState } from 'react'
import CreateItemForm from './CreateItemForm'
import { ToDoListItem, ToDo } from './ToDoListItem'
import { Button } from '@mui/base'
import { List } from '@mui/material'
import { v4 as uuid } from 'uuid'
import { DragDropContext } from 'react-beautiful-dnd'
import { StrictModeDroppable } from '../StrictModeDroppable'
import { Container } from '@mui/material'
import './ToDoList.css'

/**
 * A to-do list. Each item in the list is a {@link ToDo} represented visually by a {@link ToDoListItem}.
 * @param {ToDo[]} initItems A list of {@link ToDo} objects representing the list's initial contents. 
 * @returns 
 */
export default function ToDoList({ initItems, title }) {
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
        <Container className='ToDoList' maxWidth='xs'>
            <h2>{title}</h2>
            <DragDropContext onDragEnd={handleDragEnd}>
                <StrictModeDroppable type='TO_DO_LIST' droppableId={`to-do-list-${uuid()}`}>
                    {(provided, snapshot) => (
                        <div ref={provided.innerRef} {...provided.droppableProps} >
                            <List className='list-body'>
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
        </Container>

    )
}