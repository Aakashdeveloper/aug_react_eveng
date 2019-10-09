import React, {Component} from 'react';
import './header.css';


class Header extends Component {

    constructor(props){
        super(props)

        this.state={
            title:'React News App',
            keywords: 'User Text Here'
        }
    }

    inputChanges(event){
        console.log(event.target.value)
        this.setState({keywords:event.target.value ? event.target.value:'User Text Here'})
        this.props.newsSearch(event.target.value)
    }

    render(){
        return(
            <header>
                <div className="logo">
                    <h1 onClick={() => console.log('Clicked')}>
                        {this.state.title}
                    </h1>
                    <center>
                        <input type="text"
                        placeholder="Search Value..."
                        onChange={this.inputChanges.bind(this)}/>
                        <p>{this.state.keywords}</p>
                    </center>
                    
                </div>
            </header>
        )
    }
}

export default Header;
