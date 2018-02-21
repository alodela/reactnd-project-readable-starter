import React, { Component } from 'react'
import _ from 'underscore'
import PostItem from './PostItem'
import Sort from '../Sort'
import { Link } from 'react-router-dom'

class PostList extends Component {
    state = {
        sortBy: 'timestamp',
        category: '',
    }

    sortPostsBy(sortBy) {
        this.setState({ sortBy })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.category !== this.props.match.params.category) {
            this.props.loadPosts(this.props.match.params.category)
        }
    }

    componentWillMount() {
        this.props.loadPosts(this.props.match.params.category);
    }

    sortedPostIds(posts, sortBy) {
        return _.chain(posts.allIds)
            .filter((id) => !posts.byId[id].deleted)
            .sortBy((id) => posts.byId[id][sortBy])
            .value()
            .reverse();
    }

    deletePost(post) {
        if (window.confirm("Are you sure you want to delete this post?")) {
            this.props.deletePost(post)
        }
    }

    render() {
        const { sortBy } = this.state;
        const { posts } = this.props;

        return (
            <div>
                <div className="float-right">
                    <Sort sortBy={sortBy} onSortChanged={this.sortPostsBy.bind(this)} />
                </div>
                <h3>Posts</h3>
                <hr />
                {
                    this.sortedPostIds(posts, sortBy).map((id) => {
                        return (
                            <PostItem
                                post={posts.byId[id]}
                                key={id}
                                onDelete={this.deletePost.bind(this)}
                                onVoteUp={this.props.voteUp}
                                onVoteDown={this.props.voteDown} />
                        )
                    })
                }
                <div className="add-post">
                    <Link to="/posts/new">Add post</Link>
                </div>
            </div>
        )
    }

}

export default PostList