interface TodoInputProps {
    input: string,
    setInput: (value: string) => void;
    addTask: () => void;
}

export const TodoInput: React.FC<TodoInputProps> = ({input, setInput, addTask}) => {
    return (
        <div className='p-todo-input'>
            <input type="text"
            value={input}
            className='p-form-text'
            onChange={(e) => setInput(e.target.value)}
            maxLength={35}
            placeholder="Add a task"
            />
        <button onClick={addTask} className='p-button--positive'>Add</button>
        </div>
    )
}