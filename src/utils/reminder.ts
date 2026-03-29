import type { Task } from "../types/task";

export type TaskStatus = "completed" | "overdue" | "today" | "upcoming";

// 3.1 implementation logic: compare YYYY-MM-DD strings directly.
export function getTaskStatus(task: Task): TaskStatus {
  const today = new Date().toISOString().split("T")[0];
  if (task.completed) return "completed";
  if (task.dueDate < today) return "overdue";
  if (task.dueDate === today) return "today";
  return "upcoming";
}

export function getTaskStatusLabel(task: Task): string {
  const status = getTaskStatus(task);
  if (status === "completed") return "Completed";
  if (status === "overdue") return "Overdue";
  if (status === "today") return "Due Today";
  return "Upcoming";
}

