import { v4 as uuid } from 'uuid'

class ToDoListItem {
    constructor(text, done) {
        this.text = text
        this.done = done
        this.id = uuid()
    }
}

export default ToDoListItem