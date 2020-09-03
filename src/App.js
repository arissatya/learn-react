// THIS IS THE MAIN REACT
import React from 'react';

// THIS IS THE STORE MANAGEMENT SYSTEM
import { Provider } from 'react-redux'
import store from './Store'

// ITS ABOUT ROUTING
// This is the page that the route will render by the route
import Salam from './pages/Salam'
import About from './pages/About'
import FetchedUsers from './pages/FetchedUsers'

// this is the react router dom basic component
import {
  BrowserRouter as Router, Switch,
  Route, Link
} from 'react-router-dom'

function App() {
  // THIS APP FUNCTION IS GONNA BE THE SECOND BIGGEST CONTAINER FOR OUR
  // APP
  return (
    <div className="App">
      <h1>HELLO WORLD!</h1>
      <Router>
        {/* THIS IS A THE BASIC NAV */}
        <nav>
          <Link to='/'>Salam</Link> /
          <Link to='/fetchedUsers'> Users</Link>
        </nav>

        {/* WE PUT THE REACT-REDUX '<Provider>' STORE SYSTEM IN ROUTER SWITCH
        IN ORDER TO ACCES AND USE ALL THE STORE GOT */}
        <Provider store={store}>
          <Switch>
            {/* THE SWITCH IS HOW WE LIST THE ROUTE THAT WE WANT TO HAVE IN THE APP */}
            <Route exact path="/">
              <Salam />
            </Route>
            {/* THIS ':name' IS PARAMS, WE CAN USE IT INSIDE THIS ROUTE */}
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
