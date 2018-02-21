import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import PostsContainer from './containers/PostsContainer'
import PostContainer from './containers/PostContainer'
import NewPostContainer from './containers/NewPostContainer'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { store, history } from './store'
import NotFound from './components/NotFound'

import './App.css'
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          <Route exact path="/" component={PostsContainer} />>
          <Route path="/posts/new" component={NewPostContainer} />
          <Route exact path="/:category" component={PostsContainer} />>
          <Route path="/:category/:post_id" component={PostContainer} />
          <Route path="*" component={NotFound} />
        </Switch>
      </App>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
