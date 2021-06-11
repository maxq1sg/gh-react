import { makeAutoObservable } from "mobx";
import { nanoid } from "nanoid";

class Todo {
    todos = [{
        id: nanoid(),
        task: "make breakfast",
        completed: false
    },
    {
        id: nanoid(),
        task: "sleep",
        completed: false
    }]
    constructor() {
        makeAutoObservable(this)
    }
    add(message) {
        this.todos.push({
            id: nanoid(),
            task: message,
            completed: false
        })
    }
    remove(id) {
        this.todos = this.todos.filter(item => {
            console.log(id, item.id)
            return item.id !== id
        })
        console.log(this.todos.length)
    }
    completed(id) {
        for (let item of this.todos) {
            if (item.id == id) {
                item.completed = !item.completed
            }
        }
    }
}

export default new Todo()