import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import MenuItems from "./MenuItems";

export default function MenuDrawer(props) {
    const classes = props.class;
    const [open, setOpen] = React.useState(false);

    const handleClick = () =>{
        setOpen(!open)
    }

    const list = () => (
        <div
            role="presentation"
            onClick={handleClick}
            onKeyDown={handleClick}
            className={classes.drawer}
        >
            <List>
                {MenuItems.map((item, index) => (
                    <ListItem button key={item.name}>
                        <ListItemText primary={item.name.toUpperCase()} onClick={() => {props.OnClick(item.url); setOpen(null)}} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            <React.Fragment key={'left'}>
                <IconButton onClick={handleClick} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Drawer open={open} onClose={handleClick}>
                    {list()}
                </Drawer>
            </React.Fragment>
        </div>
    );
}
