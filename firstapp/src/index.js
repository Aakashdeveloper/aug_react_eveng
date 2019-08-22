import React from 'react';
import ReactDOM from 'react-dom';

import Header from './home';

const App = () => {
    return(
        <div>
            <h1>Hi to React</h1>
            <h2>&copy;Nareshit</h2>
            <Header/>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('aakash'))

