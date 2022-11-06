import XOSpace from "./XOSpace";
const TictactoeBoard = ({
  sendMove,
  boardState,
}) => {
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
              width: '100vh',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: '3rem',
              marginBottom: '3rem',
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
                  </tr>)
                }
              )
            }
        </tbody>
      </table>
    )
  }
export default TictactoeBoard;