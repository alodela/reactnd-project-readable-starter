import React, { Component } from 'react'
import { Row, Col, Button } from 'reactstrap'
import Moment from 'react-moment'
import CommentsContainer from '../../containers/CommentsContainer'
import PostForm from './PostForm'
import Votes from '../Votes'
import NotFound from '../NotFound'

class Post extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            isEditing: false,
            post: { ...this.props.post }
        }
    }

    componentWillReceiveProps(nextProps) {
		this.setState({
            post: { ...nextProps.post }
        })
	}

    componentDidMount() {
        if (Object.keys(this.state.post).length === 0) {
            this.props.loadPost(this.props.match.params.post_id);
        }
    }

    handleChange(event) {
        const { name, value } = event.target;
        const post = this.state.post;

        post[name] = value;
        return this.setState({ post });
    }

    editPost() {
        this.setState({
            isEditing: true,
        })
    }

    cancelEdit() {
        this.setState({
            isEditing: false,
        })
    }

    savePost() {
        const { post } = this.state;

        this.props.updatePost(post)
            .then(post => {
                this.setState({
                    isEditing: false
                })
            })
    }

    render() {
        const post = this.props.post;
        const {
            id,
            title,
            body,
            voteScore,
            timestamp,
            commentCount,
            author,
            deleted,
        } = this.props.post;

        if (!id || deleted === true) {
            return (
                <NotFound />
            )
        }

        if (this.state.isEditing) {
            return (
                <div>
                    <h3>Edit post</h3>
                    <hr/>
                    <PostForm
                        post={this.props.post}
                        onChange={this.handleChange.bind(this)}
                        onCancel={this.cancelEdit.bind(this)}
                        onSave={this.savePost.bind(this)} />
                </div>
            )
        } else {
            return (
                <div>
                    <Row>
                        <Col>
                            <Button color="link" className="float-right" onClick={this.editPost.bind(this)}>Edit</Button>
                            <h2>{title}</h2>
                            <h6 className="text-secondary mb-4"><Moment format="MMMM Do, YYYY" date={timestamp} /> by {author}</h6>
                            <p>{body}</p>
                            <ul className="list-inline">
                                <li className="list-inline-item"><small className="text-muted">{commentCount} comments</small></li>
                                <li className="list-inline-item">|</li>
                                <li className="list-inline-item">
                                    <Votes
                                        voteScore={voteScore}
                                        onVoteUp={() => this.props.voteUp(post)}
                                        onVoteDown={() => this.props.voteDown(post)} />
                                </li>
                            </ul>
                            <hr/>
                            <CommentsContainer postId={id} />
                        </Col>
                    </Row>
                </div>
            )
        }
    }
}

export default Post