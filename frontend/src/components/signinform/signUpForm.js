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
import axios from "axios"
import {Component} from 'react'
function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Built with love by the '}
      <Link color="inherit" >
        Material-UI
      </Link>
      {' team.'}
    </Typography>
  );
}

// const useStyles = makeStyles(theme => ({
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
//     marginTop: theme.spacing(3),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));



class SignUp extends Component{
   state = {
         firstName:null,
         lastName:null,
         userName:null,
         password: null,
         email: null
     }
 titsandass = (firstName, lastName, userName, password, email) => {
  //  if (!name && !password){alert('how the fuck are you going to make an account without a name or password. What are you dumb?')}
  //  else if (!name && !email){alert('no name or email? Guess your not serious about this fuck you then.')}
  //  else if (!email && !password){alert('what are you gonna sign in with? Just a fucking name? Are you STUPID?')}
  //  else if (!name) {alert('thats not a name ya fucking idiot')}
  //  else if (!password){alert('theres no password ya fucking idiot')}
  //  else if (!email){alert('What the fuck are you doing theres not an email. Do you even WANT an account?')}
   axios.post('http://localhost:8080/api/accounts/signUp', 
 {
 firstName: firstName,
 lastName: lastName,
 userName: userName,
 password: password,
 email: email
 }).then(
   ()=>console.log('hello'))
   }
  render(){
    // const }tyles()
  return (
   
    <Container style={{backgroundColor: 'white', borderRadius: '15px'}}component="main" maxWidth="xs">
      <CssBaseline />
      <div >
        <Avatar >
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={(e) => this.setState({ firstName: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={(e) => this.setState({ lastName: e.target.value })}
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
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Username"
                label="UserName"
                name="Username"
                autoComplete="Username"
                onChange={(e) => this.setState({ userName: e.target.value })}
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
                onChange={(e) => this.setState({ password: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <div id="signInButCont">
            <Link
            to = "/home"
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            
            id='signInBut'
            onClick={() => this.titsandass(this.state.firstName, this.state.lastName, this.state.userName, this.state.password, this.state.email)}
          >
            Sign In
          </Link></div>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/forms" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <MadeWithLove />
      </Box>
    </Container>
  );
}}

export default SignUp