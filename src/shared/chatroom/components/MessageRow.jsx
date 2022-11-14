import Badge from 'react-bootstrap/esm/Badge';
import _uniqueId from 'lodash/uniqueId';

const MessageRow = ({
    message,
    thisUser,
}) => {
    const {
        userId,
        userName,
        content,
        timestamp,
    } = message;
    let backgroundImage = 'linear-gradient(#eef, #ddf)';
    let border = '2px solid white';
    let msgclass = "message-row"
    if (userName === thisUser) {
        backgroundImage = 'linear-gradient(#fee, #fdd)';
        border = '2px solid gold';
        msgclass = "my-message-row"
    }
    return (
        <div
            key={_uniqueId(timestamp)}
            className={msgclass}
            style={{
                backgroundImage,
                border
            }}
        >
            <div
                style={{
                    margin: '1rem',
                    display: 'inline',
                    minWidth: '5rem'
                }}
                className="message-username"
            >
                <Badge
                    style={{
                        marginTop: '0.4rem',
                        backgroundColor: 'white !important',
                    }}
                >
                    {userName} ({userId})
                </Badge>
                
            </div>
            <span>{content}</span>&nbsp;&nbsp;<span style={{ color: 'lightgray'}}>{timestamp}</span>

        </div>
    );
}
export default MessageRow;