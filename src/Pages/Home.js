import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}));

function HomePage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h1>
                Hello
            </h1>
        </div>
    );
}

export default HomePage