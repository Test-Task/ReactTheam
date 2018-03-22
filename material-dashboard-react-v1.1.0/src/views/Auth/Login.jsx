import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { withStyles, Grid } from "material-ui";
import { bindActionCreators } from 'redux';
import { createBrowserHistory } from "history";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import RaisedButton from 'material-ui-next/RaisedButton';
import {  Button } from "components";
import TextField from 'material-ui/TextField';
import * as signin from '../../actions/authActions';
// import { ToastContainer, toast } from 'react-toastify';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      formErrors: { email: '', password: '' },
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
    this.handleUserInput = this.handleUserInput.bind(this);
    this.validateField = this.validateField.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    debugger
    console.log(this.props,'this.props')
    if (nextProps.signin) {
      if (nextProps.signin.signin) {
        // toast.success('User logged in successfully')
        // toast.success(nextProps.signin.message);
        setTimeout(function () { this.props.history.push('/dashboard') }.bind(this), 1000);
      }
      else {
        // toast.error('Either email or password is incorrect!')
        // toast.error(nextProps.signin.message);
        
      }
    }
  }

  componentWillMount(){
    if(localStorage.token){
      this.props.history.push('/dashboard')
    }
  }


  handleUserInput(e) {
    debugger
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value },
      () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    debugger
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : 'Email is invalid';
        break;
      case 'password':
        passwordValid = value.length > 0;
        fieldValidationErrors.password = passwordValid ? '' : 'This is required';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailValid,
      passwordValid: passwordValid
    }, this.validateForm);
  }

  validateForm() {
    debugger
    this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
  }

  handleClick(event) {
    debugger
    let payload = {
      "username": this.state.email,
      "password": this.state.password
    }
    this.props.actions.signIn(payload);
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <h2>Log-in to your account</h2>
            <hr />
            <TextField
              hintText="Enter your email"
              name="email"
              floatingLabelText="Email"
              errorText={this.state.formErrors.email ? this.state.formErrors.email : ''}
              onChange={this.handleUserInput}
            />
            <br />
            <TextField
              type="password"
              name="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              errorText={this.state.formErrors.password ? this.state.formErrors.password : ''}
              onChange={this.handleUserInput}
            />
            <br />
            <Button color="primary" disabled={!this.state.formValid} onClick={(event) => this.handleClick(event)}>
        Primary
      </Button>
              {/* <Button label="Sign In" disabled={!this.state.formValid} primary={true} style={style} onClick={(event) => this.handleClick(event)} />   */}
          </div>
          <hr />
        </MuiThemeProvider>
        {/* <ToastContainer autoClose={1000} /> */}
      </div>
    );
  }
}
const style = {
  margin: 15,
};

//this tells what state should expose on props
function mapStateToProps(state, ownProps) {
  debugger
  return {
    signin: state.auth.signin
  };
}
// this tells what action should expose on props bindActionCreators is used to
// bind all actions at once
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(signin, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
// export default Login;
// export default withStyles(dashboardStyle)(Dashboard);