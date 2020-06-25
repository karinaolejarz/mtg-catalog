import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import pass from '../photos/pass.png';
import mtgcards from '../photos/mtgcards.jpg';
import hands from '../photos/hands.jpg';
import '../App.css';

function News() {
return (


<div className="topdecks"
style={{padding:"5em"}}

> 

<h2 style={{color:"#505050"}}>News</h2>

<decks
style={{
paddingTop:"3em",
display:"flex",
justifyContent:"space-between",
alignItems:"center",
}}

>
<Card style={{ width:"27em", borderRadius:"30px", height:"30em"}}>
  <Card.Img variant="top" src={pass} style={{height:"250px"}} />
  <Card.Body>
    <Card.Title>CORE SET 2021 MASTERY PASS</Card.Title>
    <Card.Text>
    This Set Mastery Pass is packed with rewards to prepare you for rotation.
    Collect all the dog pets and form your pack!
    </Card.Text>
    <a href="https://dotesports.com/mtg/news/heres-everything-in-mtg-arena-core-set-2021-mastery-pass" target="_blank" 
    class="btn btn-secondary" style={{marginTop:"1.55em"}}>Learn more</a>
  </Card.Body>
</Card>

<Card style={{ width:"27em", borderRadius:"30px", height:"30em" }}>
  <Card.Img variant="top" src={hands} style={{height:"250px"}}/>
  <Card.Body>
    <Card.Title>PLAYERS TOUR FINALS</Card.Title>
    <Card.Text>
    $250,000 in prizes. Top players from around the world. It's all been leading to this. 
    Watch the Players Tour Finals live at twitch.tv/magic starting July 25, 2020 at 8 AM PDT!
    </Card.Text>
    <a href="https://magic.gg/events/players-tour-finals-online-july-2020" target="_blank" class="btn btn-secondary">Learn more</a>
  </Card.Body>
</Card>

<Card style={{ width:"27em", borderRadius:"30px", height:"30em" }}>
  <Card.Img variant="top" src={mtgcards} style={{height:"250px"}}/>
  <Card.Body>
    <Card.Title>BANNED CARDS LIST UPDATED</Card.Title>
    <Card.Text>
    If a card appears on the banned list for your chosen format, then you may not include that card in your deck or sideboard. 
    Doing so makes your deck illegal to play in any sanctioned tournaments for that format.
    </Card.Text>
    <a href="https://magic.wizards.com/en/game-info/gameplay/rules-and-formats/banned-restricted" target="_blank" class="btn btn-secondary">Learn more</a>
  </Card.Body>
</Card>

</decks>
</div>

);
}

export default News;
