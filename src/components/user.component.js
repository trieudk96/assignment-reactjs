import React from 'react';
import httpClient from '../utilities/httpClient';
import {CssBaseline,Typography,Container,Grid,Button} from '@material-ui/core';
import AuthenticationService from "../services/authentication.service"
class User extends React.Component {
  
  constructor(props){
    debugger
    super(props); 
    if( !AuthenticationService.IsLogined() || !this.props.location.state || !this.props.location.state.userId){
      this.props.history.push("/");
    }else{
      this.state={
        user:{}
      }
      httpClient.get(`/user/${this.props.location.state.userId}`)
      .then(response => {
        console.log(response);
        this.setState({
          user: {...response}
        });
      }).catch(e=>{
        this.props.history.push("/");
      });
    }
    
  }
  update =()=>{
    this.props.history.push("/update",{userId:this.props.location.state.userId});
  }


  render(){ 
    return (
      <React.Fragment>
      <CssBaseline />
      <Container >
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '80vh', paddingTop:'10vh',paddingLeft:'43vh'}} >
        <Grid container item xs={8} spacing={3}>
          <Grid item xs={12}>
           <h1 className="label-login">Profile</h1>
          </Grid>
        </Grid>

        <Grid container item xs={8} spacing={3}>
          <Grid item xs={6}>
            <label><strong>Name:</strong></label>
          </Grid>
          <Grid item xs={6}>
            <label><strong>{this.state.user.name}</strong></label>
          </Grid>
        </Grid>


        <Grid container item xs={8} spacing={3}>
          <Grid item xs={6}>
            <label><strong>Email:</strong></label>
          </Grid>
          <Grid item xs={6}>
            <label><strong>{this.state.user.email}</strong></label>
          </Grid>
        </Grid>


        <Grid container item xs={8} spacing={3}>
          <Grid item xs={6}>
            <label><strong>MobileNumber:</strong></label>
          </Grid>
          <Grid item xs={6}>
            <label><strong>{this.state.user.mobileNumber}</strong></label>
          </Grid>
        </Grid>


        <Grid container item xs={8} spacing={3}>
          <Grid item xs={6}>
            <label><strong>Gender:</strong></label>
          </Grid>
          <Grid item xs={6}>
            <label><strong>{this.state.user.gender === 0 ? "Nam" : "Nữ"}</strong></label>
          </Grid>
        </Grid>


        <Grid container item xs={8} spacing={3}>
          <Grid item xs={6}>
            <label><strong>Dob:</strong></label>
          </Grid>
          <Grid item xs={6}>
            <label><strong>{this.state.user.dob}</strong></label>
          </Grid>
        </Grid>


        <Grid container item xs={8} spacing={3}>
          <Grid item xs={6}>
            <label><strong>Email Opt-In:</strong></label>
          </Grid>
          <Grid item xs={6}>
            <label><strong>{this.state.user.emailOtpIn}</strong></label>
          </Grid>
        </Grid>
        <Grid container item xs={8} spacing={3}>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" className="login-btn"  onClick={this.update}>Update</Button>
          </Grid>
        </Grid>
        </Typography>
      </Container>
    </React.Fragment>
      
      );
    }
  }
   
  
  export default User;