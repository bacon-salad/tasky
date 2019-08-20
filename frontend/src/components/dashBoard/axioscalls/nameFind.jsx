import React from 'react';
import {Component} from 'react';
import axios from 'axios';
import{Link} from 'react-router-dom'


class Name extends Component{

    state = {
        data: [],
        email: null,
    }
    componentDidMount(){
        setTimeout(this.getFromDb, 1000)
}

getFromDb = () => {
    axios.get('/api/accounts/getUserInfo')
    .then((res) =>{
    this.setState({email: res.data.email})
})
}

render(){

    var signOut = function(){
        axios.get('/api/accounts/logout')
    }
    var email = this.state.email
    console.log(email)
    if (email == null) {this.setState({email: 'loading...'})}
return(
    <div style={{display:'flex', justifyContent:'space-between'}}>
        <h3>{this.state.email}</h3>
        <Link to="/forms" onClick={signOut}style={{marginTop: '25px',color:'white', backgroundColor: 'black', borderRadius: '12px', width: '100px', height: '40px', textAlign: 'center', textDecoration: 'none'}}>Sign Out</Link>
    </div>
)
}

}

export default Name