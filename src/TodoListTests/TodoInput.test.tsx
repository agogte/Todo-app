import { render, screen, fireEvent } from '@testing-library/react';
import { TodoInput } from '../TodoList/todoInput';

describe('TodoInput Component', () => {
    const mockSetInput = jest.fn();
    const mockAddTask = jest.fn();

    test('renders input and button', () => {
        render(<TodoInput input="" setInput={mockSetInput} addTask={mockAddTask} />);
        expect(screen.getByPlaceholderText('Add a task')).toBeInTheDocument();
        expect(screen.getByRole('button', {name: /add/i})).toBeInTheDocument();
    });

    test('Updates input value on change', () => {
        render(<TodoInput input="" setInput={mockSetInput} addTask={mockAddTask} />);
        const input = screen.getByPlaceholderText('Add a task');
        fireEvent.change(input, { target: {value: 'New Task'}});
        expect(mockSetInput).toHaveBeenCalledWith('New Task');
  });

  test('calls addTask on button click', () => {
    render(<TodoInput input="New Task" setInput={mockSetInput} addTask={mockAddTask} />);
    const button = screen.getByRole('button', { name: /add/i });
    fireEvent.click(button);
    expect(mockAddTask).toHaveBeenCalled();
  });
});