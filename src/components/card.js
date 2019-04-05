import React from 'react'
import { connect } from 'react-redux'

import '../css/Card.css'
const Card = (props) => {
  const {card} = props

  const imgCode = card.code.slice(card.code.length-2, card.code.length)
  return(
    <div id='card'>
      <img src={imgCode === 'AD' ? 'https://deckofcardsapi.com/static/img/aceDiamonds.png' : `https://deckofcardsapi.com/static/img/${imgCode}.png`} alt='ah!' />
    </div>
  )
}

function mapStateToProps(state){
  return{
    cards: state.cards
  }
}


export default connect(mapStateToProps, null)(Card)
