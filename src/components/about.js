import React from 'react';
import jace from '../photos/jace.png'
import '../App.css';
import Footer from './footer';

function About() {
    return (
        <div style={{display:"flex",justifyContent:"center",paddingTop:"6em"}}>
        <div className="about-section" style={{width:"50%",display:"flex",justifyContent:"center", alignItems:"center"}}>
                <p style={{color:"#505050"}}>
                <h3>What is The MTG Card Catalog?</h3>
                <br/>
                The MTG Card Catalog is the Magic Card Database. Search for the perfect addition to your deck. 
                Browse through cards from Magic's entire history. See cards from the most recent sets 
                and discover what players just like you are saying about them.
                <br/><br/>
                Find the inspiration for your next combo deck, discover cards you didn't even know existed, 
                be reminded of forgotten gems, or just browse through the thousands of cards.
</p>
<p><img src={jace}></img></p>

</div>
</div>
);
}

export default About;