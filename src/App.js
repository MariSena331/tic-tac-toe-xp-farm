import './App.css';
import { React, useState } from 'react';

function App() {
  const [player1, setPlayer1] = useState({
    isCurrentPlayer: true,
    symbol: 'x',
  });
  const [player2, setPlayer2] = useState({
    isCurrentPlayer: false,
    symbol: 'o',
  });
  const [turn, setTurn] = useState(0);
  const [endGame, setEndGame] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState('x');

  const handleGameTurn = () => {
    if(turn === 8) {
      return setEndGame(true);
    }

    return setTurn(prevState => prevState + 1);
  }

  const handlePlayerClick = layer => {
    if (turn === 0 || turn === 2 || turn === 4 || turn === 6 || turn === 8) {
      setCurrentPlayer(player1.symbol);
    }
    if (turn === 1 || turn === 3 || turn === 5 || turn === 7) {
      setCurrentPlayer(player2.symbol);
    }

    handleGameTurn();
  }

  return (
    <div className="App">
      <header className="App-header">
        Tic tac toe
      </header>

      <div className="game-panel">
        <div className="players-panel">
          <p
            className={currentPlayer === player1.symbol ? 'current-player' : ''}
          >
              Player 1 {player1.symbol}
          </p>
          <p
            className={currentPlayer === player2.symbol ? 'current-player' : ''}
          >
            Player 2 {player2.symbol}
          </p>
        </div>
        <div className="grid-area">
          {
            !endGame ? (
              <>
                <div>
                  <div className="grid" onClick={() => handlePlayerClick(0)} />
                  <div className="grid" onClick={() => handlePlayerClick(1)} />
                  <div className="grid" onClick={() => handlePlayerClick(2)} />
                </div>
                <div>
                  <div className="grid" onClick={() => handlePlayerClick(3)} />
                  <div className="grid" onClick={() => handlePlayerClick(4)} />
                  <div className="grid" onClick={() => handlePlayerClick(5)} />
                </div>
                <div>
                  <div className="grid" onClick={() => handlePlayerClick(6)} />
                  <div className="grid" onClick={() => handlePlayerClick(7)} />
                  <div className="grid" onClick={() => handlePlayerClick(8)} />
                </div>
              </>
            ) : <p>End game</p>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
