import React from 'react';
import {Component} from 'react';
import axios from 'axios';


class Name extends Component{

    state = {
        data: []
    }
    componentDidMount(){
        axios.get('/api/accounts/getUserInfo')
        .then((res) => this.setState({ data: res.data }))
    }
render(){
    console.log(this.state.data)
return(
    <div>
        <h3>{this.state.data.email}</h3>
    </div>
)
}

}

export default Name