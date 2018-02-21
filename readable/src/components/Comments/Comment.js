import React, { Component } from 'react'
import { Button } from 'reactstrap'
import Moment from 'react-moment'
import CommentForm from './CommentForm'
import Votes from '../Votes'

class Comment extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            isEditing: false,
            saving: false,
            comment: { ...props.comment },
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            comment: nextProps.comment,
            saving: false,
            isEditing: false,
        })
    }

    handleChange(event) {
        const { name, value } = event.target
        const comment = this.state.comment

        comment[name] = value;
        return this.setState({ comment })
    }

    save(e) {
        e.preventDefault()

        this.setState({ saving: true })
        this.props.onUpdate(this.state.comment)
    }

    edit() {
        this.setState({
            isEditing: true,
        })
    }

    cancelEdit() {
        this.setState({
            isEditing: false,
        })
    }

    render() {
        const { comment } = this.state

        if (this.state.isEditing) {
            return (
                <li className="list-group-item comment-body">
                    <CommentForm
                        comment={comment}
                        onChange={this.handleChange.bind(this)}
                        onSubmit={this.save.bind(this)}
                        onCancel={this.cancelEdit.bind(this)} />
                </li>
            )
        } else {
            return (
                <li className="list-group-item comment-body">
                    <div className="float-right">
                        <button type="button" className="close" aria-label="Close" onClick={() => this.props.onDelete(comment)}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="comment-header">
                        <h4 className="user">{comment.author}</h4>
                        &nbsp;
                        <small className="text-muted"><Moment fromNow>{comment.timestamp}</Moment></small>
                        <Button color="link" className="mr-1" size="sm" onClick={this.edit.bind(this)}>Edit</Button>
                    </div>
                    <p>{comment.body}</p>
                    <Votes
                        voteScore={comment.voteScore}
                        onVoteUp={() => this.props.onVoteUp(comment)}
                        onVoteDown={() => this.props.onVoteDown(comment)} />
                </li>
            )
        }
    }
}

export default Comment
