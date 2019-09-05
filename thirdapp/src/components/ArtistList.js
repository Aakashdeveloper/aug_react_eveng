import React from  'react';
import { Link } from 'react-router-dom'

const ArtistList = (props) => {
    console.log(props)

    const listdata = ({artistData}) => {
        if(artistData){
            return artistData.map((item) => {
                const styles = {
                    background: `url('/images/covers/${item.cover}.jpg')`
                }
                return(
                  <Link to={`/artist/${item.id}`}
                  className="artist_item"
                    style={styles} >
                        <div>{item.name}</div>
                  </Link>
                )
            })
        } 
    }

    return(
        <div className="artist_list">
            <h4>All Artist List</h4>
            {listdata(props)}
        </div>
    )
}

export default ArtistList;