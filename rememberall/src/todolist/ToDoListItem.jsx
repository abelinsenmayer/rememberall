import { v4 as uuid } from 'uuid'
import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import './ToDoListItem.css'
import ItemEditForm from './ItemEditForm';
import { useState } from 'react';
import { ListItem } from '@mui/material';
import { Draggable } from 'react-beautiful-dnd';

/**
 * A single to-do item.
 * @param {ToDo} todo Object which stores the list item's data.
 * @callback toggleDone Toggle whether the item is marked as "done"
 * @callback remove Remove the item from a to-do list
 * @callback updateItem Update the item to another {@link ToDo}
 * @returns 
 */
function ToDoListItem({ todo, toggleDone, remove, updateItem, index }) {
    const [isEditing, setIsEditing] = useState(false)
    const updateText = (text) => {
        updateItem(todo, text)
    }

    const style = todo.done ? { textDecoration: "line-through" } : {}
    return (
        <Draggable index={index} draggableId={todo.id}>
            {(provided, snapshot) => (
                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className='ToDoListItem'>
                    <ListItem gable="true" alignItems='center'>
                        {/* Display the regular view if we are not currenly editing the item */}
                        {!isEditing && (
                            <>
                                <span onClick={() => toggleDone(todo)} style={style}>{todo.text} </span>
                                <Button
                                    onClick={() => remove(todo)}
                                    variant="outlined"
                                    size="small"
                                >
                                    <DeleteIcon fontSize='small' />
                                </Button>
                                <Button
                                    onClick={() => setIsEditing(true)}
                                    variant="outlined"
                                    size="small"
                                >
                                    <EditIcon fontSize='small' />
                                </Button>
                            </>
                        )}

                        {/* Display edit menu if we are currently editing the item */}
                        {isEditing && (
                            <ItemEditForm initValue={todo.text} doEdit={updateText} placeholder="To do..." />
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
    constructor(text, done) {
        this.text = text
        this.done = done
        this.id = uuid()
    }
}

export { ToDo, ToDoListItem }