import React, { Component } from 'react';
import Post from './Post'

class Posts extends Component {

    componentDidMount() {
        this.props.loadPosts();
    }

    render() {
        const { posts } = this.props;

        return (
            <div>
                <h3>Posts</h3>
                <hr />
                {
                    posts.map((post) => {
                        return (
                            <Post post={post} key={post.id}/>
                        )
                    })
                }
            </div>
        );
    }

}

export default Posts;