function TodoList({ children }) {
    return (
        <ul style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            padding:0
        }}>
            {children}
        </ul>
    );
}

export { TodoList };