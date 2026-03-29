export type TaskPriority = "High" | "Medium" | "Low";

export interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  priority: TaskPriority;
  completed: boolean;
  createdAt: string;
}

export interface TaskFormInput {
  title: string;
  description: string;
  dueDate: string;
  priority: TaskPriority;
}

export type TaskFilter = "All" | "Pending" | "Completed" | "Overdue";

