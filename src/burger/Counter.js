import { autorun, when } from "mobx"
import { Observer } from "mobx-react"
import CounterStore from "./stores/counterStore"

const Counter = (({ initialState }) => {
    const counter = CounterStore(initialState)

    autorun(() => {
        console.log("значение счетчика: ", counter.count)
    })
    when(() => counter.count > 5, () => console.log("more than 5"))//вызывается только один раз
    return (
        <>
            <button onClick={counter.inc}>+++++++++</button>
            <Observer>
                {() => <h1>{counter.count}</h1>}
            </Observer>
            <button onClick={counter.dec}>------</button>
        </>
    )
})

export default Counter
