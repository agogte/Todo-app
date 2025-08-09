import { Task } from "../models/Task";
import { TaskStatus } from "../models/task-completed-enum";

interface TodoItemProps {
    task: Task;
    toggleTask: (id: number) => void;
    deleteTask: (id: number) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ task, toggleTask, deleteTask }) => {
    return (
        <li className={`p-todo-item ${task.status === TaskStatus.Completed ? 'u-text--muted u-text--strikethrough' : ''}`}>
            <span onClick={() => toggleTask(task.id)} style={{ cursor: 'pointer' }}>{task.text}</span>
            <button
                className="p-button--negative u-float-right"
                style={{ marginLeft: '1rem', padding: '2px 6px', fontSize: '0.8rem', lineHeight: 1, marginRight: '18px' }}
                onClick={() => deleteTask(task.id)}
            >
                x
            </button>
        </li>
    )
}