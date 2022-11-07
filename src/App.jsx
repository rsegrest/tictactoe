import { useState } from 'react';
import React from 'react';
import ChatRoomApp from './shared/chatroom/ChatRoomApp';
import ConnectFourApp from './games/connectfour/ConnectFourApp';
import TictactoeApp from './games/tictactoe/TictactoeApp';
import RoomTypes from './shared/constants/RoomTypes';
import MessageSlate from './shared/chatroom/components/MessageSlate';

const App = () => {
    const [roomType, setRoomType] = useState(RoomTypes.CHAT_ROOM);
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
    if (roomType === RoomTypes.CHAT_ROOM) {
        return (
            // <ChatRoomApp />
            <MessageSlate />
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
