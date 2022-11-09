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
  // messages,
}) => {
  const message = {
    id: 123,
    username: 'tricky',
    content: 'hey now',
  }
  const msg2 = {
    id: 124,
    username: 'lara',
    content: 'hey now',
  }
  const msg3 = {
    id: 125,
    username: 'charlotte',
    content: 'hey now',
  }
  const msg4 = {
    id: 126,
    username: 'livvy',
    content: '',
  }
  const msg5 = {
    id: 127,
    username: 'John Isaac',
    content: 'I love Haddoween',
  }
  const msg6 = {
    id: 128,
    username: 'Rufus',
    content: 'roo roo roo',
  }
  const messages = [message, msg2, msg3, msg4, msg5, msg6]
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