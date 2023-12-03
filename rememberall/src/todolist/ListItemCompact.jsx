import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

/**
 * Compact view of an item in a to-do list.
 * @param {ToDo} todo Object which stores the list item's data.
 * @callback toggleDone Toggle whether the item is marked as "done"
 * @callback remove Remove the item from a to-do list.
 * @callback setEditing Sets the item to an "editing" view.
 * @callback expand Sets the item to an an "expanded" view.
 * @returns 
 */
export default function ListItemCompact({ todo, toggleDone, remove, setEditing, setExpanded }) {
    const style = todo.done ? { textDecoration: "line-through" } : {}
    return (
        <>
            <span onClick={() => toggleDone(todo)} style={style}>{todo.text} </span>
            <Button
                onClick={() => remove(todo)}
                size="small"
            >
                <DeleteIcon fontSize='small' />
            </Button>
            <Button
                onClick={() => setEditing()}
                size="small"
            >
                <EditIcon fontSize='small' />
            </Button>
            <Button
                onClick={() => setExpanded()}
                size="small"
            >
                <ExpandLessIcon fontSize="small" />
            </Button>
        </>
    )
}