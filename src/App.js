import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import P from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Sita'},
      {name: 'Rama'},
      {name: 'Swamy'},
      {name: 'Goli'}
    ]
  }

  switchNameHandler = (name) => {
    this.setState({
      persons: [
        {name: name},
        {name: 'Rama&&&&'},
        {name: 'Swamy%%%%'},
        {name: 'Goli####'},
      ],
      othersState: 'dummy data'
    })
  }

  nameChangedHandler = (e) => {
    this.setState({
      persons: [
        {name: 'Something else input'},
        {name: e.target.value},
        {name: 'Swamy%%%%'},
        {name: 'Goli####'},
      ],
      othersState: 'dummy data'
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I am React App</h1>
        <button onClick={this.switchNameHandler.bind(this, 'Sree Goli')}>Switch name</button>
        <P name={this.state.persons[0].name}/>
        <P name={this.state.persons[1].name} change={this.nameChangedHandler}/>
        <P name={this.state.persons[2].name} click={this.switchNameHandler.bind(this, 'Sree Goli')}/>
        <P name={this.state.persons[3].name}/>
      </div>
    );
    // return React.createElement('div', {className: 'App '}, React.createElement('h1', null, 'Hello, I am React App by rendering'))
  }
}

export default App;
