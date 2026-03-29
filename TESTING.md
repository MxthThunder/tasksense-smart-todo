# TaskSense – Feature Verification Checklist

Use this checklist to verify all features are working before demo/viva.

## ✅ Core Features

### 1. Add Task
- [ ] Form accepts title, description, due date, and priority
- [ ] All fields are required (validation shows error if empty)
- [ ] Task appears in the list after clicking "Add Task"
- [ ] Form resets after successful submission
- [ ] New task is saved to localStorage
- [ ] Priority dropdown shows High/Medium/Low options
- [ ] Date picker allows selecting future dates

### 2. Edit Task
- [ ] Click "Edit" button on any task card
- [ ] Form populates with existing task data
- [ ] Form heading changes to "Edit Task"
- [ ] "Update Task" button appears
- [ ] "Cancel Edit" button appears and works
- [ ] Changes are saved after clicking "Update Task"
- [ ] Edited task updates in the list
- [ ] Changes persist in localStorage

### 3. Delete Task
- [ ] Click "Delete" button shows confirmation dialog
- [ ] Clicking "Cancel" in dialog keeps the task
- [ ] Clicking "OK" removes the task from list
- [ ] Deleted task is removed from localStorage
- [ ] If editing a task and then delete it, edit mode cancels

### 4. Complete Task
- [ ] Click "Complete" button marks task as done
- [ ] Task title and description show strike-through
- [ ] Status changes to "Completed"
- [ ] "Complete" button becomes disabled and grayed
- [ ] Button text changes to "Completed"
- [ ] Completed status persists in localStorage
- [ ] Completed tasks show gray status chip

---

## 🎨 Visual Features

### 5. Priority Highlighting
- [ ] High priority tasks show RED badge
- [ ] Medium priority tasks show ORANGE badge
- [ ] Low priority tasks show GREEN badge
- [ ] Badge colors are clearly distinguishable
- [ ] Badges appear on every task card

### 6. Status Visual Indicators
- [ ] Overdue tasks show RED/PINK background
- [ ] Due Today tasks show YELLOW background
- [ ] Completed tasks show gray status chip
- [ ] Upcoming tasks show blue status chip
- [ ] Status chip text is readable against background

### 7. Task Status Detection
- [ ] Tasks past due date show "Overdue" status
- [ ] Tasks with today's date show "Due Today" status
- [ ] Tasks with future dates show "Upcoming" status
- [ ] Completed tasks always show "Completed" regardless of date
- [ ] Status updates correctly when date changes

---

## 🔍 Filter & Search

### 8. Filter - All
- [ ] "All" button shows all tasks (default state)
- [ ] Active filter button has purple highlight
- [ ] Both completed and pending tasks appear

### 9. Filter - Pending
- [ ] Shows only uncompleted tasks
- [ ] Hides all completed tasks
- [ ] Button shows active state

### 10. Filter - Completed
- [ ] Shows only completed tasks
- [ ] Hides all pending tasks
- [ ] Works correctly even if no tasks are completed

### 11. Filter - Overdue
- [ ] Shows only tasks past due date
- [ ] Hides tasks that are due today or in future
- [ ] Hides completed tasks
- [ ] Shows "No tasks found" if no overdue tasks exist

### 12. Search by Title
- [ ] Typing in search bar filters tasks in real-time
- [ ] Search is case-insensitive
- [ ] Partial matches work (e.g., "viva" finds "Prepare viva notes")
- [ ] Search works combined with filters
- [ ] Clearing search shows all tasks again
- [ ] Empty search state shows message when no matches

---

## 💾 Data Persistence

### 13. localStorage Save
- [ ] New tasks save immediately
- [ ] Edits save immediately
- [ ] Deletions update storage immediately
- [ ] Task completion updates storage
- [ ] No manual "Save" button needed

### 14. localStorage Load
- [ ] Refresh page keeps all tasks
- [ ] Close and reopen browser tab keeps tasks
- [ ] Sample tasks load on first visit
- [ ] Sample tasks don't duplicate on refresh

---

## 📱 UI/UX Features

### 15. Responsive Design
- [ ] Works on desktop (1920px+)
- [ ] Works on tablet (768px-1024px)
- [ ] Works on mobile (375px-767px)
- [ ] Grid layouts adapt to screen size
- [ ] Form fields stack on mobile
- [ ] Buttons remain clickable on small screens
- [ ] Text remains readable at all sizes

### 16. Empty State
- [ ] Shows friendly message when no tasks exist
- [ ] Shows empty state when search/filter has no results
- [ ] Message is centered and styled nicely

### 17. User Feedback
- [ ] Delete confirmation dialog appears
- [ ] Form validation errors show in red
- [ ] Buttons have hover effects
- [ ] Disabled buttons are visually distinct
- [ ] Active filter buttons are highlighted

---

## 🔧 Technical Requirements

### 18. TypeScript
- [ ] No TypeScript compilation errors
- [ ] All types are properly defined
- [ ] Task interface includes all required fields
- [ ] Utility functions have correct type signatures

### 19. React Best Practices
- [ ] Components are functional (no class components)
- [ ] Uses useState for state management
- [ ] Uses useEffect where needed
- [ ] Uses useMemo for computed values
- [ ] Props are properly typed

### 20. Code Quality
- [ ] Code is well-organized in modules
- [ ] Components are in components/ folder
- [ ] Utilities are in utils/ folder
- [ ] Types are in types/ folder
- [ ] No console errors in browser
- [ ] No console warnings

---

## 🎓 Viva Preparation

### 21. Can You Explain?
- [ ] What is the Task type interface?
- [ ] How does localStorage work?
- [ ] What are the utility functions (createTask, loadTasks, etc.)?
- [ ] Why use TypeScript over JavaScript?
- [ ] What React hooks are you using?
- [ ] How does the filter logic work?
- [ ] How does getTaskStatus determine task status?
- [ ] What CSS techniques did you use?
- [ ] Why no external UI libraries?
- [ ] How would you add user authentication?

---

## 🚀 Quick Test Scenario

Run through this scenario to test everything at once:

1. **Clear localStorage**: Open DevTools → Application → localStorage → Clear All
2. **Refresh page**: Should load 5 sample tasks
3. **Add a task**: Title "Test Task", Description "Testing", Due Date tomorrow, Priority High
4. **Edit a task**: Change title of any task and save
5. **Complete a task**: Mark one task as complete (should strike through)
6. **Search**: Type "viva" in search box (should filter results)
7. **Filter Overdue**: Click Overdue filter (should show only overdue tasks)
8. **Filter Completed**: Click Completed filter (should show completed tasks)
9. **Delete a task**: Delete any task with confirmation
10. **Refresh page**: All changes should persist

If all 10 steps work perfectly, your app is ready! ✅

---

## 📊 Expected Behavior Summary

| Feature | Input | Expected Output |
|---------|-------|----------------|
| Add Task | Fill form + click Add | Task appears in list |
| Edit Task | Click Edit + modify + Update | Task updates in place |
| Delete Task | Click Delete + confirm | Task removed from list |
| Complete Task | Click Complete | Task gets strike-through |
| Filter Pending | Click Pending filter | Only uncompleted tasks shown |
| Filter Completed | Click Completed filter | Only completed tasks shown |
| Filter Overdue | Click Overdue filter | Only past-due tasks shown |
| Search | Type "viva" | Only matching tasks shown |
| Refresh | F5 or Ctrl+R | All tasks persist |
| localStorage | Browser DevTools check | JSON array of tasks visible |

---

**Last Updated**: March 29, 2026  
**Status**: All features implemented ✅
