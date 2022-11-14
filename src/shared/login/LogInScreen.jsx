import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/cabin/400.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../chatroom.css';

import RoomTypes from '../constants/RoomTypes';
// import SendMessages from '../interface/SendMessages';
import { Form } from 'react-bootstrap';


  
function LogInScreen({
  roomType,
  setRoomType,
  reqMsgs,
  reqUsers,
  reqGames,
  sendUsername,
  username,
  setUsername,
  socket,
}) {
  const [tempUsername, setTempUsername] = useState("");
  const [tempPassword, setTempPassword] = useState("");
  // const sm = new SendMessages(socket);
  return (
    <>
      <p>Room Type: {roomType}</p>
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
              className='login-row'
              style={{
                border: '1px solid lightgray',
                width: '30rem',
                height: '5rem',
              }}
            >
              Username
              <Form>
                <Form.Control
                  onChange={(e) => {
                    setTempUsername(e.target.value);
                    // console.log('username is now: ' + username);
                  }}
                  type="text"
                  placeholder="Enter Username"
                />
              </Form>
            </td>
          </tr>
          <tr>
            <td
              className='login-row'
              style={{
                border: '1px solid lightgray',
                width: '30rem',
                height: '5rem',
              }}
            >
              Password
              <Form.Control
                  onChange={(e) => {
                    setTempPassword(e.target.value);
                  }}
                  type="password"
                  placeholder="Enter Password"
                />
            </td>
          </tr>
          <tr>
            <td>
              <Button
                onClick={() => {
                  console.log('about to send username: ', username);
                  // sm.sendUsername(username);
                  setUsername(tempUsername);
                  sendUsername(tempUsername);
                  reqMsgs();
                  reqUsers();
                  reqGames();
                  setRoomType(RoomTypes.CHAT_ROOM);
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
