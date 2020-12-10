import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {

      render() {
        return (
          <div>
        <center><h1>Tic Tac Toe</h1></center>
        <center><Board /></center>
      </div>
    );
  }
}

class Board extends Component{
  constructor(){
    super();
    this.state = {
      gameBoard: [
        ['-', '-', '-'],
        ['-', '-', '-'],
        ['-', '-', '-']
      ],
      xorO: ['O', 'X'],
      playIndex: '-'
    }
    // let array = this.state.gameBoard
    // console.log(array)
    this.toggleClick = this.toggleClick.bind(this);
  }
  
  toggleClick(row, button){
    console.log('I was clicked!!')
    const eachRows = this.state.gameBoard
    let playIndex = this.state.playIndex
    const xOHolder = this.state.xorO
    let randomize = Math.floor(Math.random() * xOHolder.length)
    //Declare a variable nameY= 'Y'
    
    if(playIndex === '-'){
      let firstVal = xOHolder[randomize]
      eachRows[row][button] =  firstVal
      this.setState({playIndex: firstVal})
    }
    if(playIndex === 'X'){
      eachRows[row][button] = 'O'
      this.setState({playIndex: 'O'})
    }
    if(playIndex === 'O'){
      eachRows[row][button] = 'X'
      this.setState({playIndex: 'X'})
    }
    if(eachRows[0][0] === 'X' && eachRows[1][1] === 'X' && eachRows[2][2] === 'X'){
      setTimeout(() => alert('You win!!!'), 1)
      window.location.reload()
    }
    if(eachRows[0][2] === 'X' && eachRows[1][1] === 'X' && eachRows[2][0] === 'X'){
      setTimeout(() => alert('You win!!!'), 1)
      window.location.reload()
    }
    if(eachRows[0][0] === 'X' && eachRows[1][0] === 'X' && eachRows[2][0] === 'X'){
      setTimeout(() => alert('You win!!!'), 1)
      window.location.reload()
    }
    if(eachRows[0][2] === 'X' && eachRows[1][2] === 'X' && eachRows[2][2] === 'X'){
      setTimeout(() => alert('You win!!!'), 1)
      window.location.reload()
    }
    if(eachRows[0][1] === 'X' && eachRows[1][1] === 'X' && eachRows[2][1] === 'X'){
      setTimeout(() => alert('You win!!!'), 1)
      window.location.reload()
    }
    // =============
    if(eachRows[0][0] === 'O' && eachRows[1][1] === 'O' && eachRows[2][2] === 'O'){
        setTimeout(() => alert('You win!!!'), 1)
        window.location.reload()
    }
    if(eachRows[0][2] === 'O' && eachRows[1][1] === 'O' && eachRows[2][0] === 'O'){
        setTimeout(() => alert('You win!!!'), 1)
        window.location.reload()
    }
    if(eachRows[0][0] === 'O' && eachRows[1][0] === 'O' && eachRows[2][0] === 'O'){
        setTimeout(() => alert('You win!!!'), 1)
        window.location.reload()
    }
    if(eachRows[0][2] === 'O' && eachRows[1][2] === 'O' && eachRows[2][2] === 'O'){
        setTimeout(() => alert('You win!!!'), 1)
        window.location.reload()
    }
    if(eachRows[0][1] === 'O' && eachRows[1][1] === 'O' && eachRows[2][1] === 'O'){
        setTimeout(() => alert('You win!!!'), 1)
        window.location.reload()
    }

    if (!eachRows[0].includes('-') && !eachRows[1].includes('-') && !eachRows[2].includes('-')) {
      setTimeout(() => alert("New game on the way!!"), 1)
      window.location.reload()
    }
      
   
    
  }
  
  render() {
    const rows = [];
    for(let i = 0; i < 3; i++){
      rows.push(
        <Row 
        rowId={i}
        key={i}
        eachRowText={this.state.gameBoard[i]} //[[-,-,-], [-,-,-], [-,-,-]] --> access to each row
        toggleClick={this.toggleClick}
        />
        );
      }
      return <div>{rows}</div>
    }
}
  
class Row extends Component{
 

  // toggleClick(){
  //   console.log('I was clicked!!')
  //   //Declare a variable nameY= 'Y'
  //   if (this.state.trueFalse === true) {
  //     this.setState({trueFalse: false});
  //     this.setState({nameX: 'O'})
  //   }else {
  //     this.setState({trueFalse: true})
  //     this.setState({nameX: 'X'})
  //   }
  // }

  render() {
    const buttons = [];
    for(let i = 0; i < 3; i++){
      buttons.push(
        <Box
        text={this.props.eachRowText[i]} // [-, -, -] access to the ' - '
        boxId={i}
        rowId = {this.props.rowId}
        key={i}
        toggleClick={this.props.toggleClick}
        />
        );
      }
      return <div>{buttons}</div>
    }
}

// Create Box component and use render()
class Box extends Component {
  render() {
    return <button id='first-button' onClick={() => this.props.toggleClick(this.props.rowId, this.props.boxId)}> {this.props.text} </button>
  }

}
  // return <h1>{this.props.name}, marks the spot!</h1>;

render(<App />, document.querySelector('#root'));