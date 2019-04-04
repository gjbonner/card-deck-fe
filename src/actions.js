export function newDeck(){
  return dispatch => {
    dispatch({type: 'LOADING', payload: true})
    return fetch('http://localhost:3000/api/v1/decks/new')
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
    })
  }
}
