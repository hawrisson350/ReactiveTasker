import React from "react";
import './TodoForm.css';
import { TodoContext } from '../TodoContext';

function TodoForm() {

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const cmOnSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false)
    };

    const cmOnCancel = (event) => {
        event.preventDefault();
        setOpenModal(false)
    };

    const cmOnChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    return (
        <form className="todoFormMainWrap"
            onSubmit={cmOnSubmit}>
            <label>Escribe una nueva tarea</label>
            <textarea rows="4" placeholder="Cortar cebolla"
                value={newTodoValue}
                onChange={cmOnChange} />
            <div className="formBtnWrap">
                <button type="button" className="todoFormBtnCancel" onClick={cmOnCancel}>Cancelar</button>
                <button type="submit" className="todoFormBtnAccept">Agregar</button>
            </div>
        </form>
    )
}
export { TodoForm };