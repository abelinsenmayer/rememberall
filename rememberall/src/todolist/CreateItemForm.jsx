import { TextField } from "@mui/material"
import { Button } from "@mui/material"
import { useState } from "react"
import ToDoListItem from "./ToDoListItem"

export default function CreateItemForm({ addItem }) {
    const [itemText, setItemText] = useState("")

    const submitHandler = (evt) => {
        const item = new ToDoListItem(itemText, false)
        addItem(item)
        setItemText("")
    }

    return (
        <form>
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