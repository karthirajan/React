import React, { Component } from "react";

class ControlledComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            username: 'karthi',
            password: '',
            hasLoginSuccess: false,
            hasLoginFailed: false
        }

        //this.handleUsernameChange = this.handleUsernameChange.bind(this);
        //this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleUsernameChange(event){
         //console.log('hi')
         this.setState({
             username: event.target.value
         })
    }

    handlePasswordChange(event){
        //console.log('hi')
        this.setState({
            password: event.target.value
        })
   }

   handleChange(event){
    this.setState({
        [event.target.name]: event.target.value
    })
   }



    submit(event){
        event.preventDefault();
       //  console.log(this.state.username & this.state.password)
    }

    handleLogin(){
      
        if(this.state.username === "karthi" && this.state.password === "rajan"){
            console.log('Valid Credentials');
            this.setState({
            hasLoginSuccess: true,
            hasLoginFailed: false
            })
        }else{
            console.log('Invalid Credentials');
            this.setState({
                hasLoginSuccess: false,
                hasLoginFailed: true
                })
        }

    }

  render() {
    return (
      <div className="controlled">
          <LoginHandling hasLoginSuccess={this.state.hasLoginSuccess} hasLoginFail={this.state.hasLoginFailed}></LoginHandling>
        {/*<LoginSuccess loginStatus={this.state.hasLoginSuccess}></LoginSuccess>
        <LoginFailed loginStatus={this.state.hasLoginFailed}></LoginFailed>*/} 
        <form onSubmit={this.submit}>
          <label>Username:</label>
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange}></input>
          <label>Password:</label>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
          <button type="submit" onClick={this.handleLogin}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

function LoginSuccess(props){
    if(props.loginStatus){
    return(
        <div className="success">
            Login Success
        </div>
    )
    }
    return null;
}

function LoginFailed(props){
    if(props.loginStatus){
    return(
        <div className="failed">
            Login Failed
        </div>
    )
}
return null;
}

function LoginHandling(props){
    if(props.hasLoginSuccess || props.hasLoginFail){
        return (props.hasLoginSuccess) ? <div>Login success</div> : <div>Login Fail</div>
    }
}

export default ControlledComponent;
