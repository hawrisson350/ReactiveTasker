
const styles = {
    border: 'none',
    display: ' inline-flex',
    justifyContent: ' center',
    alignItems: ' center',
    width: ' 100%',
    height: ' 100px',
    backgroundColor: ' #FFD388',
    borderRadius: ' 15px 15px',
    boxShadow: ' 0px 3px  0px rgba(0, 0, 0, 0.2)',
    padding: ' 5px',
    flexDirection: 'row',
};
function CreateTodoButton( {setOpenModal}) {
    return (
        <button style={styles} onClick={
            ()=> {
                setOpenModal(state=>!state)
            }}>
            <span style={{fontSize: '50px'}} className="material-symbols-outlined">
                add
            </span>
        </button>
    );
}

export { CreateTodoButton };









