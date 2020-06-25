import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import jund from '../photos/jund.jpg';
import temur from '../photos/temur.jpg';
import bant from '../photos/bant.jpg';
import knight from '../photos/knight.jpg';
import ManaR from '../photos/Mana_R.png';
import ManaU from '../photos/Mana_U.png';
import ManaB from '../photos/Mana_B.png';
import ManaW from '../photos/Mana_W.png';
import ManaG from '../photos/Mana_G.png';
import '../App.css';

function Decks() {
return (


<div className="topdecks"
style={{padding:"5em"}}

> 

<h2 style={{color:"#505050"}}>Top 4 in Standard Metagame</h2>

<decks
style={{
paddingTop:"3em",
display:"flex",
justifyContent:"space-between",
alignItems:"center",
}}

>
<Card style={{ width: '18rem', borderRadius:"30px"}}>
  <Card.Img variant="top" src={temur} style={{height:"150px"}} />
  <Card.Body>
    <Card.Title>Temur Reclamation</Card.Title>
    <Card.Text>
    <img src={ManaR} style={{width:"30px", height:"30px"}}/>
    <img src={ManaG} style={{width:"30px", height:"30px"}}/>
    <img src={ManaU} style={{width:"30px", height:"30px"}}/>
    </Card.Text>
    <a href="https://www.mtggoldfish.com/archetype/wilderness-reclamation#paper" target="_blank" class="btn btn-secondary">Go to decklist</a>
  </Card.Body>
</Card>

<Card style={{ width: '18rem', borderRadius:"30px" }}>
  <Card.Img variant="top" src={jund} style={{height:"150px"}} />
  <Card.Body>
    <Card.Title>Jund Sacrifice</Card.Title>
    <Card.Text>
    <img src={ManaB} style={{width:"30px", height:"30px"}}/>
    <img src={ManaR} style={{width:"30px", height:"30px"}}/>
    <img src={ManaG} style={{width:"30px", height:"30px"}}/>
    </Card.Text>
    <a href="https://www.mtggoldfish.com/archetype/standard-jund-sacrifice-grn#paper" target="_blank" class="btn btn-secondary">Go to decklist</a>
  </Card.Body>
</Card>

<Card style={{ width: '18rem', borderRadius:"30px" }}>
  <Card.Img variant="top" src={bant} style={{height:"150px"}}/>
  <Card.Body>
    <Card.Title>Bant Ramp</Card.Title>
    <Card.Text>
    <img src={ManaU} style={{width:"30px", height:"30px"}}/>
    <img src={ManaW} style={{width:"30px", height:"30px"}}/>
    <img src={ManaG} style={{width:"30px", height:"30px"}}/>
    </Card.Text>
    <a href="https://www.mtggoldfish.com/archetype/bant-ramp#paper" target="_blank" class="btn btn-secondary">Go to decklist</a>
  </Card.Body>
</Card>

<Card style={{ width: '18rem', borderRadius:"30px" }}>
  <Card.Img variant="top" src={knight} style={{height:"150px"}}/>
  <Card.Body>
    <Card.Title>Rakdos Knights</Card.Title>
    <Card.Text>
    <img src={ManaB} style={{width:"30px", height:"30px"}}/>
    <img src={ManaR} style={{width:"30px", height:"30px"}}/>
    </Card.Text>
    <a href="https://www.mtggoldfish.com/archetype/rakdos-knights#paper" target="_blank" class="btn btn-secondary">Go to decklist</a>
  </Card.Body>
</Card>

</decks>
</div>

);
}

export default Decks;
