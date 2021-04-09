import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';
import BlogCard from "./Groups/components/BlogCard";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 50,
    }
}));

function BlogsPage() {
    const classes = useStyles();

    const url = "https://bhaskaruprety.pythonanywhere.com"
    const endpoint = "/article"
    const instance = axios.create({
        baseURL: url,
        timeout: 10000,
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": true,
            "Access-Control-Allow-Credentials": true,
        }
    });

    instance.get(endpoint)
        .then( response =>{
            console.log(response)
        })
        .catch(err =>{
            console.log(err)
        })

    return (
        <div className={classes.root}>
            <Container>
                <Grid container spacing={10}>
                    <Grid item md={4} sm={6} xs={12}>
                        <BlogCard/>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <BlogCard/>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <BlogCard/>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <BlogCard/>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <BlogCard/>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <BlogCard/>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <BlogCard/>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <BlogCard/>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <BlogCard/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default BlogsPage