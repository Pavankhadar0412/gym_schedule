function calculateBMR(weight: number, height: number, age: number, gender: string) {
  // Mifflin-St Jeor Equation
  if (gender.toLowerCase() === 'male') {
    return 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    return 10 * weight + 6.25 * height - 5 * age - 161;
  }
}

function calculateTDEE(bmr: number, activityLevel: string) {
  const multipliers: any = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    very_active: 1.9,
  };
  return bmr * (multipliers[activityLevel] || 1.55);
}

function adjustCaloriesForGoal(tdee: number, goal: string) {
  const adjustments: any = {
    lose_weight: -500,
    maintain_weight: 0,
    gain_weight: 300,
    build_muscle: 200,
    improve_fitness: -100,
  };
  return tdee + (adjustments[goal] || 0);
}

function calculateMacros(calories: number, goal: string, weight: number) {
  let proteinRatio = 0.3;
  let fatRatio = 0.25;
  let carbRatio = 0.45;

  if (goal === 'build_muscle') {
    proteinRatio = 0.35;
    fatRatio = 0.25;
    carbRatio = 0.4;
  } else if (goal === 'lose_weight') {
    proteinRatio = 0.4;
    fatRatio = 0.3;
    carbRatio = 0.3;
  }

  const protein = Math.round((calories * proteinRatio) / 4);
  const fat = Math.round((calories * fatRatio) / 9);
  const carbs = Math.round((calories * carbRatio) / 4);

  return { protein, fat, carbs };
}

const vegetarianMeals = {
  breakfast: [
    { name: 'Oats + Milk + Banana + Nuts', description: 'Rolled oats with milk, sliced banana, and mixed nuts', protein: 15, calories: 350 },
    { name: 'Greek Yogurt + Fruit + Granola', description: 'Greek yogurt with berries and granola', protein: 20, calories: 300 },
    { name: 'Paneer Paratha + Curd', description: 'Whole wheat paratha with paneer filling and yogurt', protein: 18, calories: 400 },
    { name: 'Smoothie Bowl', description: 'Berry smoothie with seeds and nuts', protein: 12, calories: 280 },
  ],
  lunch: [
    { name: 'Rice + Dal + Paneer + Vegetables', description: 'Brown rice, lentil curry, paneer, and mixed vegetables', protein: 25, calories: 500 },
    { name: 'Quinoa Salad + Chickpeas', description: 'Quinoa salad with chickpeas and vegetables', protein: 18, calories: 450 },
    { name: 'Rajma Rice + Salad', description: 'Kidney beans curry with rice and salad', protein: 22, calories: 480 },
    { name: 'Tofu Stir Fry + Rice', description: 'Tofu stir-fried with vegetables and rice', protein: 20, calories: 460 },
  ],
  snack: [
    { name: 'Greek Yogurt + Fruit', description: 'Greek yogurt with fresh fruits', protein: 15, calories: 180 },
    { name: 'Protein Shake + Banana', description: 'Plant protein shake with banana', protein: 25, calories: 250 },
    { name: 'Nuts + Seeds', description: 'Mixed nuts and seeds', protein: 8, calories: 200 },
    { name: 'Roasted Chickpeas', description: 'Spiced roasted chickpeas', protein: 10, calories: 150 },
  ],
  dinner: [
    { name: 'Roti + Paneer/Tofu + Vegetables', description: 'Whole wheat roti with paneer/tofu curry and vegetables', protein: 22, calories: 450 },
    { name: 'Dal + Rice + Salad', description: 'Lentil curry with rice and salad', protein: 18, calories: 420 },
    { name: 'Vegetable Soup + Toast', description: 'Mixed vegetable soup with whole grain toast', protein: 8, calories: 280 },
    { name: 'Lentil Soup + Quinoa', description: 'Hearty lentil soup with quinoa', protein: 16, calories: 380 },
  ],
};

const nonVegetarianMeals = {
  breakfast: [
    { name: 'Eggs + Toast + Avocado', description: 'Scrambled eggs with whole grain toast and avocado', protein: 25, calories: 400 },
    { name: 'Omelette + Vegetables + Toast', description: 'Egg omelette with vegetables and toast', protein: 22, calories: 380 },
    { name: 'Greek Yogurt + Eggs', description: 'Greek yogurt with boiled eggs', protein: 28, calories: 350 },
    { name: 'Protein Smoothie + Eggs', description: 'Whey protein smoothie with boiled eggs', protein: 35, calories: 420 },
  ],
  lunch: [
    { name: 'Chicken Breast + Rice + Vegetables', description: 'Grilled chicken breast with brown rice and vegetables', protein: 40, calories: 550 },
    { name: 'Fish + Quinoa + Salad', description: 'Grilled fish with quinoa and fresh salad', protein: 35, calories: 500 },
    { name: 'Chicken Curry + Rice', description: 'Chicken curry with brown rice', protein: 38, calories: 520 },
    { name: 'Egg + Chicken + Rice', description: 'Egg and chicken with rice and vegetables', protein: 42, calories: 540 },
  ],
  snack: [
    { name: 'Greek Yogurt + Fruit', description: 'Greek yogurt with fresh fruits', protein: 15, calories: 180 },
    { name: 'Protein Shake + Banana', description: 'Whey protein shake with banana', protein: 25, calories: 250 },
    { name: 'Boiled Eggs + Nuts', description: 'Boiled eggs with mixed nuts', protein: 14, calories: 220 },
    { name: 'Chicken Jerky', description: 'Dried chicken strips', protein: 20, calories: 180 },
  ],
  dinner: [
    { name: 'Grilled Chicken + Vegetables', description: 'Grilled chicken with roasted vegetables', protein: 35, calories: 450 },
    { name: 'Fish + Sweet Potato + Salad', description: 'Grilled fish with sweet potato and salad', protein: 32, calories: 480 },
    { name: 'Chicken Soup + Rice', description: 'Chicken soup with brown rice', protein: 28, calories: 400 },
    { name: 'Egg + Chicken + Vegetables', description: 'Egg and chicken stir-fry with vegetables', protein: 30, calories: 420 },
  ],
};

const veganMeals = {
  breakfast: [
    { name: 'Smoothie Bowl + Seeds', description: 'Berry smoothie bowl with chia seeds and nuts', protein: 12, calories: 320 },
    { name: 'Tofu Scramble + Toast', description: 'Scrambled tofu with vegetables and toast', protein: 18, calories: 350 },
    { name: 'Overnight Oats + Plant Milk', description: 'Oats soaked in plant milk with fruits', protein: 10, calories: 300 },
    { name: 'Chia Pudding + Fruit', description: 'Chia seed pudding with fresh fruits', protein: 8, calories: 280 },
  ],
  lunch: [
    { name: 'Tofu + Rice + Vegetables', description: 'Stir-fried tofu with brown rice and vegetables', protein: 22, calories: 480 },
    { name: 'Lentil Curry + Rice', description: 'Spiced lentil curry with brown rice', protein: 18, calories: 450 },
    { name: 'Chickpea Salad + Quinoa', description: 'Chickpea salad with quinoa and vegetables', protein: 16, calories: 420 },
    { name: 'Soy Chunks + Rice + Dal', description: 'Soy chunks curry with rice and lentils', protein: 24, calories: 500 },
  ],
  snack: [
    { name: 'Plant Protein Shake + Fruit', description: 'Plant-based protein shake with banana', protein: 25, calories: 250 },
    { name: 'Nuts + Seeds + Fruit', description: 'Mixed nuts, seeds, and fresh fruit', protein: 10, calories: 220 },
    { name: 'Roasted Chickpeas', description: 'Spiced roasted chickpeas', protein: 10, calories: 150 },
    { name: 'Hummus + Vegetables', description: 'Hummus with raw vegetables', protein: 8, calories: 180 },
  ],
  dinner: [
    { name: 'Lentil Soup + Quinoa', description: 'Hearty lentil soup with quinoa', protein: 16, calories: 380 },
    { name: 'Tofu Stir Fry + Rice', description: 'Tofu stir-fried with vegetables and rice', protein: 20, calories: 460 },
    { name: 'Chickpea Curry + Roti', description: 'Chickpea curry with whole wheat roti', protein: 18, calories: 440 },
    { name: 'Vegetable + Tofu Bowl', description: 'Mixed vegetable and tofu bowl with grains', protein: 18, calories: 420 },
  ],
};

function getMealsForDiet(diet: string, mealsPerDay: number, allergies: string, dislikedFoods: string) {
  let mealDatabase: any;
  
  if (diet === 'vegetarian') {
    mealDatabase = vegetarianMeals;
  } else if (diet === 'vegan') {
    mealDatabase = veganMeals;
  } else {
    mealDatabase = nonVegetarianMeals;
  }

  const mealTypes = ['breakfast', 'lunch', 'snack', 'dinner'];
  const selectedMeals: any[] = [];

  mealTypes.forEach((type, index) => {
    if (index < mealsPerDay) {
      const meals = mealDatabase[type as keyof typeof mealDatabase];
      const randomMeal = meals[Math.floor(Math.random() * meals.length)];
      selectedMeals.push({
        name: type.charAt(0).toUpperCase() + type.slice(1),
        ...randomMeal,
      });
    }
  });

  return selectedMeals;
}

export function generateNutritionPlan(userProfile: any) {
  const { weight, height, age, gender, goal, diet, mealsPerDay, allergies, dislikedFoods } = userProfile;

  const bmr = calculateBMR(weight, height, age, gender);
  const tdee = calculateTDEE(bmr, 'moderate'); // Default to moderate activity
  const calories = Math.round(adjustCaloriesForGoal(tdee, goal));
  const macros = calculateMacros(calories, goal, weight);

  const meals = getMealsForDiet(diet, mealsPerDay, allergies, dislikedFoods);

  return {
    calories,
    protein: macros.protein,
    carbs: macros.carbs,
    fat: macros.fat,
    bmr: Math.round(bmr),
    tdee: Math.round(tdee),
    meals,
    diet,
  };
}
