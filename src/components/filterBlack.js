import React, { Component } from "react";
import ImageZoom from "react-medium-image-zoom";
import '../App.css';
import { Button, Modal, Card } from 'react-bootstrap';
import Popup from 'reactjs-popup';
import Dropdown from './dropdown';
import ScrollTop from './scrolltop';


function searchingFor(term) {
  return function(x){
    return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
  }
}

class FilterBlack extends Component {

  componentDidMount() {
    fetch('https://api.scryfall.com/cards/search?q=c%3Ablack+set=m21')

    .then(response => response.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          cards: json.data,
        })
    })
    .catch(error => {
      console.log(error)
    })
    }
    render() {

      const { isLoaded } = this.state;
  
      if (!isLoaded) {
          return <div style={{color:"#505050"}}>Loading cards...</div>
      }}
    


constructor(props){
  super(props);

    this.state = {
      cards: [],
      term: '',
    }

this.searchHandler = this.searchHandler.bind(this);

  }

  searchHandler(event){
    this.setState({ term: event.target.value});
  }

  

render() {
  const {term, cards} = this.state;
  return (
    <div className="smuteczek">


    <div className="Inputs" style={{width:"100%", justifyContent:"center", height:"5em", display:"flex", padding:"4em"}}>
          <input type="text" class="form-control"
              onChange={this.searchHandler}
              value={term}
              placeholder="Search by name"
              style={{width:"600px"}}
              /> <Dropdown />
         </div>


<div className="List" style={{display:"flex",flexWrap:"wrap", justifyContent:"center"}}>
  


      {
        
        cards.filter(searchingFor(term)).map ( card =>
            <div key={card.id}>
          
            




  <div style={{paddingRight:"3em", paddingLeft:"3em",marginTop:"3em"}}>
  <Popup
    trigger={<button className="button" class="btn btn-outline-light">
    
    <img src={card.image_uris.small} style={{borderRadius:"11px"}}/>


    </button>}
    modal
    closeOnDocumentClick
  >
  <div class="pop-up" style={{background:"white", width:"100%", display:"flex"}}>
    <span>
    <div class="popup-content" style={{display:"flex", background:"white", width:"100%", justifyContent:"center"}}> 
    <p>
    <img src={card.image_uris.normal} style={{borderRadius:"3em", padding:"2em", paddingLeft:"4em", height:"400px", width:"340px"}}/>
    </p>
      <div className="cardinfo" style={{display:"flex", justifyContent:"center"}}>

    <ul style={{listStyle:"none", paddingLeft:"4em", paddingRight:"4em", display:"flex", flexDirection:"column", justifyContent:"center"}}>
<p style={{display:"flex", flexDirection:"column"}}>
      <li><h3>{card.name}</h3></li>
      <br/>
      <br/>
      <li><b>Rarity:</b> {card.rarity}</li>
      <br/>
      <li><b>Set:</b> {card.set_name}</li>
      <br/>
      <li><b>Price trend:</b> ${card.prices.usd}</li>
      <br/>
      <li><a href={card.purchase_uris.cardmarket} target="_blank" class="btn btn-secondary">Buy on Cardmarket</a></li>
      <br/>
      <li><a href={card.purchase_uris.tcgplayer} target="_blank" class="btn btn-secondary">Buy on TCGPlayer</a></li>
    </p>
    </ul>
    </div>
    </div>
    </span>
    </div>
  </Popup>

  </div>






            <div>
            <p style={{paddingTop:"1em"}}>{card.name}</p>
            </div>
            </div>
            
          )
      }
    </div>
    <ScrollTop />
    </div>
    );
  }
}

export default FilterBlack;