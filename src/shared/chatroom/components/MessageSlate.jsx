import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import MessageRow from "./MessageRow";
import MessageEntryField from './MessageEntryField';

import "@fontsource/cabin/400.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../chatroom.css';

const MessageSlate = ({
  messages = [],
}) => {
  console.log('messages in MessageSlate: ' + JSON.stringify(messages));
  
  return (
    <Container
      style={{
        border: '1px solid lightgray',
        marginTop: '1rem',
        paddingTop: '1rem',
        borderRadius: '0.7rem',
      }}
    >
      {messages.map((message) => (
        <MessageRow
          key={message.id}
          message={message}
          thisUser={'tricky'}
        />
      ))}
      <MessageEntryField />
    </Container>
  );
}
export default MessageSlate;