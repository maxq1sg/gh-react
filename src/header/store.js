import { action, makeObservable, observable } from "mobx"

class Mobile {
    isMobile = false
    constructor() {
        makeObservable(this, {
            isMobile: observable,
            setToMobile: action,
            setToDesktop: action
        })
    }
    setToMobile = () => {
        this.isMobile = true
    }
    setToDesktop = () => {
        this.isMobile = false
    }
}
class Dark {
    isDark = false
    constructor() {
        makeObservable(this, {
            isDark: observable,
            setDark: action
        })
    }
    setDark = () => {
        this.isDark = !this.isDark
    }
}

class Counter {
    count = 0
    constructor() {
        makeObservable(this, {
            count: observable,
            setCount: action
        })
    }
    setCount = () => {
        ++this.count
    }

}
const mobile = new Mobile()
const dark = new Dark()
const counter = new Counter()
export { mobile, dark, counter }


