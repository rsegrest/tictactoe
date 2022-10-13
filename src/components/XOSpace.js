import { SpaceStates } from "../constants";
const XOSpace = ({
    state = SpaceStates.X,
    spacenum,
}) => {
    let rendering = '';
    let clName = "space";
    if (state === SpaceStates.X) { rendering = 'X'; }
    if (state === SpaceStates.O) { rendering = 'O'; }
    if (spacenum < 3) { clName += " bottomborder"; }
    if (spacenum % 3 === 0) { clName += " rightborder"; }
    if (spacenum % 3 === 2) { clName += " leftborder"; }
    if (spacenum > 5) { clName += " topborder"; }
    return (
        <td
            className={clName}
            onClick={() => {
                console.log("clicked space " + spacenum);
            }}
        >{rendering}</td>
    )
}
export default XOSpace;