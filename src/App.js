// THIS IS THE MAIN REACT
import React from 'react';

// THIS IS THE STORE MANAGEMENT SYSTEM
import { Provider } from 'react-redux'
import store from './Store'

// ITS ABOUT ROUTING
import Salam from './pages/Salam'
import About from './pages/About'
import FetchedUsers from './pages/FetchedUsers'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>ASSALAMUALAIKUM</h1>
      <Router>
        <nav>
          <Link to='/'>Salam</Link> /
          {/* <Link to='/about'>About</Link> / */}
          <Link to='/fetchedUsers'> Users</Link>
        </nav>

        {/* WE PUT THE STORE SYSTEM IN ROUTER SWITCH */}
        <Provider store={store}>
          <Switch>
            <Route exact path="/">
              <Salam />
            </Route>
            <Route path="/about/:name">
              <About />
            </Route>
            <Route path="/fetchedUsers">
              <FetchedUsers />
            </Route>
          </Switch>
        </Provider>

      </Router>
    </div>
  );
}

export default App;
