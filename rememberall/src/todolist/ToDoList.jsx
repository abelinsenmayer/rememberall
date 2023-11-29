import { useState } from 'react'
import CreateItemForm from './CreateItemForm'
import { ToDoListItem, ToDo } from './ToDoListItem'
import { Button } from '@mui/base'
import { List } from '@mui/material'
import { Droppable } from 'react-beautiful-dnd'
import { v4 as uuid } from 'uuid'

import { useEffect } from 'react'
import React from 'react'

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

    // Fixes an issue with react-beautiful-dnd and StrictMode
    // Source: https://medium.com/@wbern/getting-react-18s-strict-mode-to-work-with-react-beautiful-dnd-47bc909348e4
    const [enabled, setEnabled] = useState(false);
    useEffect(() => {
        const animation = requestAnimationFrame(() => setEnabled(true));
        return () => {
            cancelAnimationFrame(animation);
            setEnabled(false);
        };
    }, []);
    if (!enabled) {
        return null;
    }
    // -----

    return (
        <>
            <h1>To-Do List</h1>
            <Droppable type='TO_DO_LIST' droppableId={`to-do-list-${uuid()}`}>
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
            </Droppable>
            <br />
            <CreateItemForm addItem={addItem} />
            <Button variant="contained" onClick={clearCompleted}>Clear Complted</Button>
        </>
    )
}