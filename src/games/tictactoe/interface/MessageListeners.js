import { useEffect } from 'react';
import { SpaceStates, GameStates } from '../constants';

const MessageListeners = ({
    socket,
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
    username,
}) => {

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
      joinRoom(); // do this here or somewhere else?
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    socket.on('pong', () => {
      // console.log('received pong!')
    //   setLastPong(new Date().toISOString());
    });

    socket.on('update_msg', (message) => {
      // console.log('received message update')
      // console.log(message)
      setStatusMessage(message['msg'])
    })

    socket.on('ack_player_username', (message) => {
      // console.log('rx set player')
      // console.log(message);
      const id = message['id'];
      const side = message['side'];
      const thisUser = message['username'];
      // console.log('side: ' + side);
      // console.log('thisUser : ' + thisUser);
      if (side === SpaceStates.X) {
        // console.log('setting xPlayer')
        setXPlayer(thisUser);
        if (thisUser === username) {
          setMySide(SpaceStates.X);
          setMyId(id)
        }
      } else if (side === SpaceStates.O) {
        // console.log('setting oPlayer')
        setOPlayer(thisUser);
        if (thisUser === username) {
          setMySide(SpaceStates.O);
          setMyId(id)
        }
      }
    })

    socket.on('board_update', (message) => {
        // console.log('rx board update')
        // console.log(message);
        setBoardState(message['board'])
    })

    // NOT USED?
    socket.on('change_turn', (message) => {
        // console.log('rx change turn')
        // console.log(message);
        setTurn(message['turn'])
    })

    socket.on('my_response', (message) => {
        // console.log('rx my response')
        // console.log(message);
    })

    socket.on('update_board', (message) => {
        // console.log('rx update board')
        // console.log(message);
        setBoardState(message['board'])
    })

    socket.on('update_game_status', (message) => {
        // console.log('rx update game status')
        // console.log(message);
        const gameStatus = message['status'];
        setGameStatus(message['status'])
        if (gameStatus === GameStates.X_WON) {
            setStatusMessage('X won!')
        } else if (gameStatus === GameStates.O_WON) {
            setStatusMessage('O won!')
        } else if (gameStatus === GameStates.DRAW) {
            setStatusMessage('CATS Game!')
        } else if (gameStatus === GameStates.X_TURN) {
            setStatusMessage('X\'s turn')
            setTurn(SpaceStates.X)
        } else if (gameStatus === GameStates.O_TURN) {
            setStatusMessage('O\'s turn')
            setTurn(SpaceStates.O)
        }
    })
    // NO LONGER NEEDED
    socket.on('ack_start_game', (message) => {
      // console.log('rx update game status')
      // console.log(message);
      setGameStatus(message['starting_game'])
  })

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('pong');
      socket.off('update_msg');
      socket.off('ack_player_username');
      socket.off('board_update');
      socket.off('change_turn');
      socket.off('my_response');
      socket.off('update_board');
      socket.off('update_game_status');
      socket.off('ack_start_game');
    };
  }, [joinRoom, setBoardState, setGameStatus, setIsConnected, setMyId, setMySide, setOPlayer, setStatusMessage, setTurn, setXPlayer, socket, username]);
};
export default MessageListeners;