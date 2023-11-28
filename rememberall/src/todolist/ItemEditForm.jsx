import { Button } from "@mui/base"
import { useState } from "react"
import CheckIcon from '@mui/icons-material/Check';
import { TextField } from "@mui/material";

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