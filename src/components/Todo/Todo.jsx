import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import styles from './Todo.module.css';

export default function Todo({ todo, onUpdate, onDelete }) {

    const { text, status, id } = todo;
    const [pretext, setText] = useState(text);
    const handleChange = (e) => {
        const status = e.target.checked ? 'completed' : 'active';
        onUpdate({...todo, status : status})
    }

    const handleDelete = (e) => {
        onDelete(todo);
    }

    const [type, setType] = useState(false)

    const handleModify = (e) => {
        setType(true)
    }

    const handleKey = (e) => {
        if(e.key === 'Enter') {
            console.log('enter')
            onUpdate({...todo, text : pretext})
            setType(false)
        }
    }

    const handleText = (e) => {
        console.log('pressed')
        setText(e.target.value);
    }

    return (
        <li className={styles.todo}>
            <input className={styles.checkbox} type='checkbox' id={id} checked={ status === 'completed' } onChange={handleChange}/>
            {
                type ? <input onChange={handleText} onKeyDown={handleKey} className={styles.text} value={pretext} autoFocus/>
                : <label onDoubleClick={handleModify} className={styles.text}>{text}</label>
            }
            <span className={styles.icon}>
                <button onClick={handleDelete} className={styles.button}><FaTrashAlt/></button>
            </span>
        </li>
    );
}

