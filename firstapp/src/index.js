import React from 'react';
import ReactDOM from 'react-dom';

import Home from './component/home';
import Header from './component/header';

const App = () => {
    return(
        <div>
            <Header/>
            <Home/>
            <h2>&copy;Nareshit</h2>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('aakash'))

