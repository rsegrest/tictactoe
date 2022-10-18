import { SpaceStates } from "../constants";
// import { sendMove } from "../interface/GameSvrInterface";
const XOSpace = ({
    state = SpaceStates.X,
    spacenum,
    sendMove,
}) => {
    let rendering = '';
    let clName = "space";
    if (state === 'X') { rendering = 'X'; }
    if (state === 'O') { rendering = 'O'; }

    if (state === SpaceStates.X) { rendering = 'X'; }
    if (state === SpaceStates.O) { rendering = 'O'; }

    if (state === 1) { rendering = 'X'; }
    if (state === 2) { rendering = 'O'; }

    if (spacenum < 3) { clName += " bottomborder"; }
    if (spacenum % 3 === 0) { clName += " rightborder"; }
    if (spacenum % 3 === 2) { clName += " leftborder"; }
    if (spacenum > 5) { clName += " topborder"; }
    return (
        <td
            className={clName}
            onClick={() => {
                console.log("clicked space " + spacenum);
                sendMove(spacenum);
            }}
        >
            {rendering}
        </td>
    )
}
export default XOSpace;