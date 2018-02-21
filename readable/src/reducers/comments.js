import { combineReducers } from 'redux'
import {
  LOAD_COMMENTS_SUCCESS,
  UPDATE_COMMENT_SUCCESS,
  DELETE_COMMENT_SUCCESS,
  CREATE_COMMENT_SUCCESS,
  VOTE_UP_COMMENT_SUCCESS,
  VOTE_DOWN_COMMENT_SUCCESS,
} from '../actions/comment'

function byId(state = {}, action) {
  switch (action.type) {
    case LOAD_COMMENTS_SUCCESS :
    case CREATE_COMMENT_SUCCESS :
    case UPDATE_COMMENT_SUCCESS :
    case DELETE_COMMENT_SUCCESS :
    case VOTE_UP_COMMENT_SUCCESS :
    case VOTE_DOWN_COMMENT_SUCCESS :
      return {
        ...state,
        ...action.response.entities.comments,
      }
    default :
      return state;
  }
}

function allIds(state = [], action) {
  switch (action.type) {
    case LOAD_COMMENTS_SUCCESS :
      return action.response.result
    case CREATE_COMMENT_SUCCESS :
      return [...state, action.response.result]
    case DELETE_COMMENT_SUCCESS :
      const newState = [...state]
      newState.splice(newState.indexOf(action.response.result), 1)
      return newState
    default :
      return state;
  }
}

export default combineReducers({
  byId,
  allIds,
})