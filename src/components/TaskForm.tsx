import { useEffect, useState } from "react";
import type { Task, TaskFormInput, TaskPriority } from "../types/task";

interface TaskFormProps {
  editingTask: Task | null;
  onAddTask: (input: TaskFormInput) => void;
  onEditTask: (taskId: number, input: TaskFormInput) => void;
  onCancelEdit: () => void;
}

const defaultForm: TaskFormInput = {
  title: "",
  description: "",
  dueDate: "",
  priority: "Medium",
};

const priorities: TaskPriority[] = ["High", "Medium", "Low"];

function TaskForm({ editingTask, onAddTask, onEditTask, onCancelEdit }: TaskFormProps) {
  const [form, setForm] = useState<TaskFormInput>(defaultForm);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (editingTask) {
      setForm({
        title: editingTask.title,
        description: editingTask.description,
        dueDate: editingTask.dueDate,
        priority: editingTask.priority,
      });
      setError("");
    } else {
      setForm(defaultForm);
      setError("");
    }
  }, [editingTask]);

  const updateField = <K extends keyof TaskFormInput>(key: K, value: TaskFormInput[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const validate = (): boolean => {
    if (!form.title.trim()) {
      setError("Title is required.");
      return false;
    }
    if (!form.description.trim()) {
      setError("Description is required.");
      return false;
    }
    if (!form.dueDate) {
      setError("Due date is required.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    if (editingTask) {
      onEditTask(editingTask.id, form);
    } else {
      onAddTask(form);
    }

    setForm(defaultForm);
  };

  return (
    <section className="card">
      <h2>{editingTask ? "Edit Task" : "Add New Task"}</h2>
      <form className="task-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-field">
            <label htmlFor="title">Title *</label>
            <input
              id="title"
              className="text-input"
              type="text"
              value={form.title}
              onChange={(event) => updateField("title", event.target.value)}
              placeholder="Enter task title"
            />
          </div>

          <div className="form-field">
            <label htmlFor="dueDate">Due Date *</label>
            <input
              id="dueDate"
              className="text-input"
              type="date"
              value={form.dueDate}
              onChange={(event) => updateField("dueDate", event.target.value)}
            />
          </div>

          <div className="form-field">
            <label htmlFor="priority">Priority *</label>
            <select
              id="priority"
              className="text-input"
              value={form.priority}
              onChange={(event) => updateField("priority", event.target.value as TaskPriority)}
            >
              {priorities.map((priority) => (
                <option key={priority} value={priority}>
                  {priority}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="description">Description *</label>
          <textarea
            id="description"
            className="text-input textarea"
            value={form.description}
            onChange={(event) => updateField("description", event.target.value)}
            placeholder="Enter task description"
          />
        </div>

        {error && <p className="form-error">{error}</p>}

        <div className="form-actions">
          <button type="submit" className="btn primary">
            {editingTask ? "Update Task" : "Add Task"}
          </button>
          {editingTask && (
            <button type="button" className="btn ghost" onClick={onCancelEdit}>
              Cancel Edit
            </button>
          )}
        </div>
      </form>
    </section>
  );
}

export default TaskForm;

