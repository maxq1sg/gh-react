import { observer } from 'mobx-react-lite'
import React, { useRef } from 'react'
import TodoInstance from './store/todos'
import { Button } from '@material-ui/core'
import { autorun } from 'mobx'

const App = observer(() => {
  const input = useRef(null)
  const uncompleted = TodoInstance.todos.reduce((prev, todo) => {

    if (todo.completed) {
      return prev
    } else {
      return ++prev
    }
  }, 0)
  // autorun(() => {
    console.log(TodoInstance.todos)
  // })
  return (
    <div style={{ width: "300px" }}>
      <div>
        <input ref={input} type="text" />
        <button onClick={() => TodoInstance.add(input.current.value)}>добавить</button>
      </div>
      {TodoInstance.todos.map(t => <div key={t.id}>
        <span>{t.task}</span>
        <input onChange={() => TodoInstance.completed(t.id)} type="checkbox" />
        <Button
          onClick={() => TodoInstance.remove(t.id)}
          variant="contained"
          color="green"
        >удалить</Button>
      </div>)}
      <div>{`Осталось выполнить ${uncompleted} дел`}</div>
    </div>
  )
})

export default App
