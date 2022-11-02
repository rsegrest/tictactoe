import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const UserListDisplay = ({
    users = ['Rick', 'Morty', 'Summer', 'Beth', 'Jerry'],
}) => {
    // const { users } = useContext(ChatContext);
    return (
        <Container
            style={{
                fontSize: '1.2em',
                width: '12vw',
            }}
            className="user-list"
        >
        {users.map((user) => (
            <Row key={user} className="user">
                <Col>{user}</Col>
            </Row>
        ))}
        </Container>
    );
}
export default UserListDisplay;