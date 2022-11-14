/* eslint-disable no-unused-vars */

class SendMessages {
    constructor(socket, mySide) {
        this.socket = socket;
        this.mySide = mySide;
    }
    sendUsername = (username) => {
        // console.log('sending username : ' + username)
        this.socket.emit('player_username', {'name': username})
      }
    
    sendMove = (spacenum) => {
        // console.log('sending move')
        this.socket.emit('player_move', {
            'side': this.mySide, 'spacenum': spacenum
        })
    }
    joinRoom = () => {
        this.socket.emit('join', {'room': 'tictactoe'})
    }
    
    // startGame = () => {
    //     this.socket.emit('start_game', {'room': 'tictactoe'})
    // }
}

export default SendMessages;

