import React from 'react';
import ReactDOM from 'react-dom';

import './Modal.css';
import { TodoContext } from '../TodoContext';

function Modal({ children }) {

    const {
        setOpenModal,
    } = React.useContext(TodoContext);

    return (ReactDOM.createPortal(
        <div className='modalWrapper'>

            <div className='modalWrap'>
                <button className="modalCloseBtn" onClick={
                    () => {
                        setOpenModal(state => !state)
                    }}>
                    <span style={{ fontSize: '40px' }} className="material-symbols-outlined">
                        close
                    </span>
                </button>
                <div className='modalContentWrap'>
                    {children}
                </div>
            </div>
        </div>,
        document.getElementById('modalMainWrap')
    ));
}
export { Modal };