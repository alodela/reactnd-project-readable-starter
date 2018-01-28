import { combineReducers } from 'redux'
import { LOAD_POSTS_SUCCESS } from '../actions/Post'

function posts(state = [], action) {
  switch (action.type) {
    case LOAD_POSTS_SUCCESS :
      return action.posts
    default :
      return state;
  }
}

export default combineReducers({
  posts,
})