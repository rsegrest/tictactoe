import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import ListRow from './ListRow';
import '../../chatroom.css';

const UserListDisplay = ({
    roomUsers,
}) => {
    // const { users } = useContext(ChatContext);
    // console.log('UserListDisplay : roomUsers', roomUsers);
    return (
        <Container
            style={{
                fontSize: '1.2em',
                width: '12vw',
            }}
            className="user-list"
        >
        {roomUsers.map((user) => (
            <ListRow content={user} />
        ))}
        </Container>
    );
}
export default UserListDisplay;