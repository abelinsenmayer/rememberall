import { TextField } from "@mui/material"
import { Paper } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from "@mui/material";

export default function ListItemExpanded({ todo, collapse, updateItem }) {
    const handleCollapse = () => {
        updateItem(todo)
        collapse()
    }

    return (
        <Paper elevation={2}>
            <TextField
                id="text"
                variant="filled"
                size="small"
                value={todo.text}
                onChange={(evt) => setText(evt.target.value)}
            />
            <Button
                onClick={() => remove(todo)}
                size="small"
            >
                <DeleteIcon fontSize='small' />
            </Button>
            <Button
                onClick={() => handleCollapse}
                size="small"
            >
                <ExpandMoreIcon fontSize="small" />
            </Button>
        </Paper>
    )
}