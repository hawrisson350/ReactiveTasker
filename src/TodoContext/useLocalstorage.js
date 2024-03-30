import React from 'react';

// const defaultTodos = [
//   { text: "cortar tomate", completed: true },
//   { text: "tomar awa", completed: false },
//   { text: "medir bien", completed: false },
//   { text: "cortar peras", completed: false },
// ];
// localStorage.setItem('todos', JSON.stringify(defaultTodos));

function useLocalStorage(itemName, initialValue) {

    const [items, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;
                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify([]));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem);
                }
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(true);
            }
        }, 2000);
    }, []);

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem))
        setItem(newItem)
    };

    return {
        items,
        saveItem,
        loading,
        error,
    };
}

export { useLocalStorage };