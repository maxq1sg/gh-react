import { autorun } from 'mobx'
import { observer } from 'mobx-react-lite'
import React, { useRef } from 'react'
import usersClass from './store/usersStore'
import themeStore from './store/themeStore'
import { Button, createMuiTheme, ThemeProvider } from '@material-ui/core'
import theme from './theme'
import useStyles from './styles'


const Test = observer((props) => {

    const input = useRef(null)
    const { users } = usersClass
    function addHandler() {
        usersClass.addUser(input.current.value)
    }
    function fetchHandler() {
        usersClass.fetchUsers()
    }
    function changeTheme() {
        themeStore.darkToggle()
    }


    const styles = useStyles(props)
    autorun(() => console.log(users))
    return (
        <ThemeProvider theme={theme}>
            <div className={styles.container}>
                <input ref={input} type="text" />
                <Button color="primary" variant="contained" onClick={addHandler}>добавить</Button>
                <button onClick={fetchHandler}>fetch</button>
                <button onClick={changeTheme}>поменять тему</button>
                <div className="users">
                    {users.map(user => (<div>{user}</div>))}
                </div>
            </div>
        </ThemeProvider>

    )
})

export default Test
