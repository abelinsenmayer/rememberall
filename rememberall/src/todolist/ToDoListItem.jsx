import { v4 as uuid } from 'uuid'
import './ToDoListItem.css'
import ListItemEditing from './ListItemEditing';
import { useState } from 'react';
import { ListItem } from '@mui/material';
import { Draggable } from 'react-beautiful-dnd';
import ListItemCompact from './ListItemCompact';
import ListItemExpanded from './ListItemExpanded';

/**
 * A single to-do item. Changes appearance based on whether it's completed, editing, expanded, etc.
 * @param {ToDo} todo Object which stores the list item's data.
 * @callback toggleDone Toggle whether the item is marked as "done"
 * @callback remove Remove the item from a to-do list
 * @callback updateItem Update the item to another {@link ToDo}
 * @returns 
 */
function ToDoListItem({ todo, toggleDone, remove, updateItem, index }) {
    const [isEditing, setIsEditing] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <Draggable index={index} draggableId={todo.id}>
            {(provided, snapshot) => (
                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className='ToDoListItem'>
                    <ListItem gable="true" alignItems='center'>
                        {!isExpanded && (
                            <>
                                {/* Display the regular view if we are not currenly editing the item */}
                                {!isEditing && (
                                    <ListItemCompact
                                        toggleDone={toggleDone}
                                        remove={remove}
                                        todo={todo}
                                        setEditing={() => setIsEditing(true)}
                                        setExpanded={() => setIsExpanded(true)}
                                    />
                                )}

                                {/* Display edit menu if we are currently editing the item */}
                                {isEditing && (
                                    <ListItemEditing
                                        todo={todo}
                                        updateItem={updateItem}
                                        stopEditing={() => setIsEditing(false)}
                                        placeholder="To do..."
                                    />
                                )}
                            </>
                        )}
                        {isExpanded && (
                            <ListItemExpanded
                                todo={todo}
                                collapse={() => setIsExpanded(false)}
                                updateItem={updateItem}
                            />
                        )}
                    </ListItem>
                </div>
            )}
        </Draggable>
    )
}

/**
 * The object representation of a to-do list item.
 */
class ToDo {
    /**
     * Constructor
     * @param {string} text Display text for the item - a short description.
     * @param {boolean} done Whether the item is "complete"
     */
    constructor(text, done, details = "") {
        this.text = text
        this.details = details
        this.done = done
        this.id = uuid()
    }
}

export { ToDo, ToDoListItem }