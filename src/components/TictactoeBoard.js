import XOSpace from "./XOSpace";
const TictactoeBoard = ({
  sendMove,
  boardState,
}) => {
    // let boardState = getEmptyBoard();
    console.log('boardState');
    console.log(boardState);
    let spacenum = -1;
    const outputRow = ({
      row,
      i,
      sendMove,
    }) => {
      console.log('outputting row ' + row + ', ' + i);

      const returnRow = row.map((col,j) => {
        spacenum = (i*3) + j;
        return (
          // <p>{JSON.stringify(col)}_{spacenum}</p>
          <XOSpace
            key={i*3+j}
            state={boardState[i][j]}
            spacenum={spacenum}
            sendMove={(spacenum) => sendMove(spacenum)}
          />
        )
      });


      return returnRow;
    }
    return (

          <table
            style={{
              width: '100%',
              marginLeft: '1rem',
              marginRight: '1rem',
            }}
          >
            <tbody>
              {boardState.map((row,i) => 
                {
                  console.log('*outputting row ' + row + ', ' + i);
                  return (
                  <tr
                    key={i}
                  >
                    {outputRow({
                      row,i,sendMove
                    })}
                    {/* {JSON.stringify(row)} */}
                  </tr>)
                }
              )
            }
              {/* <tr>
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
              </tr> */}
            </tbody>
          </table>
      //   </header>
      // </div>
    )
  }
export default TictactoeBoard;