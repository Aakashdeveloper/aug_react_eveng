import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <div>
                <Link to="/">Redux News</Link>
            </div>
        </header>

    )
}

export default Header