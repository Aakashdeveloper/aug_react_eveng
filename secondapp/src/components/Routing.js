import React, {Component} from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Home from './Home';
import Profile from './Profile';
import Posts from './Posts';
import PostDetails from './PostDetails';
import LifeCycle from './LifeCycle';
import HooksComp from './Hookscomponent';
import ContextComponent from './contextComponent'

class Routing extends Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <header>
                    <nav class="navbar navbar-inverse">
                        <div class="container-fluid">
                            <div class="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span> 
                            </button>
                            <a class="navbar-brand">NareshIT</a>
                            </div>
                            <div class="collapse navbar-collapse" id="myNavbar">
                            <ul class="nav navbar-nav">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/posts">Posts</Link></li> 
                                <li><Link to="/profile">Profile</Link></li> 
                                <li><Link to="/hooks">Hooks</Link></li> 
                                <li><Link to="/lifeCycle">LifeCycle</Link></li>
                                <li><Link to="/context">Context</Link></li> 
                            </ul>
                            </div>
                        </div>
                    </nav>
                    </header>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/posts" component={Posts}></Route>
                    <Route path="/posts/:mysub" component={PostDetails}></Route>
                    <Route path="/profile" component={Profile}></Route>
                    <Route path="/hooks" component={HooksComp}></Route>
                    <Route path="/context" component={ContextComponent}></Route>
                    <Route path="/lifeCycle" component={LifeCycle}></Route>
                    
                </div>
            </BrowserRouter>
        )
    }
}

export default Routing;

