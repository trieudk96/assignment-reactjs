import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { NavLink } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
        Assignment
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const user = {
    email:"",
    dob: "",
    emailOtpIn: "",
    gender: "0",
    id: 0,
    mobileNumber: "",
    name: "",
    password: ""
  };
  const change = (event)=> {
      debugger
    const taget =event.target;
    const name =taget.name;
    const val = taget.type === 'checkbox' ? taget.checked : taget.value;
    user[name] = val;
  }
  const register =()=>{
    console.log(user);
    // axios.post(`${AppConfig.apiUrl}/user`,{...this.state.user}).then(res=>{
    //   if(res.data.susscess){
    //     this.props.history.push("/");
    //   }
    // }).catch(e=>{
    //   console.log(e)
    // });
  };
export default function SignUp() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
                onChange={change}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={change}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={change}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Phone Number"
                name="phoneNumber"
                autoComplete="phone"
                onChange={change}
              />
            </Grid>
            <Grid container item xs={12} spacing={2}>
            <Grid item xs={6}>
              <label><strong>Gender:</strong></label>
            </Grid>
            <Grid item xs={6} spacing={2}>
              <label>Nam</label>
            <Radio
            // eslint-disable-next-line
              checked={user.gender == "0"}
              onChange={change}
              value="0"
              name="gender"
              inputProps={{ 'aria-label': 'A' }} />
              <label>Nữ</label>
            <Radio
            // eslint-disable-next-line
              checked={user.gender == "1"}
              onChange={change}
              value="1"
              name="gender"
              inputProps={{ 'aria-label': 'A' }} />
            </Grid>
            </Grid>
            <Grid item xs={12} spacing={2}>
              <TextField
                variant="outlined"
                fullWidth
                label="Dob"
                name="dob"
                onChange={change}
              />
            </Grid>
            <Grid item xs={12} spacing={2}>
              <TextField
                variant="outlined"
                fullWidth
                label="Email Opt-In"
                name="emailOtpIn"
                onChange={change}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={register}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <NavLink to="/" variant="body2">
                Already have an account? Sign in
              </NavLink>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
