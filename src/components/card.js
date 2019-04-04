import React from 'react'
import '../css/Card.css'
const Card = () => {
  return(
    <div id='card'>

    </div>
  )
}

function mapStateToProps(state){
  return{
    cards: state.cards
  }
}


export default Card
