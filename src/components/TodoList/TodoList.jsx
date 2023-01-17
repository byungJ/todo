import React, { useEffect, useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css';

export default function TodoList({ filter }) {
    const [todos, setTodos] = useState(() => {
        // readTodosFromLocalStorage()
        const todos = localStorage.getItem('todos');
        return todos ? JSON.parse(todos) : [];
    });

    

    useEffect(() => {
        // localStorage 에는 문자열만 저장됩니다.
        // localStorage에 객체나 배열를 저장하기 위해서는 
        // 객체를 문자열로 변환해서 저장해야 합니다.
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const handleAdd = (todo) => {
        // 새로운 투두를 업데이틑 해야합니다.
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

// function readTodosFromLocalStorage() {
//     const todos = localStorage.getItem('todos');
//     return todos ? JSON.parse(todos) : [];
// }