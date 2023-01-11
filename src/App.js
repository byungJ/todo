import React, { useState } from 'react';
import './App.css';
import { DarkModeProvider } from './components/context/DarkModeContext';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';


// 어플리케이션이 가지고 있는 전체 필터
const filters = ['all', 'active', 'completed'];
export default function App() {
  
  // 현재 선택 된 필터
  const [filter, setFilter] = useState(filters[0]);

  return (
    <DarkModeProvider>
      <Header filters={filters} filter={filter} onFilterChange={filter => setFilter(filter)}/>
        {/* 전달하는 인자 값과 호출하는 값이 같으므로 위의 코드와 밑의 코드는
        같은 코드 입니다. 
        onFilterChange= {setFilter} */}
        <TodoList filter={filter}/>
    </DarkModeProvider>
  );
}

