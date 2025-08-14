import React, { useState } from "react";
import { Task } from "../models/Task";
import { TaskStatus } from "../models/task-completed-enum";
import styles from "./todoItem.module.css";
import ConfirmDialog from "./ConfirmDialog";

interface TodoItemProps {
    task: Task;
    toggleTask: (id: number) => void;
    deleteTask: (id: number) => void;
}

function useIsMobile(maxWidth = 600) {
    const [isMobile, setIsMobile] = React.useState(() => window.innerWidth <= maxWidth);
    React.useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= maxWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [maxWidth]);
    return isMobile;
}

export const TodoItem: React.FC<TodoItemProps> = ({ task, toggleTask, deleteTask }) => {
    const isMobile = useIsMobile();
    const [showConfirm, setShowConfirm] = useState(false);

    const handleDeleteClick = () => {
        setShowConfirm(true);
    };

    const handleConfirm = () => {
        deleteTask(task.id);
        setShowConfirm(false);
    };

    const handleCancel = () => {
        setShowConfirm(false);
    };

    return (
        <li className={`p-todo-item ${task.status === TaskStatus.Completed ? 'u-text--muted u-text--strikethrough' : ''} ${styles.relative}`}>
            <span onClick={() => toggleTask(task.id)} style={{ cursor: 'pointer' }}>{task.text}</span>
            <button
                className={`${isMobile ? 'p-tooltip--btm-center' : 'p-tooltip--right'} p-button--negative u-float-right is-small`}
                style={{ marginLeft: '1rem', padding: '2px 6px', fontSize: '0.8rem', lineHeight: 1, marginRight: '18px' }}
                onClick={handleDeleteClick}
                aria-describedby={`delete-tooltip-${task.id}`}
            >
                x
                <span className="p-tooltip__message" role="tooltip" id={`delete-tooltip-${task.id}`}>
                    Delete
                </span>
            </button>
            {showConfirm && (
                <ConfirmDialog
                    text="Are you sure you want to delete this task?"
                    onCancel={handleCancel}
                    onConfirm={handleConfirm}
                />
            )}
        </li>
    )
}