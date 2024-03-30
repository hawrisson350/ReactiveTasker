import React from 'react';
import './TodosLoading.css';

function TodosLoading() {

    return (
        <li className='itemWrapLoading'>
        <span className='itemCheckLoading'>
            <span className="material-symbols-outlined">
                done
            </span>
        </span>
        <p className="itemTextLoading"></p>
        <span className='itemCloseLoading'>
            <span className="material-symbols-outlined">
                close
            </span>
        </span>
    </li>
    );
}

export { TodosLoading };