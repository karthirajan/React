import React, { Component } from "react";
import "../../Bootstrap.css";
import Authentication from "./Authentication";

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "karthi",
      password: "",
      hasLoginSuccess: false,
      hasLoginFailed: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  submit(event) {
    event.preventDefault();
    //  console.log(this.state.username & this.state.password)
  }

  handleLogin() {
    if (this.state.username === "karthi" && this.state.password === "rajan") {
      console.log("Valid Credentials");
      Authentication.setLoggedUser(this.state.username);
      this.props.navigate(`/welcome/${this.state.username}`);
      this.setState({
        hasLoginSuccess: true,
        hasLoginFailed: false,
      });
    } else {
      console.log("Invalid Credentials");
      this.setState({
        hasLoginSuccess: false,
        hasLoginFailed: true,
      });
    }
  }

  render() {
    return (
      <div className="controlled">
        <div className="container">
          <LoginHandling
            hasLoginSuccess={this.state.hasLoginSuccess}
            hasLoginFail={this.state.hasLoginFailed}
          ></LoginHandling>
          <div className="row mt-5 justify-content-center">
              <div className="col-5">
              <div className="card">
            <h2>Login</h2>
            <div className="card-body">
              <form onSubmit={this.submit}>
                <div className="row mt-3">
                  <input
                    type="text"
                    className="form form-control-sm"
                    name="username"
                    placeholder="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                  ></input>
                </div>
                <div className="row mt-3">
                  <input
                    type="password"
                    className="form form-control-sm"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  ></input>
                </div>
                <div className="row mt-3 justify-content-center">
                  <button type="submit" className="btn btn-success btn-sm col-4" onClick={this.handleLogin}>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
              </div>
          </div>
          
        </div>
      </div>
    );
  }
}

function LoginHandling(props) {
  if (props.hasLoginSuccess || props.hasLoginFail) {
    return props.hasLoginSuccess ? (
      <div className="alert alert-warning">Login success</div>
    ) : (
      <div className="alert alert-warning">Login Fail</div>
    );
  }
}

export default LoginComponent;
