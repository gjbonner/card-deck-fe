import React from 'react'
import Card from '../components/Card'
import {drawFive, setSearchVal} from '../actions'
import { connect } from 'react-redux'
import { Input, Container, Form } from 'semantic-ui-react'

import '../css/CardContainer.css'

const CardContainer = (props) => {
const handleClick = () =>{
    if(props.decks.includes(parseInt(props.searchVal))){
      props.drawFive(props.searchVal)
    } else {
      alert('deck doesnt exist!')
    }
  }

  const deckDropDown = () => {
    const options = []
    props.decks.forEach(deck => options.push({key: deck, text: deck.toString(), value: deck}))
    return <Form.Select fluid label='Select Deck ID' options={options} placeholder='Deck' onChange={props.setSearchVal} />
  }

  return(
    <div>
        <Form>
          <Form.Group>
            {deckDropDown()}
          </Form.Group>
          <Form.Button onClick={handleClick}>Draw 5 Cards</Form.Button>

        </Form>
        <Container id='card-container'>
          {!props.loading ? props.cards.map(card => <Card card={card} key={card.id} />) : <div></div>}
        </Container>
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
