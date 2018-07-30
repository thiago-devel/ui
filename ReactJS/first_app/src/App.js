import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/hello/hello';

class App extends Component {

  // App.js
  constructor(props) {
    super(props);

    this.state = {
      name: 'Thiago Santana'
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Hello name={this.state.name}/>

        <input type="text" placeholder="Type your name"
          onChange={this.handleChange} value={this.state.tempName} />
        <button onClick={this.handleClick}>
          Update Name
        </button>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }

  handleChange(e) {
    this.setState({
      tempName: e.target.value
    });
  }

  handleClick(e) {
    this.setState((prevState, props) => ({
      name: prevState.tempName,
      tempName: ''
    }));
  }

}

export default App;
