import React from 'react';
import './App.css';
// import  Login  from './components/login.component';
import  User  from './components/user.component';
import UserUpdate from './components/user-update.component';
// import UserRegister from './components/user-register.component';
import SignInSide from './components/SignInSide.component';
import SignUp from './components/register.component';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


class App extends React.Component {
  render(){
    return (
        <Router>
        <Switch>
            <Route path='/'  exact render={props=><SignInSide {...props} />} />
            <Route path='/profile' render={props=><User {...props} />} />
            <Route path='/update' render={props=><UserUpdate {...props} />} />
            {/* <Route path='/register' render={props=><UserRegister {...props}  />} /> */}
            <Route path='/register' render={props=><SignUp {...props}  />} />
            {/* <Route path='/singinside' render={props=><SignInSide {...props}  />} /> */}
          </Switch>
        </Router>
    )};
}

export default App;
