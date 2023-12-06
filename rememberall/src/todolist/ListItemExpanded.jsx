import { TextField } from "@mui/material"
import { Paper } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from "@mui/material";
import { useState } from "react";
import "./ListItemExpanded.css"

export default function ListItemExpanded({ todo, collapse, updateItem, remove }) {
    const [text, setText] = useState(todo.text)
    const [details, setDetails] = useState(todo.details)
    const collapseAndUpdate = () => {
        if (text == "")
            return
        todo.text = text
        todo.details = details
        updateItem(todo)
        collapse()
    }

    return (
        <Paper elevation={2} className="ListItemExpanded">
            <section className="header">
                <TextField
                    id="text"
                    variant="outlined"
                    size="small"
                    value={text}
                    onChange={(evt) => setText(evt.target.value)}
                    label="To do..."
                />

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
            </section>
            <TextField
                id="details"
                variant="outlined"
                value={details}
                onChange={(evt) => setDetails(evt.target.value)}
                label="Add details..."
                multiline={true}
                fullWidth
                minRows={3}
            />

        </Paper>
    )
}