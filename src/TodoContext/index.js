import React from 'react';
import { useLocalStorage } from './useLocalstorage';

const TodoContext = React.createContext();

function TodoProvider({ children }) {

    const {
        items: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage('todos', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    const completedTodos = todos.filter(todo => !!todo.completed)?.length;
    const totalTodos = todos.length;

    const searchedTodos = todos.filter((todo) => {
        const todoText = todo.text.toLocaleLowerCase();
        const searchValueText = searchValue.toLocaleLowerCase();
        return todoText.includes(searchValueText);
    });

    const addTodo = (newTodoText) => {
        const newTodos = [...todos];

        newTodos.push({
            text: newTodoText,
            completeTodo: false,
        });
        saveTodos(newTodos)
    };

    const completeTodo = (todoIndex) => {
        const newTodos = [...todos];

        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos)
    };

    const deleteTodo = (todoIndex) => {
        const newTodos = [...todos];

        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos)
    };

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo,
        }}>
            {children}
        </TodoContext.Provider>
    );
};

export { TodoContext, TodoProvider };