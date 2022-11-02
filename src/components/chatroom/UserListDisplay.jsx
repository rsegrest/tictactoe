const UserListDisplay = ({
    users = ['Rick', 'Morty', 'Summer', 'Beth', 'Jerry'],
}) => {
    // const { users } = useContext(ChatContext);
    return (
        <div className="user-list">
        {users.map((user) => (
            <div key={user} className="user">
            {user}
            </div>
        ))}
        </div>
    );
}