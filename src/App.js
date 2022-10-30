import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import TictactoeBoard from './components/TictactoeBoard';
// import { connectToGameSvr } from './interface/GameSvrInterface'
import { getEmptyBoard } from './interface/GameSvrInterface';
import './App.css';
import DebugDisplay  from './components/debug/DebugDisplay';
import { SpaceStates, GameStates } from './constants';

const socket = io("http://127.0.0.1:5000")

function App() {
  // connectToGameSvr();
  const [statusMessage, setStatusMessage] = useState('')
  const [isConnected, setIsConnected] = useState(socket.connected);
  // const [thisPlayer, setThisPlayer] = useState(null);
  const [username, setUsername] = useState('');
  const [boardState, setBoardState] = useState(getEmptyBoard());
  const [xPlayer, setXPlayer] = useState(null);
  const [oPlayer, setOPlayer] = useState(null);
  const [turn, setTurn] = useState(null);
  const [mySide, setMySide] = useState(null);
  const [myId, setMyId] = useState(null);
  const [gameStatus, setGameStatus] = useState(null);

  console.log('xPlayer: ' + xPlayer);
  console.log('oPlayer: ' + oPlayer);

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
      joinRoom(); // do this here or somewhere else?
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    socket.on('pong', () => {
      console.log('received pong!')
    //   setLastPong(new Date().toISOString());
    });

    socket.on('update_msg', (message) => {
      console.log('received message update')
      console.log(message)
      setStatusMessage(message['msg'])
    })

    socket.on('ack_player_username', (message) => {
      console.log('rx set player')
      console.log(message);
      const id = message['id'];
      const side = message['side'];
      const thisUser = message['username'];
      console.log('side: ' + side);
      console.log('thisUser : ' + thisUser);
      // console.log('username: ' + username);
      // setMySide(side)
      // setMyId(id)
      // TODO: Use SpaceStates instead of 'X' and 'O'
      if (side === 'X') {
        console.log('setting xPlayer')
        setXPlayer(thisUser);
        if (thisUser === username) {
          setMySide('X');
          setMyId(id)
        }
      } else if (side === 'O') {
        console.log('setting oPlayer')
        setOPlayer(thisUser);
        if (thisUser === username) {
          setMySide('O');
          setMyId(id)
        }
      }
    })

    socket.on('board_update', (message) => {
        console.log('rx board update')
        console.log(message);
        setBoardState(message['board'])
    })

    // NOT USED?
    socket.on('change_turn', (message) => {
        console.log('rx change turn')
        console.log(message);
        setTurn(message['turn'])
    })

    socket.on('my_response', (message) => {
        console.log('rx my response')
        console.log(message);
    })

    socket.on('update_board', (message) => {
        console.log('rx update board')
        console.log(message);
        setBoardState(message['board'])
    })

    socket.on('update_game_status', (message) => {
        console.log('rx update game status')
        console.log(message);
        const gameStatus = message['status'];
        setGameStatus(message['status'])
        if (gameStatus === 'X_WON') {
            setStatusMessage('X won!')
        } else if (gameStatus === 'O_WON') {
            setStatusMessage('O won!')
        } else if (gameStatus === 'DRAW') {
            setStatusMessage('CATS Game!')
        } else if (gameStatus === 'X_TURN') {
            setStatusMessage('X\'s turn')
            setTurn('X')
        } else if (gameStatus === 'O_TURN') {
            setStatusMessage('O\'s turn')
            setTurn('O')
        }
    })
    // NO LONGER NEEDED
    socket.on('ack_start_game', (message) => {
      console.log('rx update game status')
      console.log(message);
      setGameStatus(message['starting_game'])
  })

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('pong');
      socket.off('update_msg');
      socket.off('ack_player_username');
      socket.off('board_update');
      socket.off('change_turn');
      socket.off('my_response');
      socket.off('update_board');
      socket.off('update_game_status');
      socket.off('ack_start_game');
    };
  }, [username]);

//   const sendPing = () => {
//     socket.emit('ping');
//   }
  const sendUsername = (username) => {
    console.log('sending username : ' + username)
    socket.emit('player_username', {'name': username})
  }

  const sendMove = (spacenum) => {
    console.log('sending move')
    socket.emit('player_move', {
      'side': mySide, 'spacenum': spacenum
    })
  }
  const joinRoom = () => {
    socket.emit('join', {'room': 'tictactoe'})
  }

  const startGame = () => {
    socket.emit('start_game', {'room': 'tictactoe'})
  }

  return (
    <>
      <div className="App">
        <header className="Centered-Board">
          <table
            style={{
              width: '100vw'
            }}
          >
            <tbody>
              <tr>
                <td
                  style={{
                    width: '15vw'
                  }}
                >
                  <DebugDisplay
                    statusMessage={statusMessage}
                    isConnected={isConnected}
                    mySide={mySide}
                    myId={myId}
                    xPlayer={xPlayer}
                    oPlayer={oPlayer}
                    turn={turn}
                    gameStatus={gameStatus}
                    username={username}
                    setUsername={setUsername}
                    sendUsername={sendUsername}
                    joinRoom={joinRoom}
                    startGame={startGame}
                  />
                </td>
                <td
                  style={{
                    width: '50vh'
                  }}
                >
                  <TictactoeBoard
                    sendMove={sendMove}
                    boardState={boardState}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          
          
          </header>
      </div>
    </>
    
  );
}

export default App;
