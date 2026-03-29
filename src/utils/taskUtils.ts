import type { Task, TaskFilter, TaskFormInput } from "../types/task";
import { getTaskStatus } from "./reminder";
import { saveTasks, loadTasks as loadFromStorage } from "./storage";

// Re-export loadTasks from storage
export const loadTasks = loadFromStorage;

// 3.1 Implementation-style signature
export function createTask(
  title: string,
  description: string,
  dueDate: string,
  priority: Task["priority"],
): Task {
  return {
    id: Date.now(),
    title: title.trim(),
    description: description.trim(),
    dueDate,
    priority,
    completed: false,
    createdAt: new Date().toISOString(),
  };
}

export function addTask(tasks: Task[], task: Task): Task[] {
  const updatedTasks = [...tasks, task];
  saveTasks(updatedTasks);
  return updatedTasks;
}

export function updateTask(tasks: Task[], taskId: number, updates: TaskFormInput): Task[] {
  const updatedTasks = tasks.map((task) =>
    task.id === taskId
      ? {
          ...task,
          title: updates.title.trim(),
          description: updates.description.trim(),
          dueDate: updates.dueDate,
          priority: updates.priority,
        }
      : task,
  );
  saveTasks(updatedTasks);
  return updatedTasks;
}

export function deleteTask(tasks: Task[], taskId: number): Task[] {
  const updatedTasks = tasks.filter((task) => task.id !== taskId);
  saveTasks(updatedTasks);
  return updatedTasks;
}

export function completeTask(tasks: Task[], taskId: number): Task[] {
  const updatedTasks = tasks.map((task) =>
    task.id === taskId
      ? {
          ...task,
          completed: true,
        }
      : task,
  );
  saveTasks(updatedTasks);
  return updatedTasks;
}

export function toggleCompleteTask(tasks: Task[], taskId: number): Task[] {
  const updatedTasks = tasks.map((task) =>
    task.id === taskId
      ? {
          ...task,
          completed: !task.completed,
        }
      : task,
  );
  saveTasks(updatedTasks);
  return updatedTasks;
}

export function filterTasks(tasks: Task[], filter: TaskFilter): Task[] {
  switch (filter) {
    case "Pending":
      return tasks.filter((task) => !task.completed);
    case "Completed":
      return tasks.filter((task) => task.completed);
    case "Overdue":
      return tasks.filter((task) => getTaskStatus(task) === "overdue");
    case "All":
    default:
      return tasks;
  }
}

export function searchTasks(tasks: Task[], term: string): Task[] {
  const query = term.trim().toLowerCase();
  if (!query) return tasks;
  return tasks.filter((task) => task.title.toLowerCase().includes(query));
}

