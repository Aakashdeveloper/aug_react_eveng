import React from 'react';
import ReactDOM from 'react-dom';

import Home from './component/home';

const App = () => {
    return(
        <div>
            <Home/>
            <h2>&copy;Nareshit</h2>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('aakash'))

