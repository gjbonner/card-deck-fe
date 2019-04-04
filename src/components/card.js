import React from 'react'
import { connect } from 'react-redux'

import '../css/Card.css'
const Card = (props) => {
  const {card} = props
  //for some reason the img urls for 10 cards is just 0 and suit, not 10
  //created an ImgCode for this to make sure it works for all cards
  const imgCode = card.code.slice(card.code.length-2, card.code.length)
  return(
    <div id='card'>
      <img src={`https://deckofcardsapi.com/static/img/${imgCode}.png`} alt='ah!' />
    </div>
  )
}

function mapStateToProps(state){
  return{
    cards: state.cards
  }
}


export default connect(mapStateToProps, null)(Card)
