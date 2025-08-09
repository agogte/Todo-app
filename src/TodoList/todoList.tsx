import { useState } from 'react';
import { Task, toggleStatus } from '../models/Task';
import { TaskStatus } from '../models/task-completed-enum';
import { TodoInput } from './todoInput';
import { TodoItem } from './todoItem';

export const TodoList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [input, setInput] = useState<string>('');

    const addTask = () => {
        if(input.trim()){
            setTasks([
                ...tasks,
                {id: Date.now(), text: input, status: TaskStatus.Pending, isDeleted: false}
            ]);
            setInput('')
        }
    };

    const toggleTask = (id: number) => {
        setTasks(tasks.map(task => (task.id === id ? toggleStatus(task) : task)))
    };

    const deleteTask = (id: number) => {
        setTasks(tasks.map((task: Task) =>
            task.id === id ? { ...task, isDeleted: true } : task
        ));
    };

    return (
        <div className="p-strip p-todo-container u-no-margin--top">
            <h1 className='p-heading--4 u-text--center'>Todo List</h1>
            <TodoInput input={input} setInput={setInput} addTask={addTask} />
            <ul className='p-todo-list'>
                {
                    tasks.filter(task => !task.isDeleted).map(task => (
                        <TodoItem key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} />
                    ))
                }
            </ul>
        </div>
    )
}