import { Link } from "react-router-dom";
import React, { useState } from 'react';
import {menuItems} from  './MenuItems'
import './NavigationStyles.css'
const Navigation = () => {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked);
    }
    return ( 
        <nav className='NavbarItems'>
            <Link to='/' className='Navbar-logo'>
            <h1>NoteStack</h1>
            </Link>

            <div className='menu-icons' onClick={handleClick}>
                <i className={clicked ? "fas fa-times" : "fas fa-bars"} ></i>
            </div>


            <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                {menuItems.map((item, index)=>{
                     return(
                        <li key={index}>
                            <Link to={item.url} className={item.cName}>
                                <i className={item.icon}></i>{item.title}
                            </Link>
                        </li>
                     )
                })}
            </ul>
        </nav>
     );
}
 
export default Navigation;