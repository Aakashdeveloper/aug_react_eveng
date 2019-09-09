//1 Get Default State
//2 Set Initial State
//3 Before get Created
//4 Render JSX
//5 After component mounted

import React, {Component} from 'react';

class LifeCycle extends Component {
    //1 Get Default State
    constructor(props){
        super(props)

        //2 Set Initial State
        this.state= {
            title:'LifeCycle'
        }
    }

    //3 Before get Created
    componentWillMount(){
        console.log('Before Get Created')
    }

    componentWillUpdate(){
        console.log('componentWillUpdate')
    }

    componentDidUpdate(){
        console.log('componentDidUpdate')
    }
    
    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate>>>",this.state.title)
        if(nextState.title===this.state.title){
            return false
        }else {
            return true
        }
    }

    //4 Render JSX
    render(){
        console.log("in the render")
        return(
            <div>
                <h1>{this.state.title}</h1>
                <div onClick={()=>this.setState({title:'LifeCycle CLick'})}>Click Me</div>
            </div>
        )
    }

     //5 After get Created
     componentDidMount(){
        console.log('After Get Created')
    }

    componentWillUnmount(){
        alert('We are going out of the page')
    }
}



export default LifeCycle;
