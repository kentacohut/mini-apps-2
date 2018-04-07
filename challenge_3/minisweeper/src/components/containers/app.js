import React, { Component } from 'react';
import Board from '../presentationals/board';
import ModeButtons from '../presentationals/modeButtons';
import EasyBoard from '../../actions/EasyBoard';
import logo from '../../assets/mine.png';
import flag from '../../assets/flag.svg';
import '../../styles/app.css';

class App extends Component {
  componentWillMount(){
    this.props.store.subscribe(this.forceUpdate.bind(this));
  }

  dispatchAction (input) {
    console.log(input)
    switch (input) {
      case "EASY":
        this.props.store.dispatch(EasyBoard());
        break;
      default:
        break;
    }
  }

  render() {
    const { board } = this.props.store.getState();
    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <h1 className="App-title">Minesweeper</h1>
        </header>
        <div className="Game">
          <img src={ flag } className="flag" alt="flag" />
         
          <ModeButtons 
            dispatchAction = {this.dispatchAction.bind(this)}
          />
        </div>
      </div>
    );
  }
}

// <Board board={ board } />

export default App;
