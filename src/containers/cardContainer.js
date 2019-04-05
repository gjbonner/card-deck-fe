import React from 'react'
import Card from '../components/Card'
import {drawFive, setSearchVal, deleteDeck, newDeck} from '../actions'
import { connect } from 'react-redux'
import { Container, Form, Grid, Loader, Button } from 'semantic-ui-react'

import '../css/CardContainer.css'

const CardContainer = (props) => {
const handleSearch = () =>{
    if(props.decks.includes(parseInt(props.searchVal))){
      props.drawFive(props.searchVal)
    } else {
      alert('Please select a deck')
    }
  }

  const deckDropDown = () => {
    const options = []
    props.decks.forEach(deck => options.push({key: deck, text: deck.toString(), value: deck}))
    return <Form.Select fluid label='Select Deck ID' options={options} placeholder='Deck' onChange={props.setSearchVal} />
  }

  const handleDelete = () => {
    if(props.decks.includes(parseInt(props.searchVal))){
      return props.deleteDeck(props.searchVal)
    } else {
      alert('Please select a deck')
    }
  }

  return(
    <div>
        <Grid id='search-grid'>
          <Grid.Row centered columns={2}>
            <Grid.Column>
            <Form>
              <Form.Field>
                {deckDropDown()}
              </Form.Field>
              <Button.Group id='btn-group' widths='3'>
               <Button onClick={handleSearch}>Draw 5 Cards</Button>
               <Button.Or/>
               <Button onClick={props.newDeck}>New Deck</Button>
               <Button.Or/>
               <Button onClick={handleDelete}>Delete Deck</Button>
              </Button.Group>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Container id='card-container'>
          {!props.loading ? props.cards.map(card => <Card card={card} key={card.id} />) : <Loader active inline='centered' size='massive' />}
        </Container>
    </div>
  )
}

function mapDispatchToProps(dispatch){
  return{
    drawFive: (deck_id) => dispatch(drawFive(deck_id)),
    setSearchVal: (deck_id) => dispatch(setSearchVal(deck_id)),
    deleteDeck: (deck_id) => dispatch(deleteDeck(deck_id)),
    newDeck: () => dispatch(newDeck())
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
