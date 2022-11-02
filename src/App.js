import { useState, useEffect } from 'react';
// import io from 'socket.io-client';
// import Connect4App from './components/connect4/Connect4App';
import './App.css';
import ChatRoomApp from './components/chatroom/ChatRoomApp';
// import DebugDisplay  from './components/connect4/DebugDisplay';
// import { SpaceStates, GameStates } from './components/tictactoe/constants';

// const socket = io("http://127.0.0.1:5000")

function App() {
  return (
    // <Connect4App />
    <ChatRoomApp />
  )
}

export default App;
