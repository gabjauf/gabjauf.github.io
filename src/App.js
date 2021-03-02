import React from 'react'
import './App.css'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import {Home} from './views/home/home'
import {Articles} from './views/blog/blog'

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li className="navigation-item">
              <Link to="/">Home</Link>
            </li>
            <li className="navigation-item">
              <Link to="/articles">Articles</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/articles" component={Articles} />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
