import './TodoItem.css';
function TodoItem(props) {
    return (
        <li className={`itemWrap ${props.completed?'completed':''}`}>
            <span className='itemCheck' onClick={props.onComplete}>
                <span className="material-symbols-outlined">
                    done
                </span>
            </span>
            <p className="itemText">{props.text}</p>
            <span className='itemClose' onClick={props.onDelete}>
                <span className="material-symbols-outlined">
                    close
                </span>
            </span>
        </li>
    );
}

export { TodoItem };