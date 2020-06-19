import React from 'react';
import jace from '../photos/jace.png'

function About() {
    return (
        <div
        style={{
            display:"flex",
            justifyContent:"center",
        }}>
        <div
                        style={{
                    width:"60%",
                    display:"flex",
                    justifyContent:"center"
                }}
        >
                <p
                style={{
                    color:"#505050"
                }}>
                
                The MTG Card Catalog is the Magic Card Database. Search for the perfect addition to your deck. 
                Browse through cards from Magic's entire history. See cards from the most recent sets 
                and discover what players just like you are saying about them.
<br></br>
<br></br>
Each game of Magic represents a battle between wizards known as planeswalkers who cast spells, use artifacts, and summon creatures 
as depicted on individual cards in order to defeat their opponents, typically, but not always, by draining them of their 20 starting 
life points in the standard format. Although the original concept of the game drew heavily from the motifs of traditional fantasy 
role-playing games such as Dungeons & Dragons, the gameplay bears little similarity to pencil-and-paper adventure games, while simultaneously 
having substantially more cards and more complex rules than many other card games.
</p>
<p>
    <img src={jace}></img>
</p>
</div>
        </div>
    );
}

export default About;