import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MessageRow = ({
    message
}) => {
    const {
        id,
        username,
        content,
        nameBackgroundColor,
        messageBackgroundColor
    } = message;
    return (
        <Row className="message-row">
            <Col
                style={{ backgroundColor: nameBackgroundColor}}
                className="message-username"
            >
                {username} ({id})
            </Col>
            <Col
                xs={10}
                style={{ backgroundColor: messageBackgroundColor }}
                className="message-text"
            >
                {content}
            </Col>
        </Row>
    );
}
export default MessageRow;