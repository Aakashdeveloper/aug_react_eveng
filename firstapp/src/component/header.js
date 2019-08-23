import React, {Component} from 'react';

class Header extends Component {

    constructor(props){
        super(props)

        this.state={
            title:'React News App',
            comapny: 'NareshIt'
        }
    }

    

    render(){
        return(
            <header>
                <div>
                    <center>
                        <h1>{this.state.title}</h1>
                    </center>
                    <h3>{this.state.comapny}</h3>
                </div>
            </header>
        )
    }
}

export default Header;