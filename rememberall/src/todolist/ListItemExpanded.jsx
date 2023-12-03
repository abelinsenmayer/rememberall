import { TextField } from "@mui/material"
import { Paper } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from "@mui/material";
import { useState } from "react";

export default function ListItemExpanded({ todo, collapse, updateItem }) {
    const [text, setText] = useState(todo.text)
    const [details, setDetails] = useState(todo.details)
    const collapseAndUpdate = () => {
        todo.text = text
        todo.details = details
        updateItem(todo)
        collapse()
    }

    return (
        <Paper elevation={2}>
            <TextField
                id="text"
                variant="filled"
                size="small"
                value={text}
                onChange={(evt) => setText(evt.target.value)}
            />

            {/* TODO details editing field here */}

            <Button
                onClick={() => remove(todo)}
                size="small"
            >
                <DeleteIcon fontSize='small' />
            </Button>
            <Button
                onClick={collapseAndUpdate}
                size="small"
            >
                <ExpandMoreIcon fontSize="small" />
            </Button>
        </Paper>
    )
}