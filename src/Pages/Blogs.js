import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';
import BlogCard from "./Groups/components/BlogCard";
import axios from 'axios'

const useStyles = theme => ({
    root: {
        marginTop: 50,
    }
});


class BlogsPage extends Component {
    state = {
        articles: [],
        users: []
    }

    componentDidMount() {
        axios.get('https://bhaskaruprety.pythonanywhere.com/article/')
            .then(response => {
                let data = response.data.results
                // eslint-disable-next-line array-callback-return
                data.map((item, index) => {
                    const { authorDetails } = item;
                    this.state.users.push(authorDetails)
                    delete item['authorDetails']
                })

                this.setState({
                    articles: data,
                })
            })
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Container>
                    <Grid container spacing={10} justify="center" alignItems="center">
                        {
                            this.state.articles.map((data, index) =>
                                <Grid item key={data.id} md={4} sm={6} xs={12}>
                                    <BlogCard data={data} author={this.state.users[index]}/>
                                </Grid>
                            )
                        }
                    </Grid>
                </Container>
            </div>
        );
    }
}

export default withStyles(useStyles)(BlogsPage);