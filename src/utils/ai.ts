/**
 * 🤖 AI MODULE - Smart Task Analysis
 * 
 * AI Concepts Used:
 * 1. Rule-Based Expert System - Uses IF-THEN rules for decision making
 * 2. Knowledge Base - Stores keyword patterns and weights
 * 3. Inference Engine - Matches patterns to make predictions
 * 4. Heuristic Functions - Calculates scores using weighted formulas
 * 5. Pattern Matching - Simple NLP for keyword extraction
 */

import type { Task } from "../types/task";

// ============================================
// KNOWLEDGE BASE - AI's learned patterns
// ============================================

// High priority keywords (urgency indicators)
const HIGH_PRIORITY_KEYWORDS = [
  "urgent", "asap", "immediately", "critical", "emergency", "deadline",
  "important", "priority", "submit", "exam", "test", "interview",
  "meeting", "presentation", "due", "today", "tomorrow", "tonight",
  "final", "last", "crucial", "essential", "must", "required",
  "client", "boss", "manager", "professor", "doctor", "appointment"
];

// Medium priority keywords
const MEDIUM_PRIORITY_KEYWORDS = [
  "soon", "next", "week", "review", "check", "update", "prepare",
  "plan", "schedule", "complete", "finish", "work", "project",
  "assignment", "task", "report", "document", "email", "call",
  "follow", "pending", "waiting", "remind", "remember"
];

// Low priority keywords
const LOW_PRIORITY_KEYWORDS = [
  "maybe", "someday", "later", "whenever", "optional", "consider",
  "think", "idea", "wish", "want", "nice", "fun", "hobby",
  "relax", "free", "time", "leisure", "personal", "casual",
  "explore", "learn", "try", "practice", "read", "watch"
];

// Task category keywords
const CATEGORY_KEYWORDS: Record<string, string[]> = {
  "📚 Study": [
    "study", "exam", "test", "assignment", "homework", "learn", "read",
    "course", "class", "lecture", "university", "college", "school",
    "research", "thesis", "project", "presentation", "quiz", "revision"
  ],
  "💼 Work": [
    "work", "office", "meeting", "client", "boss", "manager", "report",
    "deadline", "email", "call", "presentation", "project", "task",
    "review", "submit", "document", "proposal", "invoice", "budget"
  ],
  "🏠 Personal": [
    "home", "family", "friend", "birthday", "party", "gift", "visit",
    "clean", "organize", "buy", "shop", "grocery", "cook", "laundry",
    "repair", "fix", "pay", "bill", "bank", "appointment"
  ],
  "💪 Health": [
    "gym", "exercise", "workout", "run", "walk", "yoga", "meditation",
    "doctor", "hospital", "medicine", "health", "diet", "sleep",
    "dentist", "checkup", "appointment", "therapy", "mental"
  ],
  "🎯 Goals": [
    "goal", "plan", "dream", "future", "career", "skill", "improve",
    "habit", "routine", "challenge", "achievement", "milestone",
    "growth", "development", "success", "target", "resolution"
  ],
  "🎮 Leisure": [
    "game", "movie", "music", "book", "hobby", "fun", "relax",
    "travel", "vacation", "trip", "explore", "adventure", "play",
    "entertainment", "series", "watch", "listen", "enjoy"
  ]
};

// ============================================
// INFERENCE ENGINE - AI Decision Making
// ============================================

/**
 * AI Feature 1: Smart Priority Prediction
 * Uses rule-based expert system to analyze keywords
 */
export function predictPriority(title: string, description: string = ""): {
  priority: "High" | "Medium" | "Low";
  confidence: number;
  reason: string;
} {
  const text = `${title} ${description}`.toLowerCase();
  const words = text.split(/\s+/);
  
  let highScore = 0;
  let mediumScore = 0;
  let lowScore = 0;
  const matchedKeywords: string[] = [];
  
  // Pattern matching with Knowledge Base
  for (const word of words) {
    // Check high priority
    for (const keyword of HIGH_PRIORITY_KEYWORDS) {
      if (word.includes(keyword) || keyword.includes(word)) {
        highScore += 3;
        if (!matchedKeywords.includes(keyword)) matchedKeywords.push(keyword);
      }
    }
    
    // Check medium priority
    for (const keyword of MEDIUM_PRIORITY_KEYWORDS) {
      if (word.includes(keyword) || keyword.includes(word)) {
        mediumScore += 2;
        if (!matchedKeywords.includes(keyword)) matchedKeywords.push(keyword);
      }
    }
    
    // Check low priority
    for (const keyword of LOW_PRIORITY_KEYWORDS) {
      if (word.includes(keyword) || keyword.includes(word)) {
        lowScore += 1;
        if (!matchedKeywords.includes(keyword)) matchedKeywords.push(keyword);
      }
    }
  }
  
  // Heuristic decision making
  const totalScore = highScore + mediumScore + lowScore;
  let priority: "High" | "Medium" | "Low";
  let confidence: number;
  let reason: string;
  
  if (highScore > mediumScore && highScore > lowScore) {
    priority = "High";
    confidence = Math.min(95, 60 + (highScore * 5));
    reason = `Detected urgent keywords: ${matchedKeywords.slice(0, 3).join(", ")}`;
  } else if (mediumScore >= highScore && mediumScore > lowScore) {
    priority = "Medium";
    confidence = Math.min(90, 50 + (mediumScore * 4));
    reason = `Detected task-related keywords: ${matchedKeywords.slice(0, 3).join(", ")}`;
  } else if (lowScore > 0) {
    priority = "Low";
    confidence = Math.min(85, 40 + (lowScore * 5));
    reason = `Detected casual keywords: ${matchedKeywords.slice(0, 3).join(", ")}`;
  } else {
    priority = "Medium";
    confidence = 50;
    reason = "No specific keywords detected, defaulting to Medium";
  }
  
  return { priority, confidence, reason };
}

/**
 * AI Feature 2: Intelligent Task Categorization
 * Uses pattern matching to auto-categorize tasks
 */
export function categorizeTask(title: string, description: string = ""): {
  category: string;
  confidence: number;
  relatedCategories: string[];
} {
  const text = `${title} ${description}`.toLowerCase();
  const scores: Record<string, number> = {};
  
  // Calculate score for each category
  for (const [category, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
    scores[category] = 0;
    for (const keyword of keywords) {
      if (text.includes(keyword)) {
        scores[category] += 1;
      }
    }
  }
  
  // Sort categories by score
  const sortedCategories = Object.entries(scores)
    .sort(([, a], [, b]) => b - a)
    .filter(([, score]) => score > 0);
  
  if (sortedCategories.length === 0) {
    return {
      category: "📋 General",
      confidence: 50,
      relatedCategories: []
    };
  }
  
  const topCategory = sortedCategories[0];
  const maxScore = topCategory[1];
  const confidence = Math.min(95, 50 + (maxScore * 15));
  
  return {
    category: topCategory[0],
    confidence,
    relatedCategories: sortedCategories.slice(1, 3).map(([cat]) => cat)
  };
}

/**
 * AI Feature 3: Smart Scheduling Assistant
 * Uses heuristic algorithm to calculate optimal task order
 */
export function calculateTaskScore(task: Task): {
  score: number;
  urgencyLevel: "Critical" | "High" | "Medium" | "Low";
  recommendation: string;
  daysUntilDue: number;
} {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const dueDate = new Date(task.dueDate);
  dueDate.setHours(0, 0, 0, 0);
  
  const daysUntilDue = Math.ceil((dueDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  
  // Weighted scoring formula (Heuristic Function)
  let score = 0;
  
  // Factor 1: Days until due (weight: 40%)
  if (daysUntilDue < 0) {
    score += 100; // Overdue gets max urgency
  } else if (daysUntilDue === 0) {
    score += 90; // Due today
  } else if (daysUntilDue === 1) {
    score += 80; // Due tomorrow
  } else if (daysUntilDue <= 3) {
    score += 60; // Due within 3 days
  } else if (daysUntilDue <= 7) {
    score += 40; // Due within a week
  } else {
    score += Math.max(10, 30 - daysUntilDue);
  }
  
  // Factor 2: Priority weight (weight: 35%)
  switch (task.priority) {
    case "High":
      score += 35;
      break;
    case "Medium":
      score += 20;
      break;
    case "Low":
      score += 10;
      break;
  }
  
  // Factor 3: Completion status (weight: 25%)
  if (task.completed) {
    score = 0; // Completed tasks have no urgency
  }
  
  // Determine urgency level
  let urgencyLevel: "Critical" | "High" | "Medium" | "Low";
  let recommendation: string;
  
  if (score >= 90) {
    urgencyLevel = "Critical";
    recommendation = "🚨 Do this NOW! This task is critical.";
  } else if (score >= 70) {
    urgencyLevel = "High";
    recommendation = "⚡ Focus on this task today.";
  } else if (score >= 40) {
    urgencyLevel = "Medium";
    recommendation = "📋 Schedule this for the coming days.";
  } else {
    urgencyLevel = "Low";
    recommendation = "✨ Can be done when you have free time.";
  }
  
  if (task.completed) {
    recommendation = "✅ Task completed! Great job!";
  }
  
  return {
    score: Math.min(100, Math.max(0, score)),
    urgencyLevel,
    recommendation,
    daysUntilDue
  };
}

/**
 * Smart Task Scheduler - Sorts tasks by AI-calculated priority
 */
export function getSmartTaskOrder(tasks: Task[]): Task[] {
  return [...tasks]
    .map(task => ({
      task,
      analysis: calculateTaskScore(task)
    }))
    .sort((a, b) => b.analysis.score - a.analysis.score)
    .map(item => item.task);
}

/**
 * Get AI insights for a task
 */
export function getTaskInsights(task: Task): {
  priorityAnalysis: ReturnType<typeof predictPriority>;
  categoryAnalysis: ReturnType<typeof categorizeTask>;
  scheduleAnalysis: ReturnType<typeof calculateTaskScore>;
} {
  return {
    priorityAnalysis: predictPriority(task.title, task.description),
    categoryAnalysis: categorizeTask(task.title, task.description),
    scheduleAnalysis: calculateTaskScore(task)
  };
}

/**
 * AI Summary for a list of tasks
 */
export function getAISummary(tasks: Task[]): {
  totalTasks: number;
  criticalTasks: number;
  suggestedFocus: Task | null;
  productivityTip: string;
} {
  const incompleteTasks = tasks.filter(t => !t.completed);
  const analyzedTasks = incompleteTasks.map(task => ({
    task,
    score: calculateTaskScore(task).score
  }));
  
  const criticalTasks = analyzedTasks.filter(t => t.score >= 90).length;
  const sortedTasks = analyzedTasks.sort((a, b) => b.score - a.score);
  const suggestedFocus = sortedTasks.length > 0 ? sortedTasks[0].task : null;
  
  let productivityTip: string;
  if (criticalTasks > 3) {
    productivityTip = "🔥 You have many urgent tasks! Focus on one at a time.";
  } else if (criticalTasks > 0) {
    productivityTip = "⚡ Start with your critical tasks first.";
  } else if (incompleteTasks.length > 5) {
    productivityTip = "📋 Break down large tasks into smaller steps.";
  } else if (incompleteTasks.length === 0) {
    productivityTip = "🎉 All caught up! Time to add new goals.";
  } else {
    productivityTip = "💪 You're on track! Keep up the good work.";
  }
  
  return {
    totalTasks: incompleteTasks.length,
    criticalTasks,
    suggestedFocus,
    productivityTip
  };
}
