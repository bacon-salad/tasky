import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import {Component} from 'react'





class SignIn extends Component{
//   useStyles (theme => ({
//   '@global': {
//     body: {
//       backgroundColor: theme.palette.common.white,
//     },
//   },
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: '10px 27px 15px;'

//   },
// }));
  
     state = {
         password: null,
         email: null
     }
logInFunction = (password, email) => {
axios.post('/api/accounts/login', 
{
password: password,
email: email
}).then(()=>console.log('hello'))}
   render(){
    // const classes = useStyles();
  return (
    <Container style={{backgroundColor: 'white', height: '60vh', paddingTop: '25px', borderRadius: '5px'}}component="main" maxWidth="xs">
      <CssBaseline />
      <div >
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <Avatar style={{backgroundColor: 'red', marginBottom: '10px'}}>
        </Avatar>
        <h1>Tasky</h1>
        <Avatar style={{backgroundColor: 'red', marginBottom: '10px'}}>
        </Avatar>
        </div>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form  noValidate>
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
            onChange={(e) => this.setState({ email: e.target.value })}
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
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <div id="signInButCont" style={{justifyContent: 'center', paddingTop: '10px', marginTop:'20px', width: '80%', marginRight:'40px'}}>
            <Link
            onClick={() => this.logInFunction(this.state.password, this.state.email)}
            to = "/home"
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            id='signInBut'
          >
            Sign In
          </Link></div>
          <Grid container>
            <Grid item xs>
            </Grid>
            <Grid item>
              <Link to="/forms/signUp" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>

      </Box>
    </Container>
  );
}}

export default SignIn