// import { random } from "lodash"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import COLOR_NAMES, { getColor } from "../../colors/colors";

const ListRow = ({
    content,
    action,
    colorSet,
    borderColor,
}) => {
    // const content = random(false);
    return (
        <Row
            style={{
                border: `1px solid ${colorSet[1]}`,
            }}
            key={`row_${content}_${Math.floor(Math.random() * 100000)}`}
            className="list-row"
        >
            <Col
                key={`col_${content}_${Math.floor(Math.random()*100000)}`}
                style={{
                    backgroundColor: colorSet[0],
                    color: colorSet[1],
                }}
            >{content}</Col>
        </Row>
    )
}

export default ListRow;