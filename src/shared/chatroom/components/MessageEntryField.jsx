import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import TextField from 'react-bootstrap/TextField';

const MessageEntryField = ({
    // message,
    sendChat,
    thisUser,
}) => {
    const [message, setMessage] = useState('');
    return (
        <div
            style={{
                marginTop: '2rem',
                display: 'inline-block'
            }}
        >
            <Form
                style={{
                    display: 'inline',
                }}
            >
                <Form.Group
                    style={{
                        width: '50rem',
                        display: 'inline',
                    }}
                    // className="mb-3"
                    controlId="formBasicEmail"
                >
                    {/* <Form.Label
                        className='cabin-bold'
                    >
                        Enter chat message
                    </Form.Label> */}
                    <Form.Control
                        style={{
                            width: '50rem',
                            display: 'inline',
                        }}
                        value={message}
                        className='message-text'
                        type="text"
                        placeholder="Enter chat message"
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </Form.Group>
            </Form>
            <div
                style={{
                    display: 'inline',
                    margin: '.5rem',
                    padding: '.5rem',
                    // justifyContent: 'flex-end',
                    // float: 'right',
                    // flexGrow: 3,
                }}
            ><Button
                className='message-text'
                style={{
                    display: 'inline',
                }}
                onClick={() => {
                    const aMsg = {
                        content: message,
                        username: thisUser,
                    }
                    console.log('aMsg:');
                    console.log(aMsg);
                    sendChat({
                        content: message,
                        username: thisUser
                    });
                }}
            >
                Send chat
            </Button>
            </div>
        </div>

    );
}

export default MessageEntryField;