import { GameStates } from '../constants'

const DebugDisplay = ({
    statusMessage,
    isConnected,
    username,
    mySide,
    myId,
    blackPlayer,
    redPlayer,
    turn,
    gameStatus,
    setUsername,
    sendUsername,
    joinRoom,
    startGame,
}) => {
    console.log('username: ' + username)
    console.log('myside : ' + mySide)
    return (
        <div className="Debug-Display">
            <table
                className="Debug-Output-Table"
            >
                <tbody
                    style={{
                        height: '1.1rem',
                    }}
                >
                    <tr
                        className="Debug-Output-Row"
                    >
                        <td>Status Message: {''+ statusMessage}</td>
                    </tr>
                    <tr
                        className="Debug-Output-Row"
                    >
                        <td>Connected: { '' + isConnected }</td>
                    </tr>
                    <tr
                        className="Debug-Output-Row"
                    >
                        <td>This Player's Side: { '' + mySide }</td>
                    </tr>
                    <tr
                        className="Debug-Output-Row"
                    >
                        <td>This Player's ID: { '' + myId }</td>
                    </tr>
                    <tr
                        className="Debug-Output-Row"
                    >
                        <td>Black Player: { '' + blackPlayer }</td>
                    </tr>
                    <tr
                        className="Debug-Output-Row"
                    >
                        <td>Red Player: { '' + redPlayer }</td>
                    </tr>
                    <tr
                        className="Debug-Output-Row"
                    >
                        <td>Current turn: { '' + turn }</td>
                    </tr>
                    <tr
                        className="Debug-Output-Row"
                    >
                        <td>Game Status: { '' + gameStatus }</td>
                    </tr>

                    {!mySide ? (
                        <>
                            <tr
                                className="Debug-Output-Row"
                            >
                                <td>
                                    <input id="username_field" onChange={(e) => setUsername(e.target.value)} />
                                </td>
                            </tr>
                            <tr
                                className="Debug-Output-Row"
                            >
                                <td>
                                <button onClick={() => sendUsername(username)}>Send username</button><br />
                                </td>
                            </tr>
                            <tr
                                className="Debug-Output-Row"
                            >
                                <td>
                                    <button onClick={() => joinRoom()}>Join Room</button><br />
                                </td>
                            </tr>
                        </>
                    ) : null}
                    {
                        (
                            gameStatus === GameStates.DRAW
                            || gameStatus === GameStates.B_WON
                            || gameStatus === GameStates.R_WON
                        ) ? (
                            <tr
                                className="Debug-Output-Row"
                            >
                                <td>
                                    <button onClick={() => startGame()}>Restart Game</button><br />
                                </td>
                            </tr>
                        ) : null
                    }
                </tbody>
            </table>
        </div>
    )
}
export default DebugDisplay;
