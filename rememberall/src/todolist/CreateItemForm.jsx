import { TextField } from "@mui/material"
import { Button } from "@mui/material"
import { useState } from "react"
import { ToDo } from "./ToDoListItem"

/**
 * Form for adding an item to a to-do list.
 * @callback addItem Adds item to the to-do list.
 * @returns 
 */
export default function CreateItemForm({ addItem }) {
    const [itemText, setItemText] = useState("")

    const submitHandler = (evt) => {
        evt.preventDefault()
        if (itemText == "")
            return
        const item = new ToDo(itemText, false)
        addItem(item)
        setItemText("")
    }

    return (
        <form onSubmit={submitHandler}>
            <TextField
                id="item-text"
                label="To do..."
                variant="filled"
                size="small"
                value={itemText}
                onChange={(evt) => setItemText(evt.target.value)}
            />
            <Button variant="contained" onClick={submitHandler}>Add</Button>
        </form>
    )
}