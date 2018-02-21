import Api from '../api/comments'
import { normalize } from 'normalizr'
import * as schema from '../api/schema'

export const LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS'
export const CREATE_COMMENT_SUCCESS = 'CREATE_COMMENT_SUCCESS'
export const UPDATE_COMMENT_SUCCESS = 'UPDATE_COMMENT_SUCCESS'
export const DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCCESS'
export const VOTE_UP_COMMENT_SUCCESS = 'VOTE_UP_POST_SUCCESS'
export const VOTE_DOWN_COMMENT_SUCCESS = 'VOTE_DOWN_POST_SUCCESS'

const loadCommentsSuccess = response => ({
    type: LOAD_COMMENTS_SUCCESS,
    response
})

const createCommentSuccess = response => ({
    type: CREATE_COMMENT_SUCCESS,
    response
})

const updateCommentSuccess = response => ({
    type: UPDATE_COMMENT_SUCCESS,
    response
})

const deleteCommentSuccess = response => ({
    type: DELETE_COMMENT_SUCCESS,
    response
})

const voteUpCommentSuccess = response => ({
    type: VOTE_UP_COMMENT_SUCCESS,
    response
})

const voteDownCommentSuccess = response => ({
    type: VOTE_DOWN_COMMENT_SUCCESS,
    response
})

export const loadComments = (postId) => dispatch => (
    Api.fetchComments(postId)
        ).then(response => dispatch(
            loadCommentsSuccess(
                normalize(response, schema.comments)
            )
        )
)

export const createComment = (comment) => dispatch => (
    Api.createComment(comment)
        ).then(response => dispatch(
            createCommentSuccess(
                normalize(response, schema.comment)
            )
        )
)

export const updateComment = (comment) => dispatch => (
    Api.updateComment(comment)
        ).then(response => dispatch(
            updateCommentSuccess(
                normalize(response, schema.comment)
            )
        )
)

export const deleteComment = (comment) => dispatch => (
    Api.deleteComment(comment)
        ).then(response => dispatch(
            deleteCommentSuccess(
                normalize(response, schema.comment)
            )
        )
)

export const voteUp = (comment) => dispatch => (
    Api.voteUp(comment)
        .then(response => {
            dispatch(voteUpCommentSuccess(normalize(response, schema.comment)))
        })
)

export const voteDown = (comment) => dispatch => (
    Api.voteDown(comment)
        .then(response => {
            dispatch(voteDownCommentSuccess(normalize(response, schema.comment)))
        })
)