import { v4 as uuid } from 'uuid'
import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import './ToDoListItem.css'
import ItemEditForm from './ItemEditForm';
import { useState } from 'react';
import { ListItem } from '@mui/material';


function ToDoListItem({ todo, toggleDone: toggleDone, remove, updateItem: updateItem }) {
    const [isEditing, setIsEditing] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const updateText = (text) => {
        updateItem(todo, text)
    }

    // Drag event handlers
    const handleDragStart = (evt) => {
        evt.dataTransfer.setData("item", todo)
        // TODO set disabled
    }
    const handleDrag = (evt) => {
        console.log(evt.dataTransfer.getData("item"))
    }
    const handleDragEnd = (evt) => {
        console.log(`dropEffect is ${evt.dataTransfer.dropEffect}`)
        if (evt.dataTransfer.dropEffect == "move") {
            remove(todo)
        } else {
            // TODO set enabled
        }
    }

    const style = todo.done ? { textDecoration: "line-through" } : {}
    return (
        <ListItem className='ToDoListItem' draggable="true" onDrag={handleDrag} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
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
    )
}

class ToDo {
    constructor(text, done) {
        this.text = text
        this.done = done
        this.id = uuid()
    }
}

export { ToDo, ToDoListItem }