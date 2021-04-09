import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuDrawer from "./components/MenuDrawer";
import { withRouter } from 'react-router';
import MenuButtons from "./components/MenuButtons";

const breakpoint = 'md'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    drawer: {
        width: 200,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        display: 'block',
        [theme.breakpoints.up(breakpoint)]: {
            display: 'none',
        },
    },
    menuItem: {
        margin: '0 50px',
        display: 'none',
        [theme.breakpoints.up(breakpoint)]: {
            display: 'block',
        },
    },
    title: {
        flexGrow: 1,
    },
}));

const NavBar = props => {
    const classes = useStyles();
    const OnClick = (url) => {
        props.history.push(url)
    }
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <MenuDrawer class={classes} OnClick={OnClick}/>
                    <Typography variant="h6" className={classes.title} onClick={() => { OnClick('/') }}>
                        Simple Blog
                    </Typography>
                    <MenuButtons OnClick={OnClick} class={classes.menuItem}/>
                    <Button variant='contained' color='default'>Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withRouter(NavBar);