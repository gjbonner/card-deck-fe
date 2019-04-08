import swal from 'sweetalert'

export function newDeck(){
  return dispatch => {
    dispatch({type: 'LOADING', payload: true})
    return fetch('http://localhost:3000/api/v1/decks/new')
    .then(r => r.json())
    .then(json => {
      dispatch({type: 'NEW_DECK', payload: json})
      dispatch({type: 'DONE_LOADING', payload: false})
    }).then(() => dispatch(getAllDecks()))
    .catch(error => {
      if(error){
        swal('Oops!', "We couldn't create a new deck.", "warning")
        dispatch({type: 'DONE_LOADING', payload: false})
      }
    })
  }
}

export function getAllDecks(){
  return dispatch => {
    return fetch('http://localhost:3000/api/v1/decks')
    .then(r => r.json())
    .then(json => {
      dispatch({type: 'GET_DECKS', payload: json})
    })
  }
}

export function deleteDeck(deck_id){
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/decks/${deck_id}`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(deck_id)
    }).then(function(response){
      if(response.ok){
        swal('Deck Deleted','','success')
      }
    }).then(() =>dispatch(getAllDecks()))
    .catch(error => {
      if(error){
        swal('Oops!', "We couldn't delete your deck", 'warning')
      }
    })
  }
}

export function drawFive(deck_id){
  return dispatch => {
    dispatch({type: 'LOADING', payload: true})
    return fetch(`http://localhost:3000/api/v1/decks/${deck_id}/draw`)
    .then(r => r.json())
    .then(json => {
      dispatch({type: 'DRAW', payload: json})
      dispatch({type: 'DONE_LOADING', payload: false})
    }).catch(error => {
      if(error){
        swal('Oops!', "We couldn't draw five cards at this time", 'warning')
        dispatch({type: 'DONE_LOADING', payload: false})
      }
    })
  }
}

export function setSearchVal(e){
  return dispatch => {
    dispatch({type: 'SET_SEARCH_VAL', payload: e.target.childNodes[0].innerHTML})
  }
}
