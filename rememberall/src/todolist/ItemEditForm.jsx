import { Button } from "@mui/base"
import { useState } from "react"
import CheckIcon from '@mui/icons-material/Check';
import { TextField } from "@mui/material";

/**
 * Form for editing an existing to-do list item.
 * @callback doEdit Submits a new text value to which the item's description should be updated.
 * @param {string} initValue The initial value for the item's description.
 * @param {string} placeholder Placeholder text which fills the text field if the user has not typed anything.
 * @returns 
 */
export default function ItemEditForm({ doEdit, initValue, placeholder = "" }) {
    const [text, setText] = useState(initValue)

    const submitHandler = (evt) => {
        evt.preventDefault()
        doEdit(text)
    }

    return (
        <form onSubmit={submitHandler}>
            <TextField
                id="text"
                label={placeholder}
                variant="filled"
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