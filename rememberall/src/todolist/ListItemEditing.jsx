import { Button } from "@mui/base"
import { useState } from "react"
import CheckIcon from '@mui/icons-material/Check';
import { TextField } from "@mui/material";
import { ToDo } from "./ToDoListItem";

/**
 * Editing view of an item in a to-do list.
 * @callback updateItem Sets the {@link ToDo} item to the supplied object.
 * @param {ToDo} todo The item being edited.
 * @callback stopEditing Ends editing of the item.
 * @param {string} placeholder Placeholder text which fills the text field if the user has not typed anything.
 * @returns 
 */
export default function ListItemEditing({ updateItem, todo, stopEditing, label = "", }) {
    const [text, setText] = useState(todo.text)

    const submitHandler = (evt) => {
        evt.preventDefault()
        if (text == "")
            return
        updateItem({ ...todo, text: text })
        stopEditing()
    }

    return (
        <form onSubmit={submitHandler}>
            <TextField
                id="text"
                label={label}
                variant="outlined"
                size="small"
                value={text}
                onChange={(evt) => setText(evt.target.value)}
            />
            <Button variant="contained" onClick={submitHandler}>
                <CheckIcon />
            </Button>
        </form>
    )
}