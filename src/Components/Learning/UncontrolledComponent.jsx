import React , {Component} from 'react';
import '../../Bootstrap.css'

class UncontrolledComponent extends Component{

    constructor(props){
        super(props);
        this.username = React.createRef();
        this.password = React.createRef();
        this.submit = this.submit.bind(this);
    }

    submit(event){
        event.preventDefault();
        console.log(this.username.current.value)
    }

  render(){
      return (
      <div className='Uncontrolled'>
           <form>
               <label>Username:</label>
               <input ref={this.username} type='text' name='username'></input>
               <label>Password:</label>
               <input ref={this.password} type='password' name='password'></input>
               <button type='submit' onClick={this.submit}>Submit</button>
           </form>
      </div>
      )
  }
}

export default UncontrolledComponent;