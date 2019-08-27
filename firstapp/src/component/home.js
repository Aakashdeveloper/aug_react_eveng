import React, {Component} from 'react';
import JSON from '../db.json';
import NewsList from './NewsList';

class Home extends Component {
    constructor(props){
        super(props)

        this.state = {
            news:JSON
        }
    }

    render(){
        return(
            <div>
                <hr/>
                <center>
                    <h2>Home</h2>
                </center>
                <NewsList newsData={this.state.news}/>
                <hr/>
            </div>  
        )
    }
}

export default Home;