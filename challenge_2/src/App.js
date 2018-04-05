import React, { Component } from 'react';
import UserInfo from './components/userInfo';
import ShippingInfo from './components/shippingInfo';
import CreditInfo from './components/creditInfo';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      first: '',
      last: '',
      email: '',
      password: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      creditNum: '',
      expMonth: '',
      expYear: '',
      CVV: '',
      billingZip: '',
      currentPage: 0
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    axios.get('/app')
    .then((response)=>{
      console.log(response);
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  handleClick(e){
    console.log(e.target.name);
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Giri's Supestore</h1>
        </header>
        <UserInfo 
          handleClick={this.handleClick}
          handleChange={this.handleChange}
        />
        <ShippingInfo 
          handleClick={this.handleClick}
          handleChange={this.handleChange}
        />
        <CreditInfo 
          handleClick={this.handleClick}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
