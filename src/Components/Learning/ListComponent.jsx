import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../Bootstrap.css'

class ListComponent extends Component{

    constructor(props){
        super(props)
        this.state = {
            usersList : [
                   {id:1, username:"karthi",designation:"Tutor"},
                   {id:2, username:"jay",designation:"student"},
                   {id:3, username:"mithun",designation:"student"},
                   {id:4, username:"hariharan",designation:"student"},
                   {id:5, username:"vignesh",designation:"student"}    
            ]
        }
    }

    

    render(){
        return(
            <React.Fragment>
            <div className="list">
                <h3>Table</h3>
                <p>
                    <a href="http://www.google.com/">Google</a>
                </p>
                <div className="container">
                <table className="table table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Designation</th>
                        </tr>
                    </thead>
                    <tbody>
                       {this.state.usersList.map(
                           (users) => 
                               <tr key={users.id}>
                                   <td>{users.id}</td>
                                   <td>{users.username}</td>
                                   <td>{users.designation}</td>
                               </tr>      
                       )}
                    </tbody>
                </table>
                </div>
            </div>
            </React.Fragment>
        )
    }
}

function Home() {
    return(
        <div>
            <ul>
                <li><Link to="http://www.google.com/">Home</Link></li>
            </ul>
        </div>
    )
}

export default ListComponent;