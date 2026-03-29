import type { Task } from "../types/task";

const TASKS_STORAGE_KEY = "tasksense_tasks";
const TASKS_SEEDED_KEY = "tasksense_seeded";

const sampleTasks: Task[] = [
  {
    id: Date.now() - 5,
    title: "Submit project documentation",
    description: "Complete and submit all project documents including design diagrams and code explanations.",
    dueDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
    priority: "High",
    completed: false,
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: Date.now() - 4,
    title: "Review React fundamentals",
    description: "Study useState, useEffect, and component lifecycle for viva preparation.",
    dueDate: new Date().toISOString().slice(0, 10),
    priority: "High",
    completed: false,
    createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: Date.now() - 3,
    title: "Prepare viva presentation",
    description: "Create slides explaining TaskSense architecture, localStorage, and TypeScript benefits.",
    dueDate: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
    priority: "High",
    completed: false,
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: Date.now() - 2,
    title: "Test all app features",
    description: "Verify add, edit, delete, complete, search, and filter functionality works correctly.",
    dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
    priority: "Medium",
    completed: false,
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: Date.now() - 1,
    title: "Practice explaining code",
    description: "Be ready to explain Task type, utility functions, and modular architecture during viva.",
    dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
    priority: "Low",
    completed: false,
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

export function saveTasks(tasks: Task[]): void {
  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
}

export function loadTasks(): Task[] {
  const raw = localStorage.getItem(TASKS_STORAGE_KEY);
  try {
    if (raw) {
      const parsed = JSON.parse(raw) as Task[];
      if (Array.isArray(parsed)) {
        return parsed;
      }
    }
  } catch {
    // If malformed data exists, reset to empty list.
    localStorage.removeItem(TASKS_STORAGE_KEY);
  }

  const seeded = localStorage.getItem(TASKS_SEEDED_KEY) === "true";
  if (!seeded) {
    saveTasks(sampleTasks);
    localStorage.setItem(TASKS_SEEDED_KEY, "true");
    return sampleTasks;
  }

  return [];
}

