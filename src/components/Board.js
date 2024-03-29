import React, { Component } from "react"
import Square from "./Square"
import "./Board.css"

export default class Board extends Component {
  constructor(props) { // 생성자를 추가하고 
    super(props);
    this.state = {
      squares: Array(9).fill(null) // 9개의 사각형에 해당하는 9개의 null 배열을 초기 state로 설정
    }
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({ squares: squares });
  }

  renderSquare(i) {
    return (
      <Square 
        value={this.state.squares[i]} 
        btnClick={() => this.handleClick(i)}
      />
    )
  }

  render() {
    return (
      <div>
        <div className='status'>Next Player: X, O</div>
        <div className='board-row'>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className='board-row'>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className='board-row'>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}
