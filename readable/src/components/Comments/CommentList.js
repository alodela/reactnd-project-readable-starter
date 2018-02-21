import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import Comment from './Comment'
import CommentForm from './CommentForm'

class CommentList extends Component {
    state = {
        newComment: {},
        comments: [],
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.postId && prevProps.postId !== this.props.postId) {
            this.props.loadComments(this.props.postId)
        }
    }

    componentDidMount() {
        this.props.loadComments(this.props.postId)
    }

    update(comment) {
        this.props.updateComment(comment)
    }

    delete(comment) {
        if (window.confirm("Are you sure you want to delete this comment?")) {
            this.props.deleteComment(comment)
        }
    }

    handleCommentChange(event) {
        const { name, value } = event.target
        const newComment = this.state.newComment

        newComment[name] = value;
        return this.setState({
            ...this.state,
            newComment,
        });
    }

    onSubmit(e) {
        e.preventDefault()

        const { newComment } = this.state

        if (!newComment.body || newComment.body.length === 0) {
            window.alert("Please enter your comment")
            return
        }

        if (!newComment.author || newComment.author.length === 0) {
            window.alert("Please enter comment's author")
            return
        }

        this.props.createComment({
            parentId: this.props.postId,
            ...newComment,
        })

        return this.setState({
            ...this.state,
            newComment: {},
        })
    }

    render() {
        const { comments } = this.props

        return (
            <div>
                <Row>
                    <Col>
                        <ul className="list-group list-group-flush">
                            {this.props.comments.allIds.map((id) => (
                                <Comment
                                    comment={comments.byId[id]}
                                    onDelete={this.delete.bind(this)}
                                    onUpdate={this.update.bind(this)}
                                    onVoteUp={this.props.voteUp}
                                    onVoteDown={this.props.voteDown}
                                    key={id} />
                            ))}

                            <li className="list-group-item comment-body">
                                <CommentForm
                                    comment={this.state.newComment}
                                    onChange={this.handleCommentChange.bind(this)}
                                    onSubmit={this.onSubmit.bind(this)}
                                    saveLabel="Add"
                                    showCancel={false} />
                            </li>
                        </ul>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default CommentList