function Square(props) {
  return /*#__PURE__*/(
    React.createElement("button", {
      className: "square",
      onClick: props.onClick },
    props.value));


}

class Footer extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "footer" }, /*#__PURE__*/
      React.createElement("h3", null, "Developed by ", /*#__PURE__*/React.createElement("a", { href: "https://mayankkhare.cf" }, /*#__PURE__*/React.createElement("strong", null, "Mayank Khare")))));




  }}
;


class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true };

  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext });

  }

  renderSquare(i) {
    return /*#__PURE__*/(
      React.createElement(Square, { value: this.state.squares[i],
        onClick: () => this.handleClick(i) }));


  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h1", null, "Tic Tac Toe"), /*#__PURE__*/
      React.createElement("div", { className: "status" }, status), /*#__PURE__*/

      React.createElement("div", { className: "board-row" },
      this.renderSquare(0),
      this.renderSquare(1),
      this.renderSquare(2)), /*#__PURE__*/

      React.createElement("div", { className: "board-row" },
      this.renderSquare(3),
      this.renderSquare(4),
      this.renderSquare(5)), /*#__PURE__*/

      React.createElement("div", { className: "board-row" },
      this.renderSquare(6),
      this.renderSquare(7),
      this.renderSquare(8))));



  }}


class Game extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { className: "game" }, /*#__PURE__*/
      React.createElement("div", { className: "game-board" }, /*#__PURE__*/
      React.createElement(Board, null)), /*#__PURE__*/

      React.createElement("div", { className: "game-info" }, /*#__PURE__*/
      React.createElement("div", null), /*#__PURE__*/
      React.createElement("ol", null))), /*#__PURE__*/


      React.createElement(Footer, null)));


  }}


// ========================================

ReactDOM.render( /*#__PURE__*/
React.createElement(Game, null),
document.getElementById('root'));



function calculateWinner(squares) {
  const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}