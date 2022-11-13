import io from 'socket.io-client';
import { useState } from 'react';
import React from 'react';
import ChatRoomApp from './shared/chatroom/ChatRoomApp';
import ConnectFourApp from './games/connectfour/ConnectFourApp';
import TictactoeApp from './games/tictactoe/TictactoeApp';
import RoomTypes from './shared/constants/RoomTypes';
// import MessageSlate from './shared/chatroom/components/MessageSlate';
// import GameCard from './shared/chatroom/components/GameCard';
import LogInScreen from './shared/login/LogInScreen';
import SendMessages from './shared/interface/SendMessages';
import MessageListeners from './shared/interface/MessageListeners';

const App = () => {

    const socket = io("http://127.0.0.1:5000/");

    const [ roomType, setRoomType ] = useState(RoomTypes.LOGIN);
    const [ roomMessages, setRoomMessages ] = useState([]);
    const [ mySessionID, setMySessionID ] = useState(null);
    const [ myRoom, setMyRoom ] = useState(null);
    const [ roomUsers, setRoomUsers ] = useState([]);

    const sm = new SendMessages(socket);
    const reqMsgs = sm.sendRequestMessages;
    const reqUsers = sm.sendRequestUsersInRoom;
    const sendUsername = sm.sendUsername;
    console.log('initializing message listeners')
    MessageListeners({
        setRoomMessages,
        setRoomUsers,
        socket,
        // setIsConnected,
        // joinRoom,

        // username,
        // setIsConnected,
        // joinRoom,
        // setStatusMessage,
        // setXPlayer,
        // setOPlayer,
        // setTurn,
        // setGameStatus,
        // setBoardState,
        // setMySide,
        // setMyId,
      });
    // const renderRoom = () => {
    //     switch (roomType) {
    //         case RoomTypes.CHAT_ROOM:
    //             return (<ChatRoomApp />);
    //         case RoomTypes.CONNECT_FOUR:
    //             return (<ConnectFourApp />);
    //         case RoomTypes.TICTACTOE:
    //             return (<TictactoeApp />);
    //         default:
    //             return null;
    //     }
    // };
    // const room = renderRoom();
    if (roomType === RoomTypes.LOGIN) {
        return (
            <>
                <p>Room Type : {roomType}</p>
                <LogInScreen
                    setRoomType={setRoomType}
                    reqMsgs={reqMsgs}
                    reqUsers={reqUsers}
                    sendUsername={sendUsername}
                />
            </>
        );
    } else if (roomType === RoomTypes.CHAT_ROOM) {
        return (
            <>
                <p>Room Type : {roomType}</p>
                
                <ChatRoomApp
                    myRoom={myRoom}
                    setMyRoom={setMyRoom}
                    roomMessages={roomMessages}
                    setRoomMessages={setRoomMessages}
                    roomUsers={roomUsers}
                    setRoomUsers={setRoomUsers}
                />
            </>
        );
    } else if (roomType === RoomTypes.CONNECT_FOUR) {
        return (
            <ConnectFourApp />
        );
    } else if (roomType === RoomTypes.TICTACTOE) {
        return (
            <TictactoeApp />
        );
    }
}
export default App;
