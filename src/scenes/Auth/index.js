// NPM
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { Form, Text } from 'informed'; // FOr whatever reason fails to compile

// COMPONENTS
import Button from '../../components/Button';
import Input from '../../components/Form/Input';

// ACTIONS/CONFIG
import { AUTH_DATA, AUTH_KEY } from '../../App';

// STYLES
const Wrap = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
  align-items: center;
  padding-top: 10vh;
`;

const Form = styled.form`
  max-width: 250px;
  padding-top: 40px;
  text-align: center;

  input {
    margin-bottom: 15px;
  }

  button {
    margin-top: 25px;
  }
`;

const Title = styled.h1`
  margin-bottom: 10px;
`;

const Text = styled.span`
  color: ${props => props.theme.colors.readingText};
  font-weight: 300;
`;

// MODULE
export default class AuthScene extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      address: ''
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleFormSubmit(ev) {
    ev.preventDefault();
    const { onLogIn } = this.props;
    const { email, address } = this.state;

    localStorage.setItem(AUTH_KEY, true);
    localStorage.setItem(AUTH_DATA, JSON.stringify({ email, address }));
    onLogIn();
  }

  handleInputChange(key, value) {
    this.setState({ [key]: value });
  }

  render() {
    const { email, address } = this.state;

    return (
      <Wrap>
        <Title>Let's play!</Title>
        <Text>Enter your email and crypto address below to log in.</Text>
        <Form onSubmit={this.handleFormSubmit}>
          <Input
            name="email"
            value={email}
            onChange={ev => {
              this.handleInputChange('email', ev.target.value);
            }}
            id="email"
            placeholder="Email"
          />
          <Input
            name="address"
            value={address}
            onChange={ev => {
              this.handleInputChange('address', ev.target.value);
            }}
            id="address"
            placeholder="Crypto address"
          />
          <Button type="submit">Log in</Button>
        </Form>
      </Wrap>
    );
  }
}

// Props Validation
AuthScene.propTypes = {};
