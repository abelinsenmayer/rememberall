import { v4 as uuid } from 'uuid'

function ToDoListItem({ todo, markDone, remove }) {
    return (
        <li onClick={() => remove(todo)}>{todo.text}</li>
        // TODO markDone
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