import { fireEvent, render, screen } from "@testing-library/react";
import { Task } from "../models/Task";
import { TaskStatus } from "../models/task-completed-enum";
import { TodoItem } from "../TodoList/todoItem";

describe('TodoItem Component', () => {
  const mockToggleTask = jest.fn();
  const mockDeleteTask = jest.fn();
  const task: Task = { id: 1, text: 'Test Task', status: TaskStatus.Pending, isDeleted: false };

  test('renders task text', () => {
    render(<TodoItem task={task} toggleTask={mockToggleTask} deleteTask={mockDeleteTask} />);
    expect(screen.getByText('Test Task')).toBeInTheDocument();
  });

  test('does not apply u-text--muted class when task is pending', () => {
    render(<TodoItem task={task} toggleTask={mockToggleTask} deleteTask={mockDeleteTask} />);
    const li = screen.getByText('Test Task');
    expect(li).not.toHaveClass('u-text--muted');
  });

  test('calls toggleTask on text click', () => {
    render(<TodoItem task={task} toggleTask={mockToggleTask} deleteTask={mockDeleteTask} />);
    const text = screen.getByText('Test Task');
    fireEvent.click(text);
    expect(mockToggleTask).toHaveBeenCalledWith(task.id);
  });

  test('calls deleteTask on delete button click', () => {
    render(<TodoItem task={task} toggleTask={mockToggleTask} deleteTask={mockDeleteTask} />);
    const button = screen.getByRole('button', { name: /x/i });
    fireEvent.click(button);
    expect(mockDeleteTask).toHaveBeenCalledWith(task.id);
  });
});