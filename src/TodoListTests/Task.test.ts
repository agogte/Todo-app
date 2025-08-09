import { Task, toggleStatus } from "../models/Task"
import { TaskStatus } from "../models/task-completed-enum"

const task: Task = { 
    id: 1,
    text: 'Test Task',
    status: TaskStatus.Pending,
    isDeleted: false
}

const toggledTask: Task = toggleStatus(task)

describe('Task Utility', () => {
    test('toggleStatus toggles Pending to Completed', () => {
        expect(toggledTask.status).toBe(TaskStatus.Completed);
        expect(toggledTask.id).toBe(task.id);
        expect(toggledTask.text).toBe(task.text);
    });

    test('toggleStatus returns a new object', () => {
        expect(toggledTask).not.toBe(task)
    })
})