import { useEffect, useState } from 'react';
import './App.css';
import { TodoAdd } from './components/todo-add';
import TodoList from './components/todo-list';
import { getTodos } from './services/data';
import type { Todo } from './types';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    getTodos().then(fetchedTodos => {
      setTodos(fetchedTodos);
    }).catch(error => {
      console.error("Failed to fetch todos:", error);
    });
  }, []);

  const handleToggle = (id: number) => {
    setTodos(prevTodos =>
      prevTodos?.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    )
  };

  const handleDelete = (id: number) => {
    setTodos(prevTodos => prevTodos?.filter(todo => todo.id !== id));
  };

  const handleAdd = (title: string) => {
    setTodos(prevTodos => [
      ...prevTodos,
      {
        id: prevTodos?.length ? prevTodos?.length + 1 : 1,
        title,
        completed: false
      }
    ])
  }

  return (
    <div className="container flex flex-col items-center justify-center w-full">
      <div className="max-w-xl w-full px-2 py-4">
        <h2 className="text-4xl font-bold text-left">Your To Do</h2>

        <TodoAdd onAdd={handleAdd} />

        <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle} />
      </div>
    </div>
  )
}

export default App;
