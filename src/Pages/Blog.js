import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
import axios from 'axios'
import { withRouter } from 'react-router-dom';
import './Style/Blog.scss'

const useStyles = theme => ({
    root: {
        marginTop: 50,
    },
    body: {
        p: {
            textTransform: 'uppercase',
        }
    }
});


class BlogPage extends Component {
    state = {
        article: [],
        url: this.props.match,
    }

    componentDidMount() {
        const url = `https://bhaskaruprety.pythonanywhere.com/article/${this.state.url.params.id.toString()}`
        axios.get(url)
            .then(response => {
                this.setState({
                    article: response.data,
                })
            })
    }

    render() {
        const { classes } = this.props;
        const data = this.state.article;
        return (
            <div className={classes.root}>
                <Container>
                    <Typography variant='h3'>{data.title}</Typography>
                    <div dangerouslySetInnerHTML={{__html:data.content}} className='richText'/>
                </Container>
            </div>
        );
    }
}

export default withStyles(useStyles)(withRouter(BlogPage));