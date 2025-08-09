import { TaskStatus } from "./task-completed-enum";

export interface Task {
    id: number;
    text: string;
    status: TaskStatus;
    isDeleted: boolean;
}

export let toggleStatus = (task: Task) : Task=> ({
    ...task,
    status: task.status === TaskStatus.Pending ? TaskStatus.Completed : TaskStatus.Pending
})
