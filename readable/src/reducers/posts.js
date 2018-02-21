import { combineReducers } from 'redux'
import {
  LOAD_POSTS_SUCCESS,
  UPDATE_POST_SUCCESS,
  DELETE_POST_SUCCESS,
  LOAD_POST_SUCCESS,
  VOTE_UP_POST_SUCCESS,
  VOTE_DOWN_POST_SUCCESS,
} from '../actions/post'
import { CREATE_COMMENT_SUCCESS, DELETE_COMMENT_SUCCESS } from '../actions/comment'

function byId(state = {}, action) {
  switch (action.type) {
    case LOAD_POSTS_SUCCESS :
    case UPDATE_POST_SUCCESS :
    case DELETE_POST_SUCCESS :
    case LOAD_POST_SUCCESS :
    case VOTE_UP_POST_SUCCESS :
    case VOTE_DOWN_POST_SUCCESS :
      return {
        ...state,
        ...action.response.entities.posts,
      }
    case CREATE_COMMENT_SUCCESS :
      return updateCommentCounter(state, action, 1)
    case DELETE_COMMENT_SUCCESS :
      return updateCommentCounter(state, action, -1)
    default :
      return state;
  }
}

function allIds(state = [], action) {
  switch (action.type) {
    case LOAD_POSTS_SUCCESS :
      return action.response.result
    case LOAD_POST_SUCCESS :
      return [
        ...state, action.response.result
      ]
    default :
      return state;
  }
}

function updateCommentCounter(state, action, delta) {
  const comment = action.response.entities.comments[action.response.result]
  return {
    ...state,
    [comment.parentId]: {
      ...state[comment.parentId],
      commentCount: state[comment.parentId].commentCount + delta,
    }
  }
}

export default combineReducers({
  byId,
  allIds,
})