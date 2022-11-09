import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/cabin/400.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../chatroom.css';

import SendMessages from '../interface/SendMessages';

// const socket = io("http://127.0.0.1:5000/")

  
function LogInScreen() {
  return (
    <>
      <Table
        style={{
          width: '30rem',
          height: '10rem',
          margin: 'auto',
          marginTop: '30vh',
        }}
      >
        <tbody>
          <tr>
            <td>
              <h3
                style={{
                  textAlign: 'center',
                }}
              >The Game Club</h3>
            </td>
          </tr>
          <tr>
            <td
              style={{
                border: '1px solid lightgray',
                width: '30rem',
                height: '5rem',
              }}
            >
              Username Row
            </td>
          </tr>
          <tr>
            <td
              style={{
                border: '1px solid lightgray',
                width: '30rem',
                height: '5rem',
              }}
            >
              Password Row
            </td>
          </tr>
          <tr>
            <td>
              <Button
                onClick={() => {
                  SendMessages.sendUsername('tricky');
                }}
              >Register</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}

export default LogInScreen;
