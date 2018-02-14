import React, { Component } from 'react';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import Course from './containers/Course/Course';
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import './App.css';
import Error from './component/error';

class App extends Component {
  render () {
    return (
    <BrowserRouter basename="/">
        <div className="App">
            <ul>
                <li><NavLink
                    to="/courses">Courses</NavLink></li>
                <li><NavLink to='/users'>Users</NavLink></li>
            </ul>
            <Switch>
              <Route path="/courses" component={Courses} />
              <Route path="/users" component={Users} />
              <Redirect from="/all-courses" to="/courses"/>
              <Route component={Error}/>
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
