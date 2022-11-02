import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import C4Board from './components/C4Board';
// import { getEmptyBoard } from './interface/GameSvrInterface';
import './styles/App.css';
import DebugDisplay  from './debug/DebugDisplay';
import {
  SpaceStates,
  GameStates,
  NUM_ROWS,
  NUM_COLS
} from './constants/index';

const socket = io("http://127.0.0.1:5000/connectfour")

  
function ConnectFourApp() {

  const getEmptyBoard = () => {
    let buildBoardState = [];
    for (let i = 0; i < NUM_ROWS; i++) {
      let rowArray = [];
      for (let j = 0; j < NUM_COLS; j++) {
        rowArray.push(SpaceStates.EMPTY);
      }
      buildBoardState.push(rowArray);
    }
    // setBoardState(buildBoardState);
    return buildBoardState;
  }
  const [statusMessage, setStatusMessage] = useState('')
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [username, setUsername] = useState('');
  const [boardState, setBoardState] = useState(getEmptyBoard());
  const [blackPlayer, setBlackPlayer] = useState(null);
  const [redPlayer, setRedPlayer] = useState(null);
  const [turn, setTurn] = useState(null);
  const [mySide, setMySide] = useState(null);
  const [myId, setMyId] = useState(null);
  const [gameStatus, setGameStatus] = useState(null);

  // console.log('xPlayer: ' + xPlayer);
  // console.log('oPlayer: ' + oPlayer);

  // TODO: MOVE THIS TO SEPARATE FILE
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
      console.log('rx set player - c4')
      console.log(message);
      const id = message['id'];
      const side = message['side'];
      const thisUser = message['username'];
      console.log('side: ' + side);
      console.log('thisUser : ' + thisUser);
      console.log('username: ' + username);
      if (side === 'B') {
        console.log('setting blackPlayer')
        setBlackPlayer(thisUser);
        if (thisUser === username) {
          console.log('setting mySide to Black')
          setMySide(SpaceStates.BLACK);
          // setMySide('B')
          setMyId(id)
        }
      } else if (side === 'R') {
        console.log('setting redPlayer')
        setRedPlayer(thisUser);
        if (thisUser === username) {
          console.log('setting mySide to Red')
          setMySide(SpaceStates.RED);
          // setMySide('R')
          setMyId(id)
        }
      }
      console.log('After setting player:')
      console.log('blackPlayer: ' + blackPlayer);
      console.log('redPlayer: ' + redPlayer);
      console.log('mySide: ' + mySide);
      console.log('myId: ' + myId);

    })

    socket.on('board_update', (message) => {
        console.log('rx board update')
        console.log(message);
        setBoardState(message['board'])
    })

    // NOT USED?
    // socket.on('change_turn', (message) => {
    //     console.log('rx change turn')
    //     console.log(message);
    //     setTurn(message['turn'])
    // })

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
        console.log('gamestatus: ' + gameStatus);
        setGameStatus(message['status'])
        if (gameStatus === GameStates.B_WON) {
            setStatusMessage('BLACK won!')
        } else if (gameStatus === GameStates.R_WON) {
            setStatusMessage('RED won!')
        } else if (gameStatus === GameStates.DRAW) {
            setStatusMessage('CATS Game!')
        } else if (gameStatus === GameStates.B_TURN) {
            setStatusMessage('BLACK\'s turn')
            setTurn(SpaceStates.B)
        } else if (gameStatus === GameStates.R_TURN) {
            setStatusMessage('RED\'s turn')
            setTurn(SpaceStates.R)
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
  }, [username, blackPlayer, redPlayer, mySide, myId, gameStatus]);
  

  //const sendPing = () => {
  //  socket.emit('ping');
  // }
  const sendUsername = (username) => {
    console.log('sending username : ' + username)
    socket.emit('player_username', {'name': username})
  }

  // space is [r,c]
  const sendMove = (column) => {
    console.log('sending move:')
    console.log('mySide: ' + mySide)
    console.log('column: ' + column)
    socket.emit('player_move', {
      'side': mySide, 'column': column
    })
  }

  const joinRoom = () => {
    socket.emit('join', {'room': 'connect4'})
  }

  const startGame = () => {
    socket.emit('start_game', {'room': 'connect4'})
  }
  // END MOVE THIS TO SEPARATE FILE

  // [
  //   [SpaceStates.EMPTY, SpaceStates.EMPTY, SpaceStates.EMPTY, SpaceStates.EMPTY, SpaceStates.EMPTY, SpaceStates.EMPTY, SpaceStates.EMPTY ],
  //   [SpaceStates.EMPTY, SpaceStates.EMPTY, SpaceStates.EMPTY, SpaceStates.EMPTY, SpaceStates.EMPTY, SpaceStates.EMPTY, SpaceStates.EMPTY ],
  //   [SpaceStates.EMPTY, SpaceStates.EMPTY, SpaceStates.EMPTY, SpaceStates.EMPTY, SpaceStates.EMPTY, SpaceStates.EMPTY, SpaceStates.EMPTY ],
  //   [SpaceStates.EMPTY, SpaceStates.EMPTY, SpaceStates.EMPTY, SpaceStates.EMPTY, SpaceStates.EMPTY, SpaceStates.EMPTY, SpaceStates.EMPTY ],
  //   [SpaceStates.EMPTY, SpaceStates.EMPTY, SpaceStates.EMPTY, SpaceStates.EMPTY, SpaceStates.EMPTY, SpaceStates.EMPTY, SpaceStates.EMPTY ],
  //   [SpaceStates.EMPTY, SpaceStates.EMPTY, SpaceStates.EMPTY, SpaceStates.EMPTY, SpaceStates.EMPTY, SpaceStates.EMPTY, SpaceStates.EMPTY ],
  //   [SpaceStates.EMPTY, SpaceStates.EMPTY, SpaceStates.EMPTY, SpaceStates.EMPTY, SpaceStates.EMPTY, SpaceStates.EMPTY, SpaceStates.EMPTY ],
  // ]
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
                    blackPlayer={blackPlayer}
                    redPlayer={redPlayer}
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
                  <C4Board
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

export default ConnectFourApp;
