import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../photos/logo.png';
import '../App.css';

function Navbar() {
    return (
        <nav> 
        <div className="navbar"
        style={{width:"100%",height:"5em",paddingTop:"3em",marginBottom:"3em",display:"flex", justifyContent:"center"}}>


        <ul style={{listStyle:"none",display:"flex",width:"55%",}}>

            <Link to="/"><img src={logo} style={{display:"flex", paddingRight:"3em"}}></img> </Link>

            <Link to="/about" style={{textDecoration:"none"}}>  
            <li style={{marginTop:"0.7em",paddingLeft:"3em",paddingRight:"3em", color:"#505050"}}>About</li> </Link>

            <Link to="/catalog" style={{textDecoration:"none"}}>  
            <li style={{marginTop:"0.7em",paddingLeft:"3em",paddingRight:"3em", color:"#505050"}}>Catalog</li> </Link>
        </ul>
        </div>
        </nav>

    )
}

export default Navbar;