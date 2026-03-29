import type { Task } from "../types/task";
import { getTaskStatus, getTaskStatusLabel } from "../utils/reminder";

interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (taskId: number) => void;
  onComplete: (taskId: number) => void;
}

function TaskCard({ task, onEdit, onDelete, onComplete }: TaskCardProps) {
  const status = getTaskStatus(task);
  const statusLabel = getTaskStatusLabel(task);
  const priorityClass = `priority-badge priority-${task.priority.toLowerCase()}`;
  const warningClass = status === "overdue" ? "overdue" : status === "today" ? "due-today" : "";
  const statusToneClass =
    status === "completed"
      ? "status-completed"
      : status === "overdue"
        ? "status-overdue"
        : status === "today"
          ? "status-today"
          : "status-upcoming";

  return (
    <article className={`task-card ${warningClass}`}>
      <div className="task-top-row">
        <h3 className={task.completed ? "completed-text" : ""}>{task.title}</h3>
        <span className={priorityClass}>{task.priority}</span>
      </div>

      <p className={`task-description ${task.completed ? "completed-text" : ""}`}>{task.description}</p>

      <div className="task-meta">
        <span>Due: {task.dueDate}</span>
        <span className={`status-chip ${statusToneClass}`}>Status: {statusLabel}</span>
      </div>

      <div className="task-actions">
        <button
          type="button"
          className={`btn small ${task.completed ? "ghost" : "success"}`}
          onClick={() => onComplete(task.id)}
          disabled={task.completed}
        >
          {task.completed ? "Completed" : "Complete"}
        </button>
        <button type="button" className="btn small" onClick={() => onEdit(task)}>
          Edit
        </button>
        <button type="button" className="btn small danger" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </article>
  );
}

export default TaskCard;

