import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import TictactoeBoard from './components/TictactoeBoard';
import { connectToGameSvr } from './interface/GameSvrInterface'
import './App.css';

const socket = io("http://127.0.0.1:5000")

function App() {
  // connectToGameSvr();
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastPong, setLastPong] = useState(null);
  const [username, setUsername] = useState('');
  const [statusMessage, setStatusMessage] = useState('')
  const [thisPlayer, setThisPlayer] = useState(null);

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    socket.on('pong', () => {
      console.log('received pong!')
      setLastPong(new Date().toISOString());
    });

    socket.on('update_msg', (message) => {
      console.log('received message update')
      console.log(message)
      setStatusMessage(message['msg'])
    })

    socket.on('set_player', (message) => {
      console.log('rx set player')
      console.log(message);
      setThisPlayer(message['side'])
    })

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('pong');
    };
  }, []);

  const sendPing = () => {
    socket.emit('ping');
  }
  const sendUsername = (username) => {
    socket.emit('set_name', {'name': username})
  }

  return (
    <>
      <p>Status Message: {''+ statusMessage}</p>
      <p>Connected: { '' + isConnected }</p>
      {/* <p>Last pong: { lastPong || '-' }</p> */}
      {!thisPlayer ? (
        <>
          <input id="username_field" onChange={(e) => setUsername(e.target.value)} />
          <button onClick={() => sendUsername(username)}>Send username</button>
        </>
      )
        : null}
      
      
      <TictactoeBoard />
    </>
    
  );
}

export default App;
