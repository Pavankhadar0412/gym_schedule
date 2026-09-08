export const API_BASE_URL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:8080/api'
  : 'https://api.gymschedule.com/api';

export const STORAGE_KEYS = {
  HAS_COMPLETED_ONBOARDING: 'hasCompletedOnboarding',
  IS_AUTHENTICATED: 'isAuthenticated',
  USER_PROFILE: 'userProfile',
  WORKOUT_PLAN: 'workoutPlan',
  NUTRITION_PLAN: 'nutritionPlan',
  PROGRESS: 'progress',
  USER_EMAIL: 'userEmail',
  USER_NAME: 'userName',
  AUTH_TOKEN: 'authToken',
};

export const GOALS = [
  { id: 'build_muscle', title: 'Build Muscle', emoji: '💪' },
  { id: 'lose_weight', title: 'Lose Weight', emoji: '🔥' },
  { id: 'maintain', title: 'Maintain Weight', emoji: '⚖️' },
  { id: 'gain_weight', title: 'Gain Weight', emoji: '⬆️' },
  { id: 'improve_fitness', title: 'Improve Fitness', emoji: '🏃' },
];

export const EXPERIENCE_LEVELS = [
  { id: 'beginner', title: 'Beginner', description: 'New to working out' },
  { id: 'intermediate', title: 'Intermediate', description: 'Some experience' },
  { id: 'advanced', title: 'Advanced', description: 'Experienced lifter' },
];

export const EQUIPMENT_OPTIONS = [
  { id: 'full_gym', title: 'Full Gym', emoji: '🏋️' },
  { id: 'home_gym', title: 'Home Gym', emoji: '🏠' },
  { id: 'dumbbells', title: 'Dumbbells', emoji: '💪' },
  { id: 'bodyweight', title: 'Bodyweight', emoji: '🤸' },
];

export const DIET_OPTIONS = [
  { id: 'vegetarian', title: 'Vegetarian', emoji: '🥬' },
  { id: 'non_vegetarian', title: 'Non-Vegetarian', emoji: '🍗' },
  { id: 'vegan', title: 'Vegan', emoji: '🌱' },
];

export const PROTEIN_OPTIONS = [
  { id: 'whey', title: 'Whey Protein' },
  { id: 'whey_isolate', title: 'Whey Isolate' },
  { id: 'plant', title: 'Plant Protein' },
  { id: 'none', title: 'No Protein Powder' },
  { id: 'not_sure', title: 'Not Sure' },
];

export const CREATINE_OPTIONS = [
  { id: 'monohydrate', title: 'Creatine Monohydrate' },
  { id: 'none', title: 'No Creatine' },
  { id: 'not_sure', title: 'Not Sure' },
];

export const DAYS_OF_WEEK = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
];

export const COLORS = {
  primary: '#6366f1',
  secondary: '#8b5cf6',
  tertiary: '#ec4899',
  background: '#1a1a2e',
  surface: '#16213e',
  surfaceVariant: '#1f2937',
  text: '#f3f4f6',
  textSecondary: '#9ca3af',
  error: '#ef4444',
  success: '#10b981',
  warning: '#f59e0b',
};

export const DISCLAIMER = 'This app provides general fitness and nutrition estimates for informational purposes. Individual exercise and nutrition needs vary. Consult a qualified healthcare or fitness professional for personalized advice, especially if you have a medical condition, injury, are pregnant, or take medication.';
