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

    const style = todo.done ? { textDecoration: "line-through" } : {}
    return (
        <ListItem className='ToDoListItem' gable="true">
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