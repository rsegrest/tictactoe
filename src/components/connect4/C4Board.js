import C4Space from "./C4Space";
const C4Board = ({
  sendMove,
  boardState,
  NUM_ROWS = 6,
  NUM_COLS = 7
}) => {
    // let boardState = getEmptyBoard();
    console.log('boardState');
    console.log(boardState);
    let space = [];
    const outputRow = ({
      row,
      i,
      sendMove,
    }) => {
      console.log('outputting row ' + row + ', ' + i);

      // TODO: use NUM_ROWS / NUM_COLS
      const returnRow = row.map((col,j) => {
        // spacenum = (i*NUM_ROWS) + j;
        space = [i,j];
        return (
          // <p>{JSON.stringify(col)}_{spacenum}</p>
          <C4Space
            key={'r'+i+'-c'+j}
            state={boardState[i][j]}
            rownum={i}
            colnum={j}
            space={space}
            // sendMove={(space) => sendMove(space)}
          />
        )
      });
      return returnRow;
    }

    return (
      <table
        style={{
          width: '100vh',
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
        </tbody>
      </table>
    )
  }
export default C4Board;