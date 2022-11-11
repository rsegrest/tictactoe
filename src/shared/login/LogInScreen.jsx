import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/cabin/400.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../chatroom.css';
import io from 'socket.io-client';

import SendMessages from '../interface/SendMessages';
import { Form } from 'react-bootstrap';

const socket = io("http://127.0.0.1:5000/")

  
function LogInScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const sm = new SendMessages(socket);
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
                    setUsername(e.target.value);
                    console.log('username is now: ' + username);
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
                    setPassword(e.target.value);
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
                  sm.sendUsername(username);
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
