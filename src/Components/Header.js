import React from 'react';

import About from './About'
import Contact from './Contact';
import App from '../App';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';



function Header (){
    return (
       
            
            
        
            <ul> 

            
                <Link to="/Components/Main">
                <li>Home</li>
                </Link>
                <Link to="/Components/Projects">
                <li>Projects</li>
                </Link>
                <li><a href="#">CV</a></li>
                <Link to="/Components/About">
                <li>About</li>
                </Link>
               
               <Link to="/Components/Contact">
                <li>Contact</li>
                </Link>
               
               
            </ul>
         
          
          
           
    )
}
export default Header;