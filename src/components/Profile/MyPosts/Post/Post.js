import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="http://www.youandthemat.com/wp-content/uploads/nature-2-26-17.jpg" alt=""/>
            { props.message }
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    );
};


export default Post;
