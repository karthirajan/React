import React, {Component} from 'react';

class MountingComponent extends Component{

    constructor(props){
        super(props)
        this.state = {
            color: 'red'
        }
    }

   /*static getDerivedStateFromProps(props,state){
        return {
            color : props.favColor
        }
    }*/

    render(){
        return(
            <div className="mounting">
                <p>My favourite color is {this.state.color}</p>
            </div>
        )
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({color: 'Yellow'})
        }, 5000)
    }
}

export default MountingComponent;