# TaskSense – Smart To-Do and Reminder Manager

> A college mini project built with **React**, **TypeScript**, **Vite**, and **pure CSS**.

---

## Project Goal

TaskSense is a lightweight, fully client-side task management web application.
It helps users create, organize, search, filter, and track daily tasks with visual priority indicators and reminder support — all without a backend, database, or authentication.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend Framework | React 18 |
| Language | TypeScript |
| Build Tool | Vite |
| Styling | Pure CSS (no frameworks) |
| Persistence | Browser localStorage |
| Runtime | Browser-only (no backend) |

---

## Features

- **Add Task** — title, description, due date, priority (High / Medium / Low)
- **Edit Task** — update any field inline
- **Delete Task** — remove with confirmation
- **Complete Task** — mark as done with visual strike-through
- **Persist Tasks** — all data saved to `localStorage`, survives page refresh
- **Task Status Detection**
  - Pending
  - Completed
  - Due Today
  - Overdue
  - Upcoming
- **Filter Tasks** — All / Pending / Completed / Overdue
- **Search Tasks** — live search by task title
- **Priority Highlighting**
  - 🔴 High → Red
  - 🟠 Medium → Orange
  - 🟢 Low → Green
  - 📅 Due Today → Special highlight
  - ⚠️ Overdue → Warning styling
- **Empty State UI** — clean message when no tasks exist
- **Responsive Design** — polished layout for screenshots and project reports

---

## Architecture

```
UI Module        → Components: Header, TaskForm, TaskList, TaskCard, FilterBar, SearchBar
Task Module      → Logic: createTask, updateTask, deleteTask, completeTask, getTaskStatus
Storage Module   → Utilities: loadTasks, saveTasks (via localStorage)
Reminder Module  → Utilities: due date detection, overdue alerts
```

---

## Folder Structure

```
tasksense-smart-todo/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── TaskForm.tsx
│   │   ├── TaskList.tsx
│   │   ├── TaskCard.tsx
│   │   ├── FilterBar.tsx
│   │   └── SearchBar.tsx
│   ├── utils/
│   │   ├── taskUtils.ts
│   │   ├── storage.ts
│   │   └── reminder.ts
│   ├── types/
│   │   └── task.ts
│   ├── App.tsx
│   ├── main.tsx
│   ├── App.css
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## Task Type Definition

```typescript
export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;       // ISO date string
  priority: 'High' | 'Medium' | 'Low';
  completed: boolean;
  createdAt: string;     // ISO timestamp
}
```

---

## Utility Functions

| Function | Module | Description |
|---|---|---|
| `createTask()` | taskUtils.ts | Creates a new Task object with generated ID |
| `loadTasks()` | storage.ts | Reads tasks array from localStorage |
| `saveTasks()` | storage.ts | Writes tasks array to localStorage |
| `addTask()` | taskUtils.ts | Adds task to array and persists |
| `updateTask()` | taskUtils.ts | Updates task fields by ID |
| `deleteTask()` | taskUtils.ts | Removes task by ID |
| `completeTask()` | taskUtils.ts | Toggles `completed` flag |
| `getTaskStatus()` | reminder.ts | Returns status string for a task |
| `filterTasks()` | taskUtils.ts | Filters task array by status |
| `searchTasks()` | taskUtils.ts | Searches tasks by title substring |

---

## How to Run

### Prerequisites
- Node.js 18+ installed
- VS Code (recommended)

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/MxthThunder/tasksense-smart-todo.git
cd tasksense-smart-todo

# 2. Scaffold a Vite + React + TypeScript project into this folder
npm create vite@latest . -- --template react-ts

# 3. Install dependencies
npm install

# 4. Replace the generated src/ folder with the project source files
# (follow the folder structure above)

# 5. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Suggested Screenshots for Project Report

1. **Task Dashboard (Full View)** — Show all tasks with priority color coding, filter buttons active, and the search bar visible.
2. **Add/Edit Task Form** — Show the task creation form filled in with sample data (title, description, due date, priority selected).
3. **Filtered View – Overdue Tasks** — Activate the "Overdue" filter to show overdue tasks highlighted in red/warning styling.
4. **Empty State UI** — Show the clean empty state message when no tasks match a search or filter.

---

## Notes for Viva

- **Why no backend?** — This is a frontend-only mini project focused on React state management and browser APIs.
- **Why localStorage?** — Provides simple persistence without requiring a server or database setup.
- **Why TypeScript?** — Adds type safety, making the code more reliable and easier to explain in a viva.
- **Why Vite?** — Faster build tool compared to Create React App; industry standard in 2025–26.

---

## Author

**Freddy Matthew R**  
GitHub: [@MxthThunder](https://github.com/MxthThunder)

---

*Submitted as a college mini project – Academic Year 2025–26*
