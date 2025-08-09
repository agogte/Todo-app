import React from 'react';
import './App.css';
import { TodoList } from './TodoList/todoList';


function App() {
  return (
    <div style={{
      height: 600,
      maxWidth: 480,
      margin: '3rem auto',
      background: '#fff',
      borderRadius: 16,
      boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      padding: '2rem 1.5rem 0 1.5rem',
    }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <TodoList />
      </div>
      <footer style={{
        marginTop: 'auto',
        padding: '1rem 0',
        textAlign: 'center',
        background: '#f8f8f8',
        fontSize: '1rem',
        color: '#333',
        borderTop: '1px solid #eee',
        borderRadius: '0 0 16px 16px',
      }}>
        Made by Advait Gogte with <span style={{color: 'red', fontWeight: 600}}>&hearts;</span> and Vanilla Framework
      </footer>
    </div>
  );
}

      export default App;
