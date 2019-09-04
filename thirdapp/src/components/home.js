import React, {Component} from 'react';
import Banner from './banner';
import ArtistList from './ArtistList';

const URL = 'http://localhost:8900/artists'

class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            artist:''
        }

    }

    componentDidMount(){
        fetch(URL,{
            method:'GET'
        })
        .then((res) => res.json())
        .then((data)=> {
            this.setState({
                artist:data
            })
        })
    }

    render(){
        return(
            <div>
                <Banner></Banner>
                <ArtistList artistData={this.state.artist}/> 
            </div>
        )
    }
}

export default Home;