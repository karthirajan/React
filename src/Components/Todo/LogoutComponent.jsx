import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class LogoutComponent extends Component{
    render(){
        return(
            <div className="welcome">
                <div className="container">
                    <div className="row mt-5">
                        <p>You have been logged out</p>
                        <p>To login click <Link to='/'>here</Link></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default LogoutComponent;