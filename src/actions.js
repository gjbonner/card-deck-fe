export function newDeck(){
  return dispatch => {
    dispatch({type: 'LOADING', payload: true})
    return fetch('http://localhost:3000/api/v1/decks/new')
  }
}

export function getAllDecks(){
  return dispatch => {
    return fetch('http://localhost:3000/api/v1/decks')
    .then(r => r.json())
    .then(json => {
      dispatch({type: 'GET_DECKS', payload: json})
    }).catch(error => console.log(error))
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
    }).catch(error => console.log(error))
  }
}

export function setSearchVal(e){
  return dispatch => {
    dispatch({type: 'SET_SEARCH_VAL', payload: e.target.childNodes[0].innerHTML})
  }
}
