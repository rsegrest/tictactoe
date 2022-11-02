import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import MessageRow from "./MessageRow";
import MessageEntryField from './MessageEntryField';

const MessageSlate = ({
  messages,
}) => {
  const message = {
    id: 123,
    username: 'tricky',
    content: 'hey now',
    nameBackgroundColor: 'taupe',
    messageBackgroundColor: 'pink',
  }
  return (
    <Container>
      {/* <Row xs={2} md={4} lg={6}>
        <Button>Test Bootstrap Again</Button>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
      <Row xs={1} md={2}>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row> */}
      <MessageRow message={message} />
      <MessageEntryField />
    </Container>
  );
  // return (
  //   <div className="message-slate">
  //     {messages.map((message) => (
  //       <MessageRow
  //         key={message.id}
  //         id={message.id}
  //         username={message.username}
  //         message={message.message}
  //         color={message.color}
  //       />
  //     ))}
  //   </div>
  // );
}
export default MessageSlate;