import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const GameListDisplay = ({
    games = ['BlackJack', 'Connect Four', 'Keno', 'Roulette', 'Texas Hold\'em'],
}) => {
    // const { users } = useContext(ChatContext);
    return (
        <Container
            style={{
                fontSize: '1.2em',
                width: '12vw',
            }}
            className="game-list"
        >
        {games.map((game) => (
            <Row key={game} className="user">
                <Col>{game}</Col>
            </Row>
        ))}
        </Container>
    )
}
export default GameListDisplay;