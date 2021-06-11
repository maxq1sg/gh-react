import { AppBar, Box, Button, FormControlLabel, IconButton, Toolbar, Typography, Switch, ThemeProvider } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { headersData } from './hdata'
import useHeaderStyle from './headerStyle'
import MenuIcon from '@material-ui/icons/Menu';
import { counter, dark, mobile } from './store'
import { observable, when } from 'mobx'
import { observer } from 'mobx-react-lite'
import theme from '../Test/theme'
import { darkTheme, lightTheme } from './theme'
import Forms from './form/Froms'
function displayDesktop() {
    return (<>
        <Typography >
            Welcome
        </Typography>
        <div>
            {headersData.map(({ label, href }) => {
                return (<Button disableRipple={true} color="inherit" component={Link} to={href}>
                    {label}
                </Button>)
            })}
        </div>
    </>)
}
function displayMobile(openHandler) {
    return (<>
        <div>
            <IconButton
                {...{
                    edge: "start",
                    color: "inherit",
                    "aria-label": "menu",
                    "aria-haspopup": "true",
                    size: "medium",
                    onClick: openHandler
                }}
            >
                <MenuIcon />
            </IconButton>
        </div>
        <Typography >
            Welcome
        </Typography>

    </>)
}
const Header = observer(() => {
    const { header, other, box } = useHeaderStyle()
    const [isOpen, setIsOpen] = useState(false)
    function openHandler() {
        setIsOpen(prev => !prev)
    }
    useEffect(() => {
        const checkIfMobile = () => {
            if (window.innerWidth < 700) {
                mobile.setToMobile()
            } else {
                mobile.setToDesktop()

            }
        }
        window.addEventListener("resize", checkIfMobile)
        checkIfMobile()
    }, [])
    return (
        <>
            <AppBar position="fixed" color="primary">
                <Toolbar className={`${other}  ${header}`}>
                    {mobile.isMobile ? displayMobile(openHandler) : displayDesktop()}
                </Toolbar>
            </AppBar>
            <Box className={box} color="primary" component="div" display="block">
                <div>{dark.isDark ? "dark" : "light"}</div>
                <Typography noWrap variant="h1" component="h6">
                    Lorem ipsum dolor sit amet consectetur
                </Typography>
                <Button color="secondary" variant="contained" fullWidth>hello vsem</Button>
                <Switch
                    checked={dark.isDark}
                    onChange={dark.setDark}
                    value="active"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
                <Button onClick={counter.setCount}>+1</Button>
                <Forms />
            </Box>


        </>
    )
})

export default Header
