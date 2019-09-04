import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';

import Home from './components/home';
import Artist from './components/artist';

ReactDOM.render(
    <BrowserRouter>
       <Route exact path="/" component={Home}/>
    </BrowserRouter>, document.getElementById('root'));

