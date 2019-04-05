import React from 'react'
import { connect } from 'react-redux'

import '../css/Card.css'
const Card = (props) => {
  const {card} = props

  //code to interpolate for imageurl
  //if cardcode is AD (ace of diamonds) use other source
  //new image for AD was added  
  const imgCode = card.code.slice(card.code.length-2, card.code.length)
  //if deck deleted is the one showing, remove
  return(
    <div>
      {props.decks.includes(card.deck_id)
        ? <div id='card'>
          <img src={imgCode === 'AD' ? 'https://deckofcardsapi.com/static/img/aceDiamonds.png' : `https://deckofcardsapi.com/static/img/${imgCode}.png`} alt='ah!' />
          </div>
        : <div></div>
      }
    </div>
  )
}

function mapStateToProps(state){
  return{
    cards: state.cards,
    decks: state.decks
  }
}


export default connect(mapStateToProps, null)(Card)
