import React from 'react';
import {Component} from 'react';
import axios from 'axios';


class Name extends Component{

    state = {
        data: [],
        email: null,
    }
    componentDidMount(){
        axios.get('/api/accounts/getUserInfo')
        .then((res) => this.setState({ email: res.data.email }))
    }
render(){
    console.log(this.state.data)
return(
    <div>
        <h3>{this.state.email}</h3>
    </div>
)
}

}

export default Name