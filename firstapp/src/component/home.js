import React, {Component} from 'react';
import JSON from '../db.json';
import NewsList from './NewsList';
import Header from './header';

class Home extends Component {
    constructor(props){
        super(props)

        this.state = {
            news:JSON,
            filtered: JSON
        }
    }

    filterNews(keywords){
        // console.log("in home>>>",keywords )
        const output = this.state.news.filter((data) => {
            return (data.title.toLowerCase().indexOf(keywords.toLowerCase()) > -1 || data.feed.toLowerCase().indexOf(keywords.toLowerCase()) > -1) 
        })

        this.setState({filtered:output})
    }

    /*
    var ages = [32, 33, 16, 40];
    ages.filter((age) => { return age >= 18 });
    */

    render(){
        return(
            <div>
                <Header newsSearch={(userInupt) => this.filterNews(userInupt)}/>
                <hr/>
                <center>
                    <h2>Home</h2>
                </center>
                <NewsList newsData={this.state.filtered}/>
                <hr/>
            </div>  
        )
    }
}

export default Home;