import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import posts from './posts'
import comments from './comments'

const entities = combineReducers({
  posts,
  comments,
})

export default combineReducers({
  routerReducer,
  entities,
})