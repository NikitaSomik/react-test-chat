import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first posts', likesCount: 11},
        {id: 3, message: 'Babla', likesCount: 5},
        {id: 4, message: 'HJsdasdasd', likesCount: 25},
    ];

    let postsElements = posts
        .map( post => <Post message={post.message} likesCount={post.likesCount}/>);
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea name="" id="" cols="30" rows="5"></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
