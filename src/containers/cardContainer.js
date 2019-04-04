import React from 'react'
import Card from '../components/Card'
import {drawFive} from '../actions'
import { connect } from 'react-redux'
const CardContainer = (props) => {
const handleClick = () => {
    props.drawFive(9)
  }
  return(
    <div>
    <button onClick={handleClick}>get cards</button>
    <h1>Im the Card Container</h1>
    <Card />
    </div>
  )
}

function mapDispatchToProps(dispatch){
  return{
    drawFive: (deck_id) => dispatch(drawFive(deck_id))
  }
}

function mapStateToProps(state){
  return{
    cards: state.cards,
    loading: state.loading
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer)
