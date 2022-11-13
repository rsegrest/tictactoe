import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../chatroom.css';

const UserListDisplay = ({
    roomUsers,
}) => {
    // const { users } = useContext(ChatContext);
    console.log('roomUsers', roomUsers);
    return (
        <Container
            style={{
                fontSize: '1.2em',
                width: '12vw',
            }}
            className="user-list"
        >
        {roomUsers.map((user) => (
            <Row key={user} className="user">
                <Col>{user}</Col>
            </Row>
        ))}
        </Container>
    );
}
export default UserListDisplay;