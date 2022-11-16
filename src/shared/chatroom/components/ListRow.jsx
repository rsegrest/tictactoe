// import { random } from "lodash"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ListRow = ({
    content,
    action,
}) => {
    // const content = random(false);
    return (
        <Row key={content} className="list-row">
            <Col>{content}</Col>
        </Row>
    )
}

export default ListRow;