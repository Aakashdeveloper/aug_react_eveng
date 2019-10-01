import React, { Component} from 'react';
const MyContext = React.createContext()

class MyProvider extends Component{
    state={
        name:'John'
    }
    render(){
        return(
            <MyContext.Provider value={{
                state:this.state
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

class Person extends Component{
    constructor(props){
        super(props)

    }
    render(){
        return(
            <div className="person">
                <MyContext.Consumer>
                    {(context) => (
                        <p>Hii from person {context.state.name}</p>
                    )}
                    
                </MyContext.Consumer>
                
            </div>
        )
    }
}

const Family = (props) => {
    return(
        <div className="family">
            <Person />
        </div>
    )
}


class ContextComponent extends Component {
    state={
        name:'John'
    }
    render(){
        return(
            <MyProvider>
                <div>
                    <p>This is Context Comp</p>
                    <Family name={this.state.name}/>
                </div>
            </MyProvider>
        )
    }
}

export default ContextComponent