import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props)

    const cards = [
      {id: 0, title: "hey"},
      {id: 1, title: "hey2"},

      {}
    ]

    this.state = {rows: [
      <p key="1">row1</p>
      <p key="2">row2</p>
      <p key="3">row3</p>
    ]}

    var cardRows = []
    cards.forEach((card) => {
    console.log(card.name)
    cardRows.push(<p>Card name: {card.name}</p>)
    })

    this.state = {rows: cardRows}
  }

  render() {
    return (
      <div className="Search">
        <tbody>

        </tbody>
      </div>
    )
  }
}



export default Search;