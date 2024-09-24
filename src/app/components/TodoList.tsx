import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo } from '../reducers/todoSlice'; 
import { RootState } from '../store'; 

const TodoList: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch(addTodo(input.trim()));
      setInput('');
    }
  };

  const handleRemoveTodo = (index: number) => {
    dispatch(removeTodo(index));
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start', 
      justifyContent: 'center',
      minHeight: '100vh', 
      paddingLeft: '20px',
      backgroundImage: 'url("/bg1.jpg")',
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <div style={{
        marginLeft:'50px',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        maxWidth: '400px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}>
        <h1 style={{
            fontSize: '24px',
            marginBottom: '10px',
            textAlign: 'center',
            color: '#333',
            fontWeight: 'bold',
            }}>
                Todo List
            </h1>

        <div style={{ display: 'flex', marginBottom: '20px' }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a todo"
            style={{
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              marginRight: '10px',
              width: 'calc(100% - 100px)',
            }}
          />
          <button
            onClick={handleAddTodo}
            style={{
              padding: '8px 16px',
              borderRadius: '4px',
              backgroundColor: '#D903B3',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Add Todo
          </button>
        </div>
        <ul style={{
          marginTop: '20px',
          listStyleType: 'none',
          padding: '0',
          textAlign: 'left',
        }}>
          {todos.map((todo, index) => (
            <li key={index} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px 0',
            }}>
              {todo}
              <button
                onClick={() => handleRemoveTodo(index)}
                style={{
                  backgroundColor: 'transparent',
                  color: '#D903B3',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
