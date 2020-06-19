import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import jund from '../photos/jund.jpg';
import temur from '../photos/temur.jpg';
import bant from '../photos/bant.jpg';
import chandraflame from '../photos/chandraflame.png';

function Decks() {
return (


<div
style={{padding:"5em"}}

> 

<h2 style={{color:"#505050"}}>Top 4 in Standard Metagame</h2>

<decks
style={{
paddingTop:"5em",
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
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <a href="https://www.mtggoldfish.com/archetype/wilderness-reclamation#paper" target="_blank" class="btn btn-secondary">Go to decklist</a>
  </Card.Body>
</Card>

<Card style={{ width: '18rem', borderRadius:"30px" }}>
  <Card.Img variant="top" src={jund} style={{height:"150px"}} />
  <Card.Body>
    <Card.Title>Jund Sacrifice</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <a href="https://www.mtggoldfish.com/archetype/standard-jund-sacrifice-grn#paper" target="_blank" class="btn btn-secondary">Go to decklist</a>
  </Card.Body>
</Card>

<Card style={{ width: '18rem', borderRadius:"30px" }}>
  <Card.Img variant="top" src={bant} style={{height:"150px"}}/>
  <Card.Body>
    <Card.Title>Bant Ramp</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <a href="https://www.mtggoldfish.com/archetype/bant-ramp#paper" target="_blank" class="btn btn-secondary">Go to decklist</a>
  </Card.Body>
</Card>

<Card style={{ width: '18rem', borderRadius:"30px"}}>
  <Card.Img variant="top" src={chandraflame} style={{height:"150px"}}/>
  <Card.Body>
    <Card.Title>Mono-Red Aggro</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <a href="https://www.mtggoldfish.com/archetype/mono-red-aggro#paper" target="_blank" class="btn btn-secondary">Go to decklist</a>
  </Card.Body>
</Card>

</decks>
</div>

);
}

export default Decks;
