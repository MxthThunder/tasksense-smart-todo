# TaskSense – Screenshot Guide for Project Report

This guide helps you capture perfect screenshots for your college project documentation and viva presentation.

## Required Screenshots

### 1. **Dashboard Overview (Full View)**
**Purpose:** Show the complete application interface with all components visible.

**Setup:**
- Ensure you have 4-6 tasks loaded with different priorities and statuses
- Include at least one overdue task, one due today, and one upcoming task
- Show completed and pending tasks
- Keep "All" filter active to show everything

**What to capture:**
- Header with TaskSense branding
- Task form (collapsed, not in edit mode)
- Search bar and filter controls
- Multiple task cards showing all visual states

**File name:** `01-dashboard-overview.png`

---

### 2. **Add Task Form (Filled)**
**Purpose:** Demonstrate the task creation interface and validation.

**Setup:**
- Fill in all form fields with sample data:
  - Title: "Complete mini project documentation"
  - Description: "Write comprehensive report covering architecture, implementation, and testing"
  - Due Date: Select tomorrow's date
  - Priority: High

**What to capture:**
- Full form with all fields populated
- "Add Task" button clearly visible
- Show form labels and placeholders

**File name:** `02-add-task-form.png`

---

### 3. **Task Card States (Priority & Status Highlighting)**
**Purpose:** Show visual differentiation of task priorities and statuses.

**Setup:**
- Have tasks visible with:
  - High priority (red badge) - at least one overdue
  - Medium priority (orange badge)
  - Low priority (green badge)
  - One "Due Today" task (yellow background)
  - One "Overdue" task (red background)

**What to capture:**
- 3-4 task cards in grid layout
- Priority badges clearly visible
- Status chips showing different states (Overdue/Due Today/Upcoming)
- Warning styling on overdue/due-today cards

**File name:** `03-task-highlighting.png`

---

### 4. **Filter & Search in Action**
**Purpose:** Demonstrate filtering and search functionality.

**Setup Option A - Overdue Filter:**
- Click "Overdue" filter button
- Ensure only overdue tasks are displayed
- Filter button should show active state (purple highlight)

**Setup Option B - Search:**
- Type a keyword in search bar (e.g., "viva")
- Show filtered results matching the search term
- Keep search bar with typed text visible

**What to capture:**
- Active filter button OR search bar with text
- Filtered task results
- Empty task list if no matches (optional for empty state demo)

**File name:** `04-filter-overdue.png` OR `04-search-results.png`

---

### 5. **Edit Task Mode**
**Purpose:** Show the edit functionality.

**Setup:**
- Click "Edit" on any task card
- Form should populate with existing task data
- Show "Update Task" and "Cancel Edit" buttons

**What to capture:**
- Form with pre-filled task data
- "Edit Task" heading instead of "Add New Task"
- Both action buttons visible
- The task being edited should still be visible in the list below

**File name:** `05-edit-task.png`

---

### 6. **Complete Task Visual**
**Purpose:** Demonstrate completed task styling.

**Setup:**
- Complete at least one task by clicking the "Complete" button
- Task should show:
  - Strike-through text on title and description
  - "Completed" status chip
  - Disabled/grayed "Completed" button

**What to capture:**
- One or two completed task cards
- Clear strike-through styling
- Compare with pending tasks in same view

**File name:** `06-completed-task.png`

---

### 7. **Empty State (Optional but Recommended)**
**Purpose:** Show clean UI when no tasks match criteria.

**Setup:**
- Search for a term that doesn't match any tasks (e.g., "xyz123")
- OR use a filter with no matching tasks

**What to capture:**
- Empty state card with message:
  - "No tasks found"
  - "Start by adding your first task using the form above."

**File name:** `07-empty-state.png`

---

### 8. **Responsive Mobile View (Bonus)**
**Purpose:** Show responsive design for mobile devices.

**Setup:**
- Resize browser to mobile width (375px or 414px)
- OR use browser DevTools device emulation (iPhone/Android)

**What to capture:**
- Stacked layout (single column)
- Readable text and accessible buttons
- Properly wrapped filter buttons

**File name:** `08-mobile-responsive.png`

---

## Screenshot Settings

**Recommended Tool:** 
- Windows: Snipping Tool (Win + Shift + S) or Snip & Sketch
- Browser: Built-in screenshot (Ctrl + Shift + S in Firefox)
- Chrome DevTools: Device toolbar for mobile screenshots

**Quality Settings:**
- Format: PNG (lossless quality)
- Resolution: Full HD (1920x1080) or higher
- Don't crop too tightly – leave some margin around content

**Browser Zoom:**
- Set to 100% (default) for consistency
- Use full-screen mode (F11) to remove browser chrome if needed

---

## Tips for Best Results

1. **Use Real Data**: Avoid generic "Task 1", "Task 2" titles. Use realistic college project examples.

2. **Check Styling**: 
   - Make sure all colors are rendering correctly
   - Priority badges should be clearly visible
   - Status chips should have distinct colors

3. **Consistency**: Take all screenshots in the same browser at same zoom level.

4. **Lighting**: If demonstrating in person, ensure good screen brightness for projection.

5. **Prepare Story**: 
   - Screenshot 1-2: "This is the dashboard overview..."
   - Screenshot 3: "Here I'm adding a new task..."
   - Screenshot 4: "The app highlights priorities visually..."
   - And so on...

---

## Quick Setup Checklist

Before taking screenshots, ensure:

- [ ] Browser is at 100% zoom
- [ ] Window is maximized or at consistent size
- [ ] At least 5 sample tasks loaded (mix of priorities/statuses)
- [ ] One task is overdue (past due date)
- [ ] One task is due today
- [ ] One task is completed
- [ ] localStorage has been seeded with sample data

---

## For Viva Presentation

Prepare to explain each screenshot:

1. **Architecture**: "This shows our modular component structure..."
2. **localStorage**: "All tasks persist in browser storage..."
3. **TypeScript**: "Notice the type-safe form validation..."
4. **React**: "We use hooks like useState and useMemo for state management..."
5. **Pure CSS**: "No external UI libraries – all styling is custom CSS..."

---

**Note**: If you need to regenerate sample data, clear localStorage in browser DevTools:
```javascript
localStorage.clear();
location.reload();
```

This will reload the default sample tasks optimized for screenshots.
