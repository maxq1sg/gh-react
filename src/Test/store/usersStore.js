import { action, makeObservable, observable } from "mobx";

class Users {
    users = ["maxim", "anton", "ivan"]
    constructor() {
        makeObservable(this, {
            users: observable,
            addUser: action,
            fetchUsers: action
        })
    }
    addUser(payload) {
        this.users.push(payload)
    }
    fetchUsers() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                json.map(user => {
                    this.users.push(user.name)
                })
            })
    }
}

export default new Users()