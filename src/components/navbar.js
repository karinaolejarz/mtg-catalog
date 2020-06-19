import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../photos/logo.png';

function Navbar() {
    return (
        <nav> 
        <div className="navbar"
        style={{
            width:"100%",
            height:"5em",
            paddingTop:"3em",
            marginBottom:"3em",
            display:"flex",

            

        }}>


        <ul
        style={{
            listStyle:"none",
            display:"flex",
            whiteSpace:"nowrap",
            paddingLeft:"20em"


            
            
        }}>
            <Link to="/"><img src={logo}></img> </Link>

            <Link to="/about" style={{textDecoration:"none"}}>  
            <li style={{marginTop:"0.7em", marginLeft:"7em", color:"#505050"}}>About</li> </Link>

            <Link to="/catalog" style={{textDecoration:"none"}}>  
            <li style={{marginTop:"0.7em", marginLeft:"7em", color:"#505050"}}>Catalog</li> </Link>
        </ul>
        </div>
        </nav>

    )
}

export default Navbar;