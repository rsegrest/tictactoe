import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import ListRow from './ListRow';
import '../../chatroom.css';
import { cycleColor } from '../../../shared/colors/colors';

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
        {roomUsers.map((user) => {
            // cycleColor.increment()
            // console.log(`cycleColor : ${cycleColor.getNextHexColor()}`)
            const colorSet = cycleColor.getNextColorSet();
            return (
            <ListRow
                key={`user_${user}`}
                content={user}
                colorSet={colorSet}
                borderColor={'black'}
            />
        )})}
        </Container>
    );
}
export default UserListDisplay;