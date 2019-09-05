import React, {Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Home from './home';
import Artists from './ArtistDetail';

class Routing extends Component {
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/artist/:artistId" component={Artists}/>
                </div>
            </BrowserRouter>
        )
    }
}


export default Routing;