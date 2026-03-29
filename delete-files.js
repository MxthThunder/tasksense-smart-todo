const fs = require('fs');
const path = require('path');

const files = [
  'AddTaskPage.css.txt',
  'AddTaskPage.tsx.txt',
  'EditTaskPage.tsx.txt',
  'NewApp.tsx.txt',
  'TasksPage.css.txt',
  'TasksPage.tsx.txt',
  'COMPLETE_SETUP_GUIDE.md',
  'README_SETUP.md',
  'SCREENSHOTS.md',
  'SETUP_PAGES.md',
  'TESTING.md'
];

const baseDir = 'c:\\react\\tasksense-smart-todo';

files.forEach(f => {
  try {
    const filePath = path.join(baseDir, f);
    fs.unlinkSync(filePath);
    console.log('✓ Deleted:', f);
  } catch(e) {
    console.log('✗ Error:', f, '-', e.message);
  }
});

console.log('\n--- Directory Listing After Deletion ---');
const remainingFiles = fs.readdirSync(baseDir);
remainingFiles.filter(f => fs.statSync(path.join(baseDir, f)).isFile()).forEach(f => console.log(f));
