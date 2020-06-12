import React, { Component } from 'react';
import axios from 'axios';
const mtg = require('mtgsdk');

class Card extends Component {
    constructor(props) {
      super(props)
      this.state = {
        cards: [],
        isLoaded: false,
      }
    }
    componentDidMount() {
    axios.get('https://api.magicthegathering.io/v1/cards')
    .then(response => {
      console.log(response)
      this.setState({
          isLoaded:true,
          cards: response.data ? response.data.cards : []
        })
    })
    .catch(error => {
      console.log(error)
    })
    }
  render() {

    const { isLoaded, cards } = this.state;

    if (!isLoaded) {
        return <div>Loading...</div>
    }

    return (
      <div>
  {
  cards.length ?
  cards.map(card => <div key={card.id}>

  <div
  style={{
    width:"auto",
  }}
  >
  
  <ul
  style={{
    display:"table",
    float: "left",
    listStyle:"none"

  }}
  >
  <li>
  <img src={card.imageUrl}/>
  </li>
  </ul>
  
  </div>


  </div>

  ) 
  : null
  }
      </div>
    )
  }
}
  export default Card;