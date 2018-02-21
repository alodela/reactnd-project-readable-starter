import Api from '../api/posts'
import { normalize } from 'normalizr'
import { push } from 'react-router-redux'
import * as schema from '../api/schema'

export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS'
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS'
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS'
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS'
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS'
export const VOTE_UP_POST_SUCCESS = 'VOTE_UP_POST_SUCCESS'
export const VOTE_DOWN_POST_SUCCESS = 'VOTE_DOWN_POST_SUCCESS'

const loadPostsSuccess = response => ({
    type: LOAD_POSTS_SUCCESS,
    response
})

const loadPostSuccess = response => ({
    type: LOAD_POST_SUCCESS,
    response
})

const updatePostSuccess = response => ({
    type: UPDATE_POST_SUCCESS,
    response
})

const deletePostSuccess = response => ({
    type: DELETE_POST_SUCCESS,
    response
})

const createPostSuccess = response => ({
    type: CREATE_POST_SUCCESS,
    response
})

const voteUpPostSuccess = response => ({
    type: VOTE_UP_POST_SUCCESS,
    response
})

const voteDownPostSuccess = response => ({
    type: VOTE_DOWN_POST_SUCCESS,
    response
})

export const loadPosts = (category) => dispatch => (
    ( !category
        ? Api.fetchPosts()
        : Api.fetchPostsByCategory(category)
    ).then(response => dispatch(
        loadPostsSuccess(normalize(response, schema.posts))
    ))
)

export const loadPost = (postId) => dispatch => (
    Api.fetchPost(postId)
        .then(response => dispatch(
            loadPostSuccess(normalize(response, schema.post))
        ))
)

export const updatePost = (post) => dispatch => (
    Api.updatePost(post)
        .then(response => dispatch(
            updatePostSuccess(normalize(response, schema.post))
        ))
)

export const deletePost = (post) => dispatch => (
    Api.deletePost(post)
        .then(response => {
            dispatch(deletePostSuccess(normalize(response, schema.post)))
            dispatch(push('/'))
        })
)

export const createPost = (post) => dispatch => (
    Api.createPost(post)
        .then(response => {
            dispatch(createPostSuccess(normalize(response, schema.post)))
            dispatch(push('/'))
        })
)

export const voteUp = (post) => dispatch => (
    Api.voteUp(post)
        .then(response => {
            dispatch(voteUpPostSuccess(normalize(response, schema.post)))
        })
)

export const voteDown = (post) => dispatch => (
    Api.voteDown(post)
        .then(response => {
            dispatch(voteDownPostSuccess(normalize(response, schema.post)))
        })
)