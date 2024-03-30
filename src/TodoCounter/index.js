import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {

    const {
        totalTodos: total,
        completedTodos: completed
    } = React.useContext(TodoContext);

    const currentDate = new Date();
    return (
        <div className='todoCounterWrap'>
            <h2>Hoy, {currentDate.toLocaleDateString('es-CO')}</h2>
            <h1>Hola, Hawrisson</h1>
            {
                completed === total
                    ? <h3>Has completado todas la tareas</h3>
                    : <h3>Tienes <b>{completed}</b> tareas completados de <b>{total}</b></h3>

            }
        </div>
    );
}

export { TodoCounter };