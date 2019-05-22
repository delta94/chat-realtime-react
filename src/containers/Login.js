import React, { Component } from 'react';

import fire from '../config/Fire';

import LoginForm from '../components/Forms/Login';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  handleChange = ({ target }) => {
    if (target.type === 'text') {
      this.setState({
        email: target.value,
        password: this.state.password,
      });
    } else {
      this.setState({
        email: this.state.email,
        password: target.value,
      });
    }
  };
  handleClick = () => {
    const { email, password } = this.state;
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(data => console.log(data))
      .catch(err => console.error(err));
  };
  render() {
    return (
      <>
        <LoginForm
          handleClick={this.handleClick}
          handleChange={this.handleChange}
        />
      </>
    );
  }
}
