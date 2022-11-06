// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const TictactoeNavbar = ({
    statusMessage = 'Status Message',
    isConnected = false,
    username,
    setUsername,
    sendUsername,
    mySide,
}) => {
    let statusColor = '#f00';
    if (isConnected) {
        statusColor = '#0f0';
    }
    return (
        <Navbar
            bg="dark"
            variant="dark"
        >
            <Container
                style={{
                    border: 'none',
                }}
            >
                <Navbar.Brand
                    href="#home"
                    style={{
                        // border: '1px solid green',
                        width: '40rem',
                    }}
                >
                    <div style={{
                        height: '1rem',
                        width: '1rem',
                        backgroundColor: statusColor,
                        borderRadius: '50%',
                        marginTop: '0.3rem',
                        marginRight: '1rem',
                        display: 'inline-block',
                    }} />
                    Rick Tac Toe
                   
                </Navbar.Brand>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        height: '3rem',
                        marginTop: '0.2rem',
                        marginLeft: '2rem',
                        marginRight: '2rem',
                    }}
                >
                    <h5
                        style={{
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            marginTop: '0.6rem',
                            float: 'center',
                            color: 'white',
                        }}
                    >
                        {statusMessage}
                    </h5>
                </div>
                <div
                    style={{
                        display: 'inline-block',
                        float: 'right',
                        justifyContent: 'right',
                        width: '40rem',
                        height: '3rem',
                        // border: '1px solid blue'
                    }}
                >
                    {!mySide ? (
                        <Form
                            style={{
                                display: 'inline',
                            }}
                        >
                            <Form.Control
                                style={{
                                    width: '10rem',
                                    marginTop: '0.2rem',
                                    marginRight: '1rem',
                                    display: 'inline',
                                }}
                                type="text"
                                placeholder="Enter your name"
                                id="username_field" onChange={(e) => setUsername(e.target.value)}
                            />
                            <Button
                                style={{
                                    marginTop: '-0.2rem',
                                    display: 'inline',
                                }}
                                onClick={() => sendUsername(username)}
                            >
                                Submit
                            </Button>
                        </Form>
                    ) : null}
                </div>
            </Container>
        </Navbar>
    )
}
export default TictactoeNavbar;