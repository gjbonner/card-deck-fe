import React from 'react'
import Card from '../components/Card'
import {drawFive, setSearchVal} from '../actions'
import { connect } from 'react-redux'
import '../css/CardContainer.css'

const CardContainer = (props) => {
const handleClick = () =>{
    props.drawFive(props.searchVal)
  }
  return(
    <div>
      <input onChange={props.setSearchVal}/>
      <button onClick={handleClick}>get cards</button>
        <div id='card-container'>
          {!props.loading ? props.cards.map(card => <Card card={card} key={card.id} />) : <div></div>}
        </div>
    </div>
  )
}

function mapDispatchToProps(dispatch){
  return{
    drawFive: (deck_id) => dispatch(drawFive(deck_id)),
    setSearchVal: (deck_id) => dispatch(setSearchVal(deck_id))
  }
}

function mapStateToProps(state){
  return{
    cards: state.cards,
    loading: state.loading,
    decks: state.decks,
    searchVal: state.searchVal
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer)
