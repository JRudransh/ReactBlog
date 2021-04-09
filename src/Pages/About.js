import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}));

function AboutPage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h1>
                Why do you want to know about us?
            </h1>
        </div>
    );
}

export default AboutPage