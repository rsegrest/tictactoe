import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "bootstrap/dist/css/bootstrap.min.css";

import MessageSlate from './MessageSlate';
import UserListDisplay from './UserListDisplay';
// import { getEmptyBoard } from './interface/GameSvrInterface';
// import './App.css';
// import './custom.scss';
// import '../../App.scss';
import DebugDisplay  from './debug/DebugDisplay';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


// const socket = io("http://127.0.0.1:5000/chatroom")

  
function ChatRoomApp() {
  return (
      <MessageSlate />
  )
}

export default ChatRoomApp;
