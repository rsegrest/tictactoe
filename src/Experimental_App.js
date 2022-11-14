import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import TictactoeBoard from './components/TictactoeBoard';
// const socket = io();
const socket = io("http://127.0.0.1:5000", {
        // reconnectionDelayMax: 10000,
        // // auth: {
        // //     token: "123"
        // // },
        // query: {
        //     "getboard": "true"
        // }
    });
function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastPong, setLastPong] = useState(null);
  const [username, setUsername] = useState('');

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    socket.on('pong', () => {
      // console.log('received pong!')
      setLastPong(new Date().toISOString());
    });

    socket.on('update_msg', (message) => {
      // console.log('received message update')
      // console.log(message)
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



  return (
    // <div>
    //   <p>Connected: { '' + isConnected }</p>
    //   <p>Last pong: { lastPong || '-' }</p>
    //   <input id="username_field" onChange={(e) => setUsername(e.target.value)} />
      
    //   {/* <button onClick={ sendPing }>Send ping</button> */}
    //   <button onClick={() => sendUsername(username)}>Send username</button>
      <TictactoeBoard />
    // </div>
  );
}

export default App;