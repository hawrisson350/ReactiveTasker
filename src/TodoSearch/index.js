import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';

function TodoSearch() {

    const { searchValue, setSearchValue } = React.useContext(TodoContext);

    return (
        <div className="TodoSearchContainer">
            <div className="inputWrapper">
                <label className="searchLabel" htmlFor="searchInput">
                    <span className="material-symbols-outlined">
                        search
                    </span>
                </label>
                <input id="searchInput" className="textInput" type="text" placeholder="Hacer la paz mundial"
                    value={searchValue}
                    onChange={(event) => {
                        setSearchValue(event.target.value);
                    }} />
            </div>
        </div>
    );
}

export { TodoSearch };