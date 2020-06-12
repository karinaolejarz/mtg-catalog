import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';

function Navbar() {
    return (
        <nav className="navbar"
        style={{
            width:"auto",
            height:"5em",
            paddingTop:"1em",
            marginBottom:"5em",
            display:"flex",
            //background:"lightBlue",

            

        }}>


        <ul
        style={{
            listStyle:"none",
            display:"flex",
            whiteSpace:"nowrap",


            
            
        }}>
            <Link to="/"><img src={logo}></img> </Link>

            <Link to="/about" style={{textDecoration:"none"}}>  
            <li style={{marginTop:"0.7em", marginLeft:"7em", color:"grey"}}>About</li> </Link>

            <Link to="/catalog" style={{textDecoration:"none"}}>  
            <li style={{marginTop:"0.7em", marginLeft:"7em", color:"grey"}}>Catalog</li> </Link>
        </ul>
        </nav>

    )
}

export default Navbar;