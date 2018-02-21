import React from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import { Row, Col } from 'reactstrap'
import Votes from '../Votes'

const PostItem = ({ post = {}, onVoteUp, onVoteDown, onDelete }) => {
    const {
        id,
        title,
        body,
        voteScore,
        timestamp,
        category,
        author,
        commentCount } = post;

    return (
        <Row key={id}>
            <Col>
                <div className="float-right">
                    <button type="button" className="close" aria-label="Close" onClick={() => onDelete(post)}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <h5>
                    <Link to={`/${category}/${id}`}>{title}</Link>
                </h5>
                <p className="text-truncate">{body}</p>
                <p>
                    <Link to={`/${category}/${id}`} className="btn btn-outline-primary btn-sm">Read more</Link>
                </p>
                <ul className="list-inline">
                    <li className="list-inline-item"><small className="text-muted"><Moment format="MMMM Do, YYYY" date={timestamp} /> by {author}</small></li>
                    <li className="list-inline-item">|</li>
                    <li className="list-inline-item"><small className="text-muted">{commentCount} comments</small></li>
                    <li className="list-inline-item">|</li>
                    <li className="list-inline-item">
                        <Votes
                            voteScore={voteScore}
                            onVoteUp={() => onVoteUp(post)}
                            onVoteDown={() => onVoteDown(post)} />
                    </li>
                </ul>
                <hr />
            </Col>
        </Row>
    )
}

PostItem.defaultProps = {
    post: {}
}

export default PostItem