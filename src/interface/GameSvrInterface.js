
import { io } from "socket.io-client";
import { SpaceStates } from "../constants"

export const connectToGameSvr = () => {
    const socket = io("ws://127.0.0.1", {
        // reconnectionDelayMax: 10000,
        // // auth: {
        // //     token: "123"
        // // },
        query: {
            "getboard": "true"
        }
    });
    if (!socket) {
        throw('socket not connected');
    } else {
        console.log('socket connected');
    }
}



export const getEmptyBoard = () => {
    return [
        [SpaceStates.EMPTY, SpaceStates.EMPTY, SpaceStates.EMPTY],
        [SpaceStates.EMPTY, SpaceStates.EMPTY, SpaceStates.EMPTY],
        [SpaceStates.EMPTY, SpaceStates.EMPTY, SpaceStates.EMPTY],
    ];
}

export const getTestBoard = () => {
    return [
        [SpaceStates.X, SpaceStates.O, SpaceStates.X],
        [SpaceStates.X, SpaceStates.O, SpaceStates.O],
        [SpaceStates.X, SpaceStates.O, SpaceStates.X],
    ];
}

export const sendMove = () => {
    throw 'not implemented';
}

export const receiveMove = () => {
    throw 'not implemented';
}

export const getGameStatus = () => {
    throw 'not implemented';
}