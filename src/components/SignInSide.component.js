import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { NavLink } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Login } from '../redux/actions/authentication.action';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
        Assignment
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



 function SignInSideForm(props) {

  const state ={
    email:'',
    password:'',
  };
  const change = (event)=> {
    const taget =event.target;
    const name =taget.name;
    const val = taget.type === 'checkbox' ? taget.checked : taget.value;
    state[name] = val;
  }
  const { Login } = props.props
  const login = ()=>{
    Login(state)
  }
const showError = (message=null) =>{
  const el =document.getElementById("error");
            el.style.display="block";
            el.textContent = message || "Wrong email or password";
}
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}> <LockOutlinedIcon /> </Avatar>
          <Typography component="h1" variant="h5"> Sign in</Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={change}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={change}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="button"
              onClick={login}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
              <span id="error"></span>
              </Grid>
              <Grid item>
                <NavLink to="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </NavLink>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

 class SignInSide extends React.Component{
  render() {
		if (this.props.isAuthenticated) {
			this.props.history.push('/profile')
		}
		return (
			<div>
				<SignInSideForm props={this.props} />
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		isAuthenticated: state.auth.isAuthenticated
	}
}

const mapDispatchToProps = dispatch => {
	return {
		Login: authenData => dispatch(Login(authenData))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SignInSide)


