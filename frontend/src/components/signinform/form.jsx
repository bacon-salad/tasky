// // import React from 'react';
// // import {Component} from 'react';
// // import '../../App.css'
// // import axios from 'axios'

// // class App extends Component{

//     state = {
//         name: null,
//         password: null,
//         email: null
//     }


// titsandass = (name, password, email) => {
//   if (!name && !password){alert('how the fuck are you going to make an account without a name or password. What are you dumb?')}
//   else if (!name && !email){alert('no name or email? Guess your not serious about this fuck you then.')}
//   else if (!email && !password){alert('what are you gonna sign in with? Just a fucking name? Are you STUPID?')}
//   else if (!name) {alert('thats not a name ya fucking idiot')}
//   else if (!password){alert('theres no password ya fucking idiot')}
//   else if (!email){alert('What the fuck are you doing theres not an email. Do you even WANT an account?')}
//   axios.post('http://localhost:8080/api/accounts/signUp', 
// {
// name: name,
// password: password,
// email: email
// }).then(
//   ()=>console.log('hello'))
//   }
//   render (){
//     const style = {
//       form: {
//       width: '50vw',
//       height: '50vh',
//       backgroundColor: 'black',
//       color: 'white',
//       justifySelf: 'center',
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'space-between'
//     },
//     container: {
//       width: '100vw',
//       height: '100vh',
//       display: 'flex',
//       justifyContent: 'center',
//       alignContent: 'center',
//       paddingTop: '200px'
//     }

//     }
//   return (
//     <div style={style.container}>
//     <div style={style.form}>
//         <input id='nameinp' type="text" placeholder="name" onChange={(e) => this.setState({ name: e.target.value })}></input>
//         <input id='passinp' type="text" placeholder="password" onChange={(e) => this.setState({ password: e.target.value })}></input>
//         <input id='emailinp' type="text" placeholder="email" onChange={(e) => this.setState({ email: e.target.value })}></input>
//         <button onClick={() => this.titsandass(this.state.name, this.state.password, this.state.email)}>push</button>
//     </div>
//     </div>
//   );
// }}

