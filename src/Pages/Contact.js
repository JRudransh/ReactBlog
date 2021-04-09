import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}));

function ContactPage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h1>
                You can contact us here
            </h1>
        </div>
    );
}

export default ContactPage