import { SpaceStates } from "../constants/index";

const C4Space = ({
    state = SpaceStates.EMPTY,
    row,
    column,
    space,
    sendMove,
}) => {
    let rendering = '';
    let clName = "space";
    if (state === 'B') { rendering = '⚫️'; }
    else if (state === 'R') { rendering = '🔴'; }

    else if (state === SpaceStates.B) { rendering = '⚫️'; }
    else if (state === SpaceStates.R) { rendering = '🔴'; }

    else if (state === 1) { rendering = '⚫️'; }
    else if (state === 2) { rendering = '🔴'; }

    // if (spacenum < 3) { clName += " bottomborder"; }
    // if (spacenum % 3 === 0) { clName += " rightborder"; }
    // if (spacenum % 3 === 2) { clName += " leftborder"; }
    // if (spacenum > 5) { clName += " topborder"; }
    return (
        <td
            className={clName}
            style={{
                backgroundColor: '#228',
                // borderLeft: '1px solid white',
                // borderRight: '1px solid white',
                width: '14vh',
                height: '14vh',
                fontSize: '12vh',
            }}
            onClick={() => {
                console.log("clicked space " + space);
                sendMove(column);
            }}
        >
            
            {rendering === '' ? (
                <div style={{
                    color: 'black',
                    height: '12vh',
                    width: '12vh',
                    backgroundColor: '#222',
                    borderRadius: '50%',
                    margin: 'auto',
                    display: 'inlineBlock',
                }} />
            ) : (
                <div style={{
                    height: '12vh',
                    width: '12vh',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: '-3rem',
                }}>{rendering}</div>
            )}
        </td>
    )
}
export default C4Space;