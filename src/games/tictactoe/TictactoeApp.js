import { useState } from 'react';

import io from 'socket.io-client';

import MessageListeners from './interface/MessageListeners';
import SendMessages from './interface/SendMessages';

import TictactoeNavbar from '../../shared/GameNavbar';
import TictactoeBoard from './components/TictactoeBoard';

import { getEmptyBoard } from '../interface/GameSvrInterface';
// import './styles/App.css';
import DebugDisplay  from './debug/DebugDisplay';


const socket = io("http://127.0.0.1:5000", {
  withCredentials: true,
})
// const socket = null;

function App() {
  const [statusMessage, setStatusMessage] = useState('')
  const [isConnected, setIsConnected] = useState(socket.connected);
  // if (socket) {
  //   setIsConnected(socket.connected);
  // }
  const [username, setUsername] = useState('');
  const [boardState, setBoardState] = useState(getEmptyBoard());
  const [xPlayer, setXPlayer] = useState(null);
  const [oPlayer, setOPlayer] = useState(null);
  const [turn, setTurn] = useState(null);
  const [mySide, setMySide] = useState(null);
  const [myId, setMyId] = useState(null);
  const [gameStatus, setGameStatus] = useState(null);

  // console.log('xPlayer: ' + xPlayer);
  // console.log('oPlayer: ' + oPlayer);
  

  const send = new SendMessages({
    socket,
    mySide,
  })
  const joinRoom = send.joinRoom;
  const sendUsername = send.sendUsername;
  const sendMove = send.sendMove;
  const startGame = send.startGame;

  // const listen = 
  MessageListeners({
    socket,
    username,
    setIsConnected,
    joinRoom,
    setStatusMessage,
    setXPlayer,
    setOPlayer,
    setTurn,
    setGameStatus,
    setBoardState,
    setMySide,
    setMyId,
  });


//   const sendPing = () => {
//     socket.emit('ping');
//   }
  

  return (
    <>
      <div className="App">
      <TictactoeNavbar
        username={username}
        setUsername={setUsername}
        sendUsername={sendUsername}
        isConnected={isConnected}
        statusMessage={statusMessage}
        playerInfo={mySide}
      />
        <header className="Centered-Board">
          <table
            style={{
              width: '100vw',
              backgroundColor: 'black',
            }}
          >
            <tbody>
              <tr>
                {/* <td
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
                </td> */}
                <td
                  style={{
                    width: '50vh',
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
