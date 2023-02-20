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
  const [currentPlayer, setCurrentPlayer] = useState('');
  const [selectedLayer, setSelectedLayer] = useState();

  const handleGameTurn = (layer) => {
    if (turn === 0 || turn === 2 || turn === 4 || turn === 6 || turn === 8) {
      setCurrentPlayer(player1.symbol);
    }
    if (turn === 1 || turn === 3 || turn === 5 || turn === 7) {
      setCurrentPlayer(player2.symbol);
    }
    setSelectedLayer(layer);
    setTurn(prevState => prevState + 1);
    if(turn === 8) {
      setEndGame(true);
    }
    return;
  }

  return (
    <div className="App">
      <header className="App-header">
        Tic tac toe
      </header>

      <div className="game-panel">
        <div className="players-panel">
          <p className={currentPlayer === player1.symbol ? 'current-player' : ''}>Player 1 {player1.symbol}</p>
          <p className={currentPlayer === player2.symbol ? 'current-player' : ''}>Player 2 {player2.symbol}</p>
        </div>
        <div className="grid-area">
          {
            !endGame ? (
              <>
                <div>
                  <div id="0" className="grid" onClick={() => handleGameTurn(0)}>
                    {currentPlayer && selectedLayer === 0 && currentPlayer}
                  </div>
                  <div className="grid" onClick={() => handleGameTurn(1)}>
                    {currentPlayer && selectedLayer === 1 && currentPlayer}
                  </div>
                  <div className="grid" onClick={() => handleGameTurn(2)}>
                    {currentPlayer && selectedLayer === 2 && currentPlayer}
                  </div>
                </div>
                <div>
                  <div className="grid" onClick={() => handleGameTurn(3)}>
                    {currentPlayer && selectedLayer === 3 && currentPlayer}
                  </div>
                  <div className="grid" onClick={() => handleGameTurn(4)}>
                    {currentPlayer && selectedLayer === 4 && currentPlayer}
                  </div>
                  <div className="grid" onClick={() => handleGameTurn(5)}>
                    {currentPlayer && selectedLayer === 5 && currentPlayer}
                  </div>
                </div>
                <div>
                  <div className="grid" onClick={() => handleGameTurn(6)}>
                    {currentPlayer && selectedLayer === 6 && currentPlayer}
                  </div>
                  <div className="grid" onClick={() => handleGameTurn(7)}>
                    {currentPlayer && selectedLayer === 7 && currentPlayer}
                  </div>
                  <div className="grid" onClick={() => handleGameTurn(8)}>
                    {currentPlayer && selectedLayer === 8 && currentPlayer}
                  </div>
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
