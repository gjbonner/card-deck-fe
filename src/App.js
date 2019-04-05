import React, { Component } from 'react';
import CardContainer from './containers/CardContainer'
import { connect } from 'react-redux'
import { getAllDecks } from './actions'
class App extends Component {

//remember to mention turn off addblock in README (Ace of Diamonds Photo)
  componentDidMount(){
    this.props.getAllDecks()
  }
  render() {
    return (
      <div>
        <CardContainer />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return{
    getAllDecks: () => dispatch(getAllDecks())
  }
}

export default connect(null, mapDispatchToProps)(App);
