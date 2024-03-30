import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from "../TodoSearch";
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { Modal } from '../Modal';
import { TodoContext } from '../TodoContext';
import { TodoForm } from '../TodoForm';

function AppUI() {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return (
        <div className='mainWrap'>
            <div className="contentWrapper">

                <TodoCounter />
                <TodoSearch />

                <TodoList>
                    {loading && (<>
                        <TodosLoading />
                        <TodosLoading />
                        <TodosLoading />
                    </>)}
                    {error && <TodosError />}
                    {((!loading && (searchedTodos.length === 0)) && <EmptyTodos />)}
                    {searchedTodos.map((todo, index) => (
                        <TodoItem
                            key={todo.text}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodo(index)}
                            onDelete={() => deleteTodo(index)} />
                    ))}
                </TodoList>

                <CreateTodoButton setOpenModal={setOpenModal} />
            </div>

            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
        </div>


    );

}

export { AppUI };