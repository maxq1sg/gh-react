import axios from "axios"
import { makeObservable, observable, action, autorun, when } from "mobx"

export default function CounterStore(initialState) {
    return makeObservable({
        count: initialState ?? 0,
        users: [],
        dec() {
            return this.count--
        },
        inc() {
            return this.count++
        },
        async getUsers() {
            const users = await axios.get("https://jsonplaceholder.typicode.com/users")
            
        }
    }, {
        count: observable,
        inc: action.bound,
        dec: action.bound
    })
}