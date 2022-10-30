const DebugDisplay = ({
    statusMessage,
    isConnected,
    username,
    mySide,
    myId,
    xPlayer,
    oPlayer,
    turn,
    gameStatus,
    setUsername,
    sendUsername,
    joinRoom,
    // startGame,
}) => {
    console.log('username: ' + username)
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
                        <td>X Player: { '' + xPlayer }</td>
                    </tr>
                    <tr
                        className="Debug-Output-Row"
                    >
                        <td>O Player: { '' + oPlayer }</td>
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
                </tbody>
            </table>
        </div>
    )
}
export default DebugDisplay;
