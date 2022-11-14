import Container from 'react-bootstrap/Container';

import MessageRow from "./MessageRow";
import MessageEntryField from './MessageEntryField';

import _uniqueId from 'lodash/uniqueId';

import "@fontsource/cabin/400.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../chatroom.css';

const MessageSlate = ({
  messages = [],
  sendChat,
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
          key={_uniqueId(message.timestamp)}
          message={message}
          thisUser={'tricky'}
        />
      ))}
      <MessageEntryField
        sendChat={sendChat}
        thisUser={'tricky'}
      />
    </Container>
  );
}
export default MessageSlate;