const initialState = {
  cards: [],
  loading: false
}

const NEW_DECK = 'NEW_DECK'
const DRAW = 'DRAW'
const LOADING = 'LOADING'
const DONE_LOADING = 'DONE_LOADING'


export default function reducer(state = initialState, action){
        switch(action.type){
          case NEW_DECK:
            return {...state, cards: action.payload}
          case DRAW:
            return {...state, cards: action.payload}
          case LOADING:
            return {...state, loading: true}
          case DONE_LOADING:
            return {...state, loading: false}
          default:
            return state
        
    }
}
