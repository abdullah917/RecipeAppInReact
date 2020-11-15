import React from 'react';

import {Link, NavLink, withRouter} from 'react-router-dom';

const Navbar = () => {
    return (

        <nav className="nav-wrapper orange darken-3">
            <div className="container">
             <h4 className="brand-logo">Recipes Guide</h4>
             <ul className="right">
                 <li><Link to="/">Home</Link></li>
                 <li><NavLink to="/about">About</NavLink></li>
                 <li><NavLink to="/contact">Contact</NavLink></li>
             </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar);