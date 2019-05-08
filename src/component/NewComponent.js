import React, { Component } from 'react';

class NewComponent extends Component{

    constructor(props){
        super(props);
        this.state={
            myFirstState:0
        }
        console.log('constructor');
    }


    componentDidMount(){
        console.log('componentDidMount');
    }

    componentDidUpdate(){
        console.log('componentDidUpdate');
    }

    shouldComponentUpdate(){
        console.log('shouldComponentUpdate');
        if(this.state.myFirstState>5){
          return false;
        }
        return true;
    }

    state={
        myFirstState:0
    }

    
changeState= () =>{
    this.setState({ myFirstState: this.state.myFirstState+1})
}

    render(){
        console.log('render');
        return(
            <div>
              Moj komponent: {this.props.number}<br/><br/>
              <span>Mój stan {this.state.myFirstState}</span><br/><br/>
              <button onClick={this.changeState}>increment</button>
            </div>
        );
    }
}


export default NewComponent;