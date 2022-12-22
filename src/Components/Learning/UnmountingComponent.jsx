import React, {Component} from 'react';

class UnmountingComponent extends Component{

    constructor(){
        super()
        this.state = {
            show : true
        }


    }

    deleteHeader = () => {
        this.setState({
            show: false
        })
    }

    render(){
        let header;
        if(this.state.show){
            header = <HeaderComponent/>
        }
        return(
             <div className="unmount">
                 {header}
                 <button type='button' style={{backgroundColor:"red"}} onClick={this.deleteHeader}>Delete Header</button>
             </div>
        )
    }
}

class HeaderComponent extends Component{

    componentWillUnmount(){
        alert('Do you want to delete header?')
    }

    render(){
        return(
            <div className="header">
                <h2>Header</h2>
            </div>
        )
    }
}

export default UnmountingComponent;