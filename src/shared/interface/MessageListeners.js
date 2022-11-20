import { useEffect } from 'react';
// import { SpaceStates, GameStates } from './constants';

const getGamesFromJSON = (json) => {
    const gameArray = json[0].games;
    const returnArray = [];
    for (let i = 0; i < gameArray.length; i++) {
        returnArray.push(gameArray[i]);
    }
    return returnArray;
}
const getMessagesFromJSON = (json) => {
    const messageArray = json[0].messages;
    const returnArray = [];
    for (let i = 0; i < messageArray.length; i++) {
        const formattedMessage = messageArray[i].replaceAll("'", '"');
        const parsedMessage = JSON.parse(formattedMessage);
        returnArray.push({
            userId: parsedMessage.user_id,
            userName: parsedMessage.user_name,
            content: parsedMessage.content,
            timestamp: parsedMessage.timestamp,
        })
    }
    return returnArray;
}

const MessageListeners = ({
    socket,
    setIsConnected,
    joinRoom,
    setRoomMessages,
    setRoomUsers,
    setGamesAvailable,
}) => {

  useEffect(() => {
    socket.on('connect', () => {
        // console.log('socket connected');
    //   setIsConnected(true);
    //   joinRoom(); // do this here or somewhere else?
    });

    socket.on('disconnect', () => {
        // console.log('socket disconnected');
    //   setIsConnected(false);
    });

    // socket.on('messages', () => {
        // console.log('***RX MESSAGES');
        // console.log(message);
    // })

    // socket.on('users', (message) => {
    //     console.log('*******RX USERS');
    //     // console.log(message);
    //     setRoomUsers(message.users);
    // })
    socket.onAny((eventName, ...args) => {
        if (args[0].data !== 'Connected') {
            console.log('***RX ANY');
            console.log(eventName, args);
        }
        if (
            (eventName === 'messages')
            || (eventName === 'message_list_update')) {
            console.log('***RX MESSAGES');
            const messages = getMessagesFromJSON(args);
            setRoomMessages(messages);
        }
        if (eventName === 'games') {
            // console.log('***RX GET GAMES AVAILABLE');
            // console.log(args);
            const games = getGamesFromJSON(args);
            setGamesAvailable(games);
        }
        if (eventName === 'users') {
            // console.log('***RX GET USERS IN ROOM');
            // console.log(args);
            setRoomUsers(args[0].users);
        }
        if (eventName === 'message_list_update') {
            console.log('***RX MESSAGE LIST UPDATE');
            // console.log(args);
            const messages = getMessagesFromJSON(args);
            setRoomMessages(messages);
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
        socket.off('connect');
        socket.off('disconnect');
        // socket.off('messages')
        // socket.off('users');
        // socket.off('games');
    };
  }, [joinRoom, setGamesAvailable, setIsConnected, setRoomMessages, setRoomUsers, socket]);
};
export default MessageListeners;