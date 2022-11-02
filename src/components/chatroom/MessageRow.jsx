// import { SpaceStates } from "./constants";

const MessageRow = ({
    id,
    username,
    message,
    color,
}) => {
    return (
        <div className="message-row">
            <div className="message-username" style={{ color }}>
                {username}
            </div>
            <div className="message-text">{message}</div>
        </div>
    );
}
export default MessageRow;