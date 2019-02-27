import { Component } from 'react';
import {browserHistory} from 'react-router';

export default class Logouts extends Component{

    componentWillMount(){
        localStorage.removeItem('auth-token');
        browserHistory.push('/');
    }

    render(){
        return null;
    }
}