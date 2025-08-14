import React from 'react';
import './App.css';
import { TodoList } from './TodoList/todoList';


function App() {
  return (
  <div className="app-container-responsive">
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <TodoList />
      </div>
      <footer style={{
        marginTop: 'auto',
        padding: '1rem 0',
        textAlign: 'center',
        fontSize: '1rem',
        width: '100%',
        color: 'rgb(51,51,51)',
        borderTop: '1px solid #eee',
        borderRadius: '0 0 16px 16px',
      }}>
        Made by Advait Gogte with <span style={{color: 'red', fontWeight: 600}}>&hearts;</span> and Vanilla Framework
      </footer>
    </div>
  );
}

      export default App;
