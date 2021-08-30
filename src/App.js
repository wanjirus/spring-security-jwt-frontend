import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './Components/Profile';
import UserPage from './Components/UserPage';
import ProjectManagerPage from './Components/ProjectManagerPage';
import AdminPage from './Components/AdminPage';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/home' exact={true} component={Home}/>
           <Route path='/profile' exact={true} component={Profile}/>
          <Route path='/user' exact={true} component={UserPage}/>
          <Route path='/pm' exact={true} component={ProjectManagerPage}/>
          <Route path='/admin' exact={true} component={AdminPage}/>
          <Route path='/signin' exact={true} component={Login}/>
          <Route path='/signup' exact={true} component={SignUp}/> 
          </Switch>
      </Router>
    )
  }
}

export default App;