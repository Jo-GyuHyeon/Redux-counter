import React, { Component } from 'react';
// import Counter from './Counter';
import Countercontainer from '../containers/CounterContainer'

class App extends Component {
  render() {
    return (
      <div>
        Counter
        <Countercontainer/>
      </div>
    );
  }
}

export default App;