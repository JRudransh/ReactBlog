import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { Link } from 'react-router-dom'

const useStyles = theme => ({
    root: {
        // maxWidth: 345,
        margin: 'auto',
        cursor: 'default',
    },
    header:{
        textTransform: 'capitalize'
    },
    card:{
        height: '80px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
});

class BlogCard extends Component {
    render() {
        const { classes } = this.props;
        const { data } = this.props;
        const { author } = this.props;
        const options = {
            year: "numeric",
            month:"long",
            day:"numeric",
            hour12 : true,
            hour:  "numeric",
            minute: "numeric"
        };

        const date = new Date().toLocaleDateString("en-US",options)
        let fullName = `${author['first_name']} ${author['last_name']}`
        let name
        if (!fullName.trim()){
            name = author.username;
        }
        else{
            name = fullName
        }
        return (
            <Card className={classes.root} key={data.id}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Author" src={data['coverImage']}/>
                    }
                    className={classes.header}
                    title={name}
                    // September 14, 2016
                    subheader={date}
                />
                <Link to={`/blog/${data.id}`}>
                    <CardMedia
                        className={classes.media}
                        image={data['coverImage']}
                        title="Paella dish"
                    />
                </Link>
                <CardContent>
                    <Typography variant='body2' component='h3' style={{marginBottom: 15, fontWeight: 'bold'}} color='inherit'>
                        {data.title}
                    </Typography>
                    <Typography className={classes.card} variant="body2" color="textSecondary" component="p">
                        {data.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>
        );
    }
}

export default withStyles(useStyles)(BlogCard);


// function BlogCard(props) {
//     const classes = useStyles();
//     const data = props.data
//
//     const handleExpandClick = () => {
//         console.log('Clicked')
//     };
//
//     return (
//
//     );
// }
//
// export default BlogCard