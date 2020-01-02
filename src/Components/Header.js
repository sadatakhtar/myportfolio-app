import React from 'react';

import About from './About'
import Contact from './Contact';
import App from '../App';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';



function Header (){
    return (
       
            
            
        
            <ul> 

            
                
                <li><a href="#">Home</a></li>
                

                <Link to="/Components/Projects">
                <li>Projects</li>
                </Link>

                <Link to="/Components/Cv">
                <li>CV</li>
                </Link>

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