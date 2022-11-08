import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const GameCard = ({
    gameName = 'Tic-tac-toe',
    roomName = ['RICK_TAC_TOE'],
    image = null,
    description = "Some quick example text to build on the card title and make up the bulk of the card's content.",
    players = ['Rick'],
    joinable = true,
}) => {
    return (
        <Card style={{ width: '18rem' }}>
            {image && <Card.Img variant="top" src={image} />}
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
                <Card.Title>{gameName} in room: {roomName}</Card.Title>
                <Card.Text>
                {description}
                <br />
                <p>Players:</p>
                <li>Rick</li>
                <li>Livvy</li>
                </Card.Text>
                {joinable ? (
                    <Button style={{float: 'right'}}variant="primary">Join</Button>
                ) : null}
            </Card.Body>
        </Card>
    )
}
export default GameCard;