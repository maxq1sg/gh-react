import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import data from './data';
import { AppBar, Button, Container, Toolbar, Typography } from '@material-ui/core';
import { headersData } from './hd';
import { Link } from "react-router-dom"
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    container: {
        margin: "0 auto",
        maxWidth: "1200px",
        border: "2px solid red"
    },
    header: {
        backgroundColor: theme.palette.success.main,
        color: "blue",
        display: "flex",
        justifyContent: "space-between"
    }
}));

const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
        return (
            <Button
                {...{
                    key: label,
                    color: "inherit",
                    to: href,
                    component: Link,
                }}
            >
                {label}
            </Button>
        );
    });
};

export default function FullWidthGrid() {
    const styles = useStyles()
    return (

        <>
            <AppBar position="static">
                <Toolbar className={styles.header}>
                    <Typography variant="h6">
                        hello world
                    </Typography>
                    <div>
                        {getMenuButtons()}

                    </div>
                </Toolbar>
            </AppBar>
            <Grid style={{
                margin: 0,
                width: '100%',
            }} spacing={2} className={styles.container} justify="center" container>
                {data.map(item => {
                    return <Grid sm={6} xs={12} md={3} item ><Paper className={styles.paper}>{item}</Paper></Grid>
                })}
            </Grid>
        </>


    );
}
