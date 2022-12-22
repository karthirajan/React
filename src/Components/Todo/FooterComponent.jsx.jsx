import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class FooterComponent extends Component{
    render(){
        return(
            <div className="welcome">
                <div className="container">
                    <footer className='footer'>
                        <span className='text-muted'>All rights reserved.</span>
                    </footer>
                </div>
            </div>
        )
    }
}

export default FooterComponent;