import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css';

export default function TodoList({ filter }) {
    const [todos, setTodos] = useState([
        { id: '123', text: 'react마스터 하기', status: 'active' },
        { id: '124', text: '프런트 마스터 하기', status: 'active' },
    ]);

    const handleAdd = (todo) => {
        // 새로운 투두를 업데이틑 해야합니다.
        console.log(todo);
        setTodos([...todos, todo]);
    }
 
    const handleUpdate = (updated) => {
        console.log('updated')
        setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
    }

    const handleDelete = (deleted) => {
        setTodos(todos.filter((t) => t.id !== deleted.id));
    }

    const filtered = getFilteredItems(todos, filter);

    return (
        <section className={styles.container}>
            <ul className={styles.list}>
                {
                    filtered.map(item => <Todo key={item.id} todo={item} onUpdate={handleUpdate} onDelete={handleDelete}/>
                )}
            </ul>
            <AddTodo onAdd={handleAdd}/>
        </section>
    );
}

function getFilteredItems(todos, filter) {
    if (filter === 'all') {
        return todos;
    }
    return todos.filter(todo => todo.status === filter);
}