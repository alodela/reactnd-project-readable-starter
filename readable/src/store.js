import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import reducers from './reducers';
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'

export const history = createHistory()

export const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(routerMiddleware(history), thunk)
    )
)