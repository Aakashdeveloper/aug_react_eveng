import React, {Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Home from '../containers/Home';
import Header from './Header';
import Footer from './Footer';
import NewsDetail from '../containers/NewsDetails';
import FormsContainer from '../containers/FormContainer';

class App extends Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/details/:id" component={NewsDetail}/>
                        <Route exact path="/form" component={FormsContainer}/>
                        <Footer/>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;