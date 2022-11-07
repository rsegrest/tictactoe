import { useState, useEffect } from 'react';
import io from 'socket.io-client';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import "bootstrap/dist/css/bootstrap.min.css";
import GameNavbar from '../GameNavbar';
import MessageSlate from './components/MessageSlate';
import UserListDisplay from './components/UserListDisplay';
import GameListDisplay from './components/GamesListDisplay';
// import { getEmptyBoard } from './interface/GameSvrInterface';
// import './App.css';
// import './custom.scss';
// import '../../App.scss';
// import DebugDisplay  from './debug/DebugDisplay';
import "@fontsource/cabin/400.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import './chatroom.css';


// const socket = io("http://127.0.0.1:5000/chatroom")

  
function ChatRoomApp() {
  return (
    <>
      {/* <div style={{ display: 'flex', flexDirection: 'row' }}> */}
      <div style={{

      }}>
        {/* <GameNavbar
          gameName={'Chat Room'}
          roomName={'THE_LOBBY'}
        /> */}
        <Table>
          <tbody>
            <tr>
            <td>
                <UserListDisplay />
              </td>
              <td>
                <MessageSlate />
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
