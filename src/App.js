import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import TictactoeBoard from './components/TictactoeBoard';
// import { connectToGameSvr } from './interface/GameSvrInterface'
import { getEmptyBoard } from './interface/GameSvrInterface';
import './App.css';
import { SpaceStates } from './constants';

const socket = io("http://127.0.0.1:5000")

function App() {
  // connectToGameSvr();
  const [statusMessage, setStatusMessage] = useState('')
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [thisPlayer, setThisPlayer] = useState(null);
  const [username, setUsername] = useState('');
  const [boardState, setBoardState] = useState(getEmptyBoard());
  const [xPlayer, setXPlayer] = useState(null);
  const [oPlayer, setOPlayer] = useState(null);
  const [turn, setTurn] = useState(null);


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

    socket.on('set_player', (message) => {
      console.log('rx set player')
      console.log(message);
      const side = message['side'];
      setThisPlayer(side)
      if (side === SpaceStates.X) {
        setXPlayer(username);
      } else if (side === SpaceStates.O) {
        setOPlayer(username);
      }
      
    })

    socket.on('board_update', (message) => {
        console.log('rx board update')
        console.log(message);
        setBoardState(message['board'])
    })

    socket.on('change_turn', (message) => {
        console.log('rx change turn')
        console.log(message);
        setTurn(message['turn'])
    })

    socket.on('my_response', (message) => {
        console.log('rx my response')
        console.log(message);
    })

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('pong');
      socket.off('update_msg');
      socket.off('set_player');
      socket.off('board_update');
      socket.off('change_turn');
      socket.off('my_response');
    };
  }, []);

//   const sendPing = () => {
//     socket.emit('ping');
//   }
  const sendUsername = (username) => {
    socket.emit('set_name', {'name': username})
  }

  const sendMove = (move) => {
    console.log('sending move')
    socket.emit('move', {'move': move})
  }
  const joinRoom = () => {
    socket.emit('join', {'room': 'tictactoe'})
  }

  return (
    <>
      <p>Status Message: {''+ statusMessage}</p>
      <p>Connected: { '' + isConnected }</p>
      <p>This Player: { '' + thisPlayer }</p>
      <p>X Player: { '' + xPlayer }</p>
      <p>O Player: { '' + oPlayer }</p>
      <p>Current turn: { '' + turn }</p>
      {/* <p>Last pong: { lastPong || '-' }</p> */}
      {!thisPlayer ? (
        <>
          <input id="username_field" onChange={(e) => setUsername(e.target.value)} />
          <button onClick={() => sendUsername(username)}>Send username</button><br />
          <button onClick={() => joinRoom()}>Join room</button>
        </>
      )
        : null}
      <TictactoeBoard
        sendMove={sendMove}
        boardState={boardState}
      />
    </>
    
  );
}

export default App;
