import type { Task } from "../types/task";
import TaskCard from "./TaskCard";

interface TaskListProps {
  tasks: Task[];
  onEditTask: (task: Task) => void;
  onDeleteTask: (taskId: number) => void;
  onCompleteTask: (taskId: number) => void;
}

function TaskList({ tasks, onEditTask, onDeleteTask, onCompleteTask }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <section className="empty-state card">
        <h3>No tasks found</h3>
        <p>Start by adding your first task using the form above.</p>
      </section>
    );
  }

  return (
    <section className="task-list">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onEdit={onEditTask}
          onDelete={onDeleteTask}
          onComplete={onCompleteTask}
        />
      ))}
    </section>
  );
}

export default TaskList;

