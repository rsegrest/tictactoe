import Badge from 'react-bootstrap/esm/Badge';

const MessageRow = ({
    message,
    thisUser
}) => {
    const {
        id,
        username,
        content,
    } = message;
    let backgroundImage = 'linear-gradient(#eef, #ddf)';
    let border = '2px solid white';
    let msgclass = "message-row"
    if (username === thisUser) {
        backgroundImage = 'linear-gradient(#fee, #fdd)';
        border = '2px solid gold';
        msgclass = "my-message-row"
    }
    return (
        <div
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
                    {username} ({id})
                </Badge>
                
            </div>
            <span>{content}</span>

        </div>
    );
}
export default MessageRow;