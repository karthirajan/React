import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import "../../Bootstrap.css";

class WelcomeComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            message : ''
        }
    }

    render(){
        return(
            <div className="welcome">
                <div className="container">
                    <div className="row mt-5">
                        <p>Welcome {this.props.params.name}</p>
                        <p>To view user's list click <Link to='/users'>here</Link></p>
                    </div>
                    
                </div>
            </div>
        )
    }

      }


export default WelcomeComponent;