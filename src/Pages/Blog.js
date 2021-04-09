import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}));

function BlogPage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h1>
                This is the single blog
            </h1>
        </div>
    );
}

export default BlogPage