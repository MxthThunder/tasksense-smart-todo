# 🎮 Multi-Page Setup Instructions

## Step 1: Install React Router
Open your terminal in the project folder and run:
```bash
npm install react-router-dom
```

## Step 2: Create Pages Folder
Create a new folder manually:
- Navigate to `src/`
- Create new folder named `pages`

## Step 3: Create Page Files
Copy the code from the sections below into new files.

---

### File: `src/pages/AddTaskPage.tsx`
Create this file and paste the code provided below in the next message.

### File: `src/pages/AddTaskPage.css`
Create this file and paste the CSS code.

### File: `src/pages/TasksPage.tsx`
Create this file and paste the code.

### File: `src/pages/TasksPage.css`
Create this file and paste the CSS code.

### File: `src/pages/EditTaskPage.tsx`
Create this file and paste the code.

---

## Step 4: Update App.tsx
Replace the entire content of `src/App.tsx` with the new router code.

## Step 5: Update Navigation Component
Create a new navigation component for page switching.

## Step 6: Run the App
```bash
npm run dev
```

Then navigate to:
- `http://localhost:5173/` - Add Task Page
- `http://localhost:5173/tasks` - View Tasks Page
- `http://localhost:5173/edit` - Edit Task Page (via edit button)

## 🎯 Page Structure
- **Page 1 (/)**: Add new tasks with full form
- **Page 2 (/tasks)**: View all tasks with filters, search, and cards
- **Page 3 (/edit)**: Edit existing tasks

Navigation between pages using buttons and a floating action button (FAB).
