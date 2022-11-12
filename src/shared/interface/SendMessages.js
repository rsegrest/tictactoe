/* eslint-disable no-unused-vars */

class SendMessages {
    constructor(socket) {
        this.socket = socket;
        // this.mySide = mySide;
    }
    sendUsername = (username) => {
        console.log('sending username : ' + username)
        this.socket.emit('register_username', {'name': username})
    }
    sendRequestMessages = () => {
        console.log('sending request messages')
        this.socket.emit('request_messages')
    }
    sendRequestUsersInRoom = () => {
        console.log('sending request users in room')
        this.socket.emit('request_users_in_room')
    }
    // joinRoom = () => {
    //     this.socket.emit('join', {'room': 'tictactoe'})
    // }
    // startGame = () => {
    //     this.socket.emit('start_game', {'room': 'tictactoe'})
    // }
}

export default SendMessages;

