import React from 'react';
import MenuItems from "./MenuItems";
import Button from "@material-ui/core/Button";

export default function MenuButtons(props) {
    const classes = props.class;

    return (
        <div className={classes}>
            {MenuItems.map((item, index) => (
                <Button key={index} color="inherit" style={{margin: ' auto 20px'}} onClick={() => {props.OnClick(item.url)}}>{item.name}</Button>
            ))}
        </div>
    );
}
