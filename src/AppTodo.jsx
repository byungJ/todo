import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';


export default function AppTodo() {

    let num = 1;
    const [todo, setTodo] = useState([]);
    const [context, setContext] = useState('');
    const [check, setCheck] = useState(false);

    const handleChange = (e) => {
        setContext(e.target.value);
    }

    const handleCheckbox = (e) => {
        
        const id = Number(e.target.id);
        const checked = e.target.checked;

        setTodo(todoItem => {
            const index = todoItem.findIndex(m => m.id === id);
            const find = todoItem.find(m => m.id === id);
            todoItem.splice(index, 1, {...find, complete : checked });
            return [...todoItem,];
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodo([...todo, {id : todo.length+1, context : context, complete : check }]);

        setContext('');
    }

    const handleDelete = (e) => {
        const id = Number(e.target.id);

        setTodo(todoItem => {
            const index = todoItem.findIndex(m => m.id === id);
            todoItem.splice(index, 1);
            console.log(id);
            return [...todoItem,];
        })
    }

    const handleNavBar = (e) => {
        const navbar = e.target.id;
        const todoItem = todo;

        console.log(e)
        
        switch(navbar) {
            case 'liAll': {
                setTodo((todo) => todo);
                break;
            }
            case 'liActive': {
                //todo
                
                break;
            }
            case 'liCompleted': {
                //(todo) => todo.filter((item) => (item.complete === true))
                break;
            }
            default: {
                break;
            }
        }
    }


    return (
        <div className='root'>

            <ul className='top-ul' onClick={handleNavBar}>
                <li id='liAll'>All</li>
                <li id='liActive'>Active</li>
                <li id='liCompleted'>Completed</li>
            </ul>

            {todo.map((item) => (
                <div className='todoList' key={item.id}>
                    <form>
                        <input id={item.id} type="checkbox" onClick={handleCheckbox}/>
                        <label htmlFor={item.id} style={check ? {textDecoration : 'line-through'} : {}}>{item.context}</label> 
                    </form>
                    <FiTrash2 onClick={handleDelete}/>
                </div>
            ))}
            
            <form onSubmit={handleSubmit}>
                <input type="search" name="context" id="todoTitle" placeholder='Add Todo' value={context} onChange={handleChange}/>
                <button>Add</button>
            </form>
        </div>
    );
}

