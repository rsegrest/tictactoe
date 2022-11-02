import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import TextField from 'react-bootstrap/TextField';

const MessageEntryField = ({
    message,
}) => {
    return (
        <Row xs="auto">
            <Col
                xs={10}
            >
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter chat message</Form.Label>
                        <Form.Control type="text" placeholder="Enter message" />
                    </Form.Group>
                </Form>
            </Col>
            <Col
                style={{
                    display: 'flex',
                    margin: '.5rem',
                    padding: '.5rem',
                    justifyContent: 'flex-end',
                    float: 'right',
                    flexGrow: 3,
                }}
            ><Button>Send chat</Button></Col>
        </Row>
    );
}

export default MessageEntryField;