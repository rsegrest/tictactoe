import Table from 'react-bootstrap/Table';

import "bootstrap/dist/css/bootstrap.min.css";

import GameNavbar from '../GameNavbar';
import MessageSlate from './components/MessageSlate';
import UserListDisplay from './components/UserListDisplay';
import GameListDisplay from './components/GamesListDisplay';

import "@fontsource/cabin/400.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../chatroom.css';

// import { useState, useEffect } from 'react';

// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// import { getEmptyBoard } from './interface/GameSvrInterface';
// import './App.css';
// import './custom.scss';
// import '../../App.scss';
// import DebugDisplay  from './debug/DebugDisplay';

// const socket = io("http://127.0.0.1:5000/chatroom")

  
function ChatRoomApp({
  roomMessages,
  roomUsers,
}) {
  console.log('roomUsers', roomUsers);
  return (
    <>
      {/* <div style={{ display: 'flex', flexDirection: 'row' }}> */}
      <div style={{

      }}>
        <GameNavbar
          gameName={'Chat Room'}
          roomName={'THE_LOBBY'}
        />
        <Table>
          <tbody>
            <tr>
              <td>
                <UserListDisplay
                  roomUsers={roomUsers}
                />
              </td>
              <td>
                <MessageSlate
                  messages={roomMessages}
                />
              </td>
              <td>
                <GameListDisplay />
              </td>
            </tr>
          </tbody>
        </Table>
        
        
        
      </div>
      {/* <Container className="chatroom-app">
        
      </Container> */}
    </>
  )
}

export default ChatRoomApp;
