import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
      super(props)
      this.state = {
        cards: [],
        isLoaded: false,
      }
    }
    componentDidMount() {
    fetch('https://api.scryfall.com/cards/search?q=cmc%3D3')

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

    const { isLoaded, cards } = this.state;

    if (!isLoaded) {
        return <div style={{color:"#505050"}}>Loading cards...</div>
    }

    return (
      <div
 style={{
    display:"flex",
    flexDirection:"row",
    flexWrap:"wrap",
  }}
      >
  {
 
  cards.map(card =>

  
  <ul key={card.id}
  style={{
    listStyle:"none",
    width:"20%",
    margin:"0",
    padding:"0",
    marginTop:"2em",
    color:"#505050"
  }}
  >
  <li
  style={{
    padding:"0",
    marginTop:"1em",

  }}
  >
  <img src={card.image_uris.small}
  style={{
    border:"solid",
    borderRadius:"10px"
  }}
  />
  </li>
  <li>
    <p>
      {card.name}
    </p>
  </li>
  </ul>
  ) 
  }
      </div>
    )
  }
}
  export default Card;