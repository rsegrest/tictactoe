import { useEffect } from 'react';
// import { SpaceStates, GameStates } from './constants';

const getMessagesFromJSON = (json) => {
    // console.log('RX messages');
    // console.log('args');
    // console.log(json);
    const messageArray = json[0].messages;
    console.log('messageArray, length:')
    console.log(messageArray);
    console.log(messageArray.length);
    const returnArray = [];
    for (let i = 0; i < messageArray.length; i++) {
        console.log('looping ' + i);
        const formattedMessage = messageArray[i].replaceAll("'", '"');
        console.log('formattedMessage:');
        console.log(formattedMessage)
        const parsedMessage = JSON.parse(formattedMessage);
        console.log(parsedMessage)
        returnArray.push({
            userId: parsedMessage.user_id,
            userName: parsedMessage.user_name,
            content: parsedMessage.content,
            timestamp: parsedMessage.timestamp,
        })
    }
    // const formattedMessage = messageArray[0].replaceAll("'", '"');
    // const parsedMessage = JSON.parse(formattedMessage);
    // // console.log('messages:')
    // // console.log(JSON.stringify(args[0].messages));
    // console.log('messages[0]: (user_id, user_name, content, timestamp)')
    // // const msgString = args[0].messages[0];
    // // console.log('msgString:');
    // // console.log(msgString);
    // // console.log(typeof msgString);
    // console.log(parsedMessage['user_id']);
    // console.log(parsedMessage['user_name']);
    // console.log(parsedMessage['content']);
    // console.log(parsedMessage['timestamp']);
    return returnArray;
}

const MessageListeners = ({
    socket,
    setIsConnected,
    joinRoom,
    setRoomMessages,
    // setStatusMessage,
    // setXPlayer,
    // setOPlayer,
    // setTurn,
    // setGameStatus,
    // setBoardState,
    // setMySide,
    // setMyId,
    // username,
}) => {

    console.log('initializing shared / interface / message listeners');
  useEffect(() => {
    console.log('useEffect in shared / interface / message listeners');
    socket.on('connect', () => {
        console.log('socket connected');
    //   setIsConnected(true);
    //   joinRoom(); // do this here or somewhere else?
    });

    socket.on('disconnect', () => {
        console.log('socket disconnected');
    //   setIsConnected(false);
    });

    socket.on('messages', (
        // message
    ) => {
        console.log('***RX MESSAGES');
        // console.log(message);
    })

    socket.on('users', (message) => {
        console.log('received user list');
        console.log(message);
    })
    socket.onAny((eventName, ...args) => {
        // console.log('***RX ANY');
        // console.log(eventName, args);
        if (eventName === 'messages') {
            console.log('processing messages from server...')
            const messages = getMessagesFromJSON(args);
            console.log('...completed processing')
            console.log('messages:')
            setRoomMessages(messages);
            // console.log('RX messages');
            // console.log('args');
            // console.log(args);
            // const messageArray = args[0].messages;
            // const formattedMessage = messageArray[0].replaceAll("'", '"');
            // const parsedMessage = JSON.parse(formattedMessage);
            // // console.log('messages:')
            // // console.log(JSON.stringify(args[0].messages));
            // console.log('messages[0]: (user_id, user_name, content, timestamp)')
            // // const msgString = args[0].messages[0];
            // // console.log('msgString:');
            // // console.log(msgString);
            // // console.log(typeof msgString);
            // console.log(parsedMessage['user_id']);
            // console.log(parsedMessage['user_name']);
            // console.log(parsedMessage['content']);
            // console.log(parsedMessage['timestamp']);
            
            // const messageListJson = JSON.parse(args[0]);
            // console.log('parsed messages');
            // console.log(messageListJson.messages);


            // const messageListLength = messageListJson.messages.length;
            // console.log(`messageListLength: ${messageListLength}`);
            // for (let i = 0; i < messageListLength; i++) {
            //     const aMessage = messageListJson.messages[i];
            //     console.log(`message ${i}: ${aMessage}`);
            // }
            // setRoomMessages(args[0]);


        }
      });

        // socket.on('pong', () => {
    //   console.log('received pong!')
    // //   setLastPong(new Date().toISOString());
    // });

    // socket.on('update_msg', (message) => {
    //   console.log('received message update')
    //   console.log(message)
    //   setStatusMessage(message['msg'])
    // })

    // socket.on('ack_player_username', (message) => {
    //   console.log('rx set player')
    //   console.log(message);
    //   const id = message['id'];
    //   const side = message['side'];
    //   const thisUser = message['username'];
    //   console.log('side: ' + side);
    //   console.log('thisUser : ' + thisUser);
    //   if (side === SpaceStates.X) {
    //     console.log('setting xPlayer')
    //     setXPlayer(thisUser);
    //     if (thisUser === username) {
    //       setMySide(SpaceStates.X);
    //       setMyId(id)
    //     }
    //   } else if (side === SpaceStates.O) {
    //     console.log('setting oPlayer')
    //     setOPlayer(thisUser);
    //     if (thisUser === username) {
    //       setMySide(SpaceStates.O);
    //       setMyId(id)
    //     }
    //   }
    // })

    // socket.on('board_update', (message) => {
    //     console.log('rx board update')
    //     console.log(message);
    //     setBoardState(message['board'])
    // })

    // // NOT USED?
    // socket.on('change_turn', (message) => {
    //     console.log('rx change turn')
    //     console.log(message);
    //     setTurn(message['turn'])
    // })

    // socket.on('my_response', (message) => {
    //     console.log('rx my response')
    //     console.log(message);
    // })

    // socket.on('update_board', (message) => {
    //     console.log('rx update board')
    //     console.log(message);
    //     setBoardState(message['board'])
    // })

    // socket.on('update_game_status', (message) => {
    //     console.log('rx update game status')
    //     console.log(message);
    //     const gameStatus = message['status'];
    //     setGameStatus(message['status'])
    //     if (gameStatus === GameStates.X_WON) {
    //         setStatusMessage('X won!')
    //     } else if (gameStatus === GameStates.O_WON) {
    //         setStatusMessage('O won!')
    //     } else if (gameStatus === GameStates.DRAW) {
    //         setStatusMessage('CATS Game!')
    //     } else if (gameStatus === GameStates.X_TURN) {
    //         setStatusMessage('X\'s turn')
    //         setTurn(SpaceStates.X)
    //     } else if (gameStatus === GameStates.O_TURN) {
    //         setStatusMessage('O\'s turn')
    //         setTurn(SpaceStates.O)
    //     }
    // })
    // NO LONGER NEEDED
    // socket.on('ack_start_game', (message) => {
    //   console.log('rx update game status')
    //   console.log(message);
    //   setGameStatus(message['starting_game'])
    // }
//   )

    return () => {
        socket.off('messages')
        socket.off('user_list');
    //   socket.off('connect');
    //   socket.off('disconnect');
    //   socket.off('pong');
    //   socket.off('update_msg');
    //   socket.off('ack_player_username');
    //   socket.off('board_update');
    //   socket.off('change_turn');
    //   socket.off('my_response');
    //   socket.off('update_board');
    //   socket.off('update_game_status');
    //   socket.off('ack_start_game');
    };
  }, [joinRoom, setIsConnected, setRoomMessages, socket]);
};
export default MessageListeners;