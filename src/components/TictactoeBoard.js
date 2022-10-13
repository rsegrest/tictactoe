import XOSpace from "./XOSpace";
import { getEmptyBoard, getTestBoard } from '../interface/GameSvrInterface'
const TictactoeBoard = () => {
    let boardState = getEmptyBoard();
    let spacenum = -1;
    return (
      <div className="App">
        <header className="Centered-Board">
          <table>
            <tbody>
              <tr>
                <XOSpace spacenum={(spacenum += 1)} state={boardState[0][0]} />
                <XOSpace spacenum={(spacenum += 1)} state={boardState[0][1]} />
                <XOSpace spacenum={(spacenum += 1)} state={boardState[0][2]} />
              </tr>
              <tr>
                <XOSpace spacenum={(spacenum += 1)} state={boardState[1][0]} />
                <XOSpace spacenum={(spacenum += 1)} state={boardState[1][1]} />
                <XOSpace spacenum={(spacenum += 1)} state={boardState[1][2]} />
              </tr>
              <tr>
                <XOSpace spacenum={(spacenum += 1)} state={boardState[2][0]} />
                <XOSpace spacenum={(spacenum += 1)} state={boardState[2][1]} />
                <XOSpace spacenum={(spacenum += 1)} state={boardState[2][2]} />
              </tr>
            </tbody>
          </table>
        </header>
      </div>
    )
  }
export default TictactoeBoard;