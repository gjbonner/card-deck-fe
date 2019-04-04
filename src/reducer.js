const initialState = {
  cards: [],
  loading: false,
  decks: [],
  searchVal: ''
}

const NEW_DECK = 'NEW_DECK'
const DRAW = 'DRAW'
const LOADING = 'LOADING'
const DONE_LOADING = 'DONE_LOADING'
const GET_DECKS = 'GET_DECKS'
const SET_SEARCH_VAL = 'SET_SEARCH_VAL'

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
          case GET_DECKS:
            return {...state, decks: action.payload}
          case SET_SEARCH_VAL:
            return {...state, searchVal: action.payload}
          default:
            return state

    }
}
