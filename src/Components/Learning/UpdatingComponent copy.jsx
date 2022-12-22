import React, {Component} from 'react';

class UpdatingComponent extends Component{

    constructor(props){
        super(props)
        this.state = {
            color: 'red'
        }

        this.changeColor = this.changeColor.bind(this);
    }

   /*static getDerivedStateFromProps(props,state){
        return {
            color : props.favColor
        }
    }*/

    shouldComponentUpdate(){
        return true;
    }

    changeColor(){
        this.setState({
            color: "Black"
        })
    }

    getSnapshotBeforeUpdate(prevProps,prevState){

        document.getElementById('div1').innerHTML =
        "Before Update the color was "+ prevState.color

    }

    componentDidUpdate(){

        document.getElementById('div2').innerHTML =
        "After Update the color is "+ this.state.color

    }

    render(){
        return(
            <div className="mounting">
                <p>My favourite color is {this.state.color}</p>
                <br></br>
                <button style={{backgroundColor:"green"}} type='button' onClick={this.changeColor}>Change Color</button>
                <div id="div1"></div>
                <div id="div2"></div>
            </div>
        )
    }

    
}

export default UpdatingComponent;