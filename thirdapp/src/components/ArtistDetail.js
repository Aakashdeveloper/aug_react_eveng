import React, {Component} from 'react';
import Header from './Header';
import  AlbumList from './albums';

const URL = 'http://localhost:8900/artists'

class Artists extends Component {
    constructor(props){
        super(props)

        this.state = {
            details: ''
        }
    }

    componentDidMount(){
        fetch(`${URL}/${this.props.match.params.artistId}`,{
            method: 'GET'
        })
        .then((response) =>  response.json())
        .then((data) => {
            this.setState({
                details: data
            })
        })

    }

    render(){
        return(
            <div>
                <Header></Header>
                <div className="artist_bio">
                    <div className="artist_image">
                        <span style={{background:`url('/images/covers/${this.state.details.cover}.jpg')`}}></span>
                    </div>
                    <div className="bio">
                        <h3>{this.state.details.name}</h3>
                        <div className="bio_text">
                            {this.state.details.bio}
                        </div>
                    </div>
                    <AlbumList albumList={this.state.details.albums}></AlbumList>
                </div>

            </div>
        )
    }
}

export default Artists