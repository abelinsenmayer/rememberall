import { v4 as uuid } from 'uuid'
import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

function ToDoListItem({ todo, toggleDone: toggleDone, remove }) {
    const style = todo.done ? { textDecoration: "line-through" } : {}
    return (
        <li>
            <span onClick={() => toggleDone(todo)} style={style}>{todo.text} </span>
            <Button
                onClick={() => remove(todo)}
                variant="outlined"
                size="small"
            >
                <DeleteIcon />
            </Button>
        </li>
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