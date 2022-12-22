import React, { Component } from "react";
import '../../Bootstrap.css'

class UserComponent extends Component{

    constructor(props){
        super(props)
        this.state = {
            usersList : [{id:1,name:'karthi',designation:'developer',status:true,targetDate:new Date()}]
        }
       
    }

    
    render(){
        return(
            <React.Fragment>
            <div className="list">
                <h3>Users Table</h3>
               
                <div className="container">
                <table className="table table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Designation</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Update</th>  
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                       {this.state.usersList.map(
                           (users) => 
                               <tr key={users.id}>
                                   <td>{users.id}</td>
                                   <td>{users.name}</td>
                                   <td>{users.designation}</td>
                                   <td>{users.status.toString()}</td>
                                   <td>{users.targetDate.toString()}</td>
                                   <td>{<button className="btn btn-warning btn-sm">Edit</button>}</td>
                                   <td>{<button className="btn btn-danger btn-sm">Delete</button>}</td>
                               </tr>      
                       )}
                    </tbody>
                </table>
                </div>
                <div className="row mt-3 justify-content-center">
                                     <div className="col-4">
                                     <button type="button" className="btn btn-success btn-sm">Add User</button>
                                     </div>
                                 </div>
            </div>
            </React.Fragment>
        )
    }
}



export default UserComponent;