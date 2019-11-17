import React from 'react';
import { Input,Button,Grid  } from '@material-ui/core';
import httpClient from '../utilities/httpClient';
import cookie from "../utilities/cookie"
class Login extends React.Component{
  constructor(props){
    super(props); 
    this.state ={
      email:'',
      password:'',
      valid:false
    }
  }
change = (event)=> {
  const taget =event.target;
  const name =taget.name;
  const val = taget.type === 'checkbox' ? taget.checked : taget.value;
this.setState({[name]:val},()=>{
  this.setState({valid:!!this.state.password && !!this.state.email});
});

}
login = ()=>{
   

  httpClient.post(`/login`, {email:this.state.email,password:this.state.password})
    .then(res => {
      if(res.susscess){
        const data = res.payload.split(";");
        cookie.set('token', data[1]);
        this.props.history.push("/profile",{userId:data[0]});
      }else{
        const el =document.getElementById("error");
        el.style.display="block";
        el.textContent = res.message || "Wrong email or password";
      }
    })
}


  render() { 
    return (
    <div className="login">
    <form>
        <div className="login-form">
          <h1 className="label-login">Login</h1>
          <br/><br/>
            <Input className="app-input" placeholder="email" onChange={this.change} name="email" />
            <br/>
            <Input className="app-input" placeholder="Password" autoComplete="on" onChange={this.change} name="password" type="password"/>
            <br/>
         
            <Grid container item xs={8} spacing={3} style={{paddingLeft:'27%'}}>
            <Grid item xs={6}>
            <Button variant="contained" color="primary" className="login-btn" disabled={!this.state.valid} onClick={this.login}>Login</Button>
            </Grid>
            <Grid item xs={6}>
            <Button variant="contained" color="primary" className="register-btn"  onClick={()=>this.props.history.push("/register")}>Register</Button>
            </Grid>
          </Grid>
            <span id="error"></span>
      </div>
      </form>
      <div className="container-login"> 
      {/* <Link to={{
        pathname:"/profile",
        state:{
          name:"trieudk"
        }
        }} id="link1"  ></Link> */}
      </div>
    </div>
    )};
  }
  
  export default Login;