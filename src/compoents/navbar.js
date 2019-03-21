import React from 'react'
import {NavLink} from 'react-router-dom';

export default function Navbar() {
  return (
      
    <nav  >
    <div className="nav-wrapper blue darken-1">
    <div className="container">
        <ul className="">
            <li><NavLink to="/">Questions</NavLink></li>
            <li><NavLink to="/responses">Responses</NavLink></li>
        </ul>   
    </div>
    </div>
    </nav>
    
  )
}
