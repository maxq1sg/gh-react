import { action, makeObservable, observable } from "mobx";

class Theme {
    isDark = false
    constructor() {
        makeObservable(this, {
            isDark: observable,
            darkToggle: action
        })
    }
    darkToggle() {
        this.isDark = !this.isDark
    }
}

export default new Theme()