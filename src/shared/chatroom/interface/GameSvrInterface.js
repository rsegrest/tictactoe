
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
        const err = Error('socket not connected');
        throw(err);
    } else {
        console.log('socket connected');
    }
}
