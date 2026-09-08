const exerciseDatabase = {
  chest: [
    { name: 'Bench Press', equipment: ['full_gym', 'home_gym'], difficulty: 'intermediate', sets: 4, reps: '8-12', rest: 90, instructions: 'Lie on bench, grip bar, lower to chest, press up' },
    { name: 'Incline Dumbbell Press', equipment: ['full_gym', 'home_gym', 'dumbbells'], difficulty: 'intermediate', sets: 4, reps: '10-12', rest: 90, instructions: 'Lie on incline bench, press dumbbells up' },
    { name: 'Push Ups', equipment: ['full_gym', 'home_gym', 'dumbbells', 'bodyweight'], difficulty: 'beginner', sets: 3, reps: '15-20', rest: 60, instructions: 'Standard push-up position, lower and raise body' },
    { name: 'Cable Fly', equipment: ['full_gym', 'home_gym'], difficulty: 'intermediate', sets: 3, reps: '12-15', rest: 60, instructions: 'Pull cables together in front of chest' },
    { name: 'Dumbbell Fly', equipment: ['full_gym', 'home_gym', 'dumbbells'], difficulty: 'intermediate', sets: 3, reps: '12-15', rest: 60, instructions: 'Lie on bench, arc dumbbells together' },
  ],
  back: [
    { name: 'Lat Pulldown', equipment: ['full_gym', 'home_gym'], difficulty: 'beginner', sets: 4, reps: '10-12', rest: 90, instructions: 'Pull bar down to chest, control up' },
    { name: 'Pull Ups', equipment: ['full_gym', 'home_gym', 'bodyweight'], difficulty: 'intermediate', sets: 3, reps: '8-12', rest: 90, instructions: 'Pull body up to bar, lower slowly' },
    { name: 'Seated Cable Row', equipment: ['full_gym', 'home_gym'], difficulty: 'beginner', sets: 4, reps: '10-12', rest: 90, instructions: 'Row cable to chest, squeeze back' },
    { name: 'Dumbbell Row', equipment: ['full_gym', 'home_gym', 'dumbbells'], difficulty: 'beginner', sets: 4, reps: '10-12', rest: 90, instructions: 'Row dumbbell to hip, keep back straight' },
  ],
  shoulders: [
    { name: 'Shoulder Press', equipment: ['full_gym', 'home_gym', 'dumbbells'], difficulty: 'intermediate', sets: 4, reps: '8-12', rest: 90, instructions: 'Press weight overhead, lower to shoulders' },
    { name: 'Lateral Raise', equipment: ['full_gym', 'home_gym', 'dumbbells'], difficulty: 'beginner', sets: 3, reps: '12-15', rest: 60, instructions: 'Raise dumbbells to shoulder height' },
    { name: 'Rear Delt Fly', equipment: ['full_gym', 'home_gym', 'dumbbells'], difficulty: 'beginner', sets: 3, reps: '12-15', rest: 60, instructions: 'Bend over, raise dumbbells to sides' },
  ],
  legs: [
    { name: 'Squat', equipment: ['full_gym', 'home_gym'], difficulty: 'intermediate', sets: 4, reps: '8-12', rest: 120, instructions: 'Bar on shoulders, squat down and stand up' },
    { name: 'Leg Press', equipment: ['full_gym', 'home_gym'], difficulty: 'beginner', sets: 4, reps: '12-15', rest: 90, instructions: 'Press platform away with legs' },
    { name: 'Romanian Deadlift', equipment: ['full_gym', 'home_gym', 'dumbbells'], difficulty: 'intermediate', sets: 4, reps: '10-12', rest: 90, instructions: 'Hinge at hips, lower weight, stand up' },
    { name: 'Leg Curl', equipment: ['full_gym', 'home_gym'], difficulty: 'beginner', sets: 3, reps: '12-15', rest: 60, instructions: 'Curl weight toward glutes' },
    { name: 'Calf Raise', equipment: ['full_gym', 'home_gym', 'dumbbells', 'bodyweight'], difficulty: 'beginner', sets: 4, reps: '15-20', rest: 60, instructions: 'Rise onto toes, lower and repeat' },
    { name: 'Lunges', equipment: ['full_gym', 'home_gym', 'dumbbells', 'bodyweight'], difficulty: 'beginner', sets: 3, reps: '12 each', rest: 60, instructions: 'Step forward, lower back knee, return' },
  ],
  biceps: [
    { name: 'Dumbbell Curl', equipment: ['full_gym', 'home_gym', 'dumbbells'], difficulty: 'beginner', sets: 3, reps: '10-12', rest: 60, instructions: 'Curl dumbbell to shoulder, lower slowly' },
    { name: 'Hammer Curl', equipment: ['full_gym', 'home_gym', 'dumbbells'], difficulty: 'beginner', sets: 3, reps: '10-12', rest: 60, instructions: 'Curl with neutral grip, palms facing' },
    { name: 'Barbell Curl', equipment: ['full_gym', 'home_gym'], difficulty: 'intermediate', sets: 3, reps: '10-12', rest: 60, instructions: 'Curl barbell to chest, control down' },
  ],
  triceps: [
    { name: 'Triceps Pushdown', equipment: ['full_gym', 'home_gym'], difficulty: 'beginner', sets: 3, reps: '12-15', rest: 60, instructions: 'Push cable down, extend arms' },
    { name: 'Overhead Triceps Extension', equipment: ['full_gym', 'home_gym', 'dumbbells'], difficulty: 'intermediate', sets: 3, reps: '10-12', rest: 60, instructions: 'Extend weight overhead, lower behind head' },
    { name: 'Diamond Push Up', equipment: ['full_gym', 'home_gym', 'dumbbells', 'bodyweight'], difficulty: 'intermediate', sets: 3, reps: '10-15', rest: 60, instructions: 'Push-up with hands close together' },
  ],
  core: [
    { name: 'Plank', equipment: ['full_gym', 'home_gym', 'dumbbells', 'bodyweight'], difficulty: 'beginner', sets: 3, reps: '30-60 sec', rest: 60, instructions: 'Hold push-up position on forearms' },
    { name: 'Crunches', equipment: ['full_gym', 'home_gym', 'dumbbells', 'bodyweight'], difficulty: 'beginner', sets: 3, reps: '15-20', rest: 60, instructions: 'Curl shoulders off ground, engage abs' },
    { name: 'Leg Raises', equipment: ['full_gym', 'home_gym', 'dumbbells', 'bodyweight'], difficulty: 'intermediate', sets: 3, reps: '12-15', rest: 60, instructions: 'Lie down, raise legs, lower slowly' },
  ],
};

const workoutSplits = {
  beginner_3: [
    { day: 'Day 1', name: 'Full Body A', muscles: ['chest', 'back', 'legs', 'shoulders', 'core'] },
    { day: 'Day 2', name: 'Full Body B', muscles: ['chest', 'back', 'legs', 'shoulders', 'core'] },
    { day: 'Day 3', name: 'Full Body C', muscles: ['chest', 'back', 'legs', 'shoulders', 'core'] },
  ],
  intermediate_4: [
    { day: 'Day 1', name: 'Upper Body', muscles: ['chest', 'back', 'shoulders', 'biceps', 'triceps'] },
    { day: 'Day 2', name: 'Lower Body', muscles: ['legs', 'core'] },
    { day: 'Day 3', name: 'Upper Body', muscles: ['chest', 'back', 'shoulders', 'biceps', 'triceps'] },
    { day: 'Day 4', name: 'Lower Body', muscles: ['legs', 'core'] },
  ],
  intermediate_5: [
    { day: 'Day 1', name: 'Chest + Triceps', muscles: ['chest', 'triceps'] },
    { day: 'Day 2', name: 'Back + Biceps', muscles: ['back', 'biceps'] },
    { day: 'Day 3', name: 'Legs', muscles: ['legs', 'core'] },
    { day: 'Day 4', name: 'Shoulders + Abs', muscles: ['shoulders', 'core'] },
    { day: 'Day 5', name: 'Upper Body', muscles: ['chest', 'back', 'shoulders', 'biceps', 'triceps'] },
  ],
  advanced_5: [
    { day: 'Day 1', name: 'Chest + Triceps', muscles: ['chest', 'triceps'] },
    { day: 'Day 2', name: 'Back + Biceps', muscles: ['back', 'biceps'] },
    { day: 'Day 3', name: 'Legs', muscles: ['legs', 'core'] },
    { day: 'Day 4', name: 'Shoulders + Abs', muscles: ['shoulders', 'core'] },
    { day: 'Day 5', name: 'Full Body', muscles: ['chest', 'back', 'legs', 'shoulders', 'core'] },
  ],
  advanced_6: [
    { day: 'Day 1', name: 'Chest + Triceps', muscles: ['chest', 'triceps'] },
    { day: 'Day 2', name: 'Back + Biceps', muscles: ['back', 'biceps'] },
    { day: 'Day 3', name: 'Legs', muscles: ['legs', 'core'] },
    { day: 'Day 4', name: 'Shoulders + Abs', muscles: ['shoulders', 'core'] },
    { day: 'Day 5', name: 'Chest + Triceps', muscles: ['chest', 'triceps'] },
    { day: 'Day 6', name: 'Back + Biceps', muscles: ['back', 'biceps'] },
  ],
};

function getWorkoutSplit(experience: string, frequency: number) {
  const key = `${experience}_${frequency}`;
  if (workoutSplits[key as keyof typeof workoutSplits]) {
    return workoutSplits[key as keyof typeof workoutSplits];
  }
  return workoutSplits.beginner_3;
}

function getExercisesForMuscle(muscle: string, equipment: string, experience: string) {
  const exercises = exerciseDatabase[muscle as keyof typeof exerciseDatabase] || [];
  return exercises.filter((ex: any) => 
    ex.equipment.includes(equipment) || ex.equipment.includes('bodyweight')
  );
}

function generateWorkoutDay(splitDay: any, equipment: string, experience: string) {
  const exercises: any[] = [];
  
  splitDay.muscles.forEach((muscle: string) => {
    const muscleExercises = getExercisesForMuscle(muscle, equipment, experience);
    const numExercises = experience === 'beginner' ? 1 : experience === 'intermediate' ? 2 : 3;
    
    for (let i = 0; i < Math.min(numExercises, muscleExercises.length); i++) {
      exercises.push({
        ...muscleExercises[i],
        muscleGroup: muscle,
      });
    }
  });

  return {
    name: splitDay.name,
    exercises,
    duration: `${30 + exercises.length * 8}-${45 + exercises.length * 10}`,
  };
}

export function generateWorkoutPlan(userProfile: any) {
  const { experience, workoutFrequency, equipment, workoutDays } = userProfile;
  
  const split = getWorkoutSplit(experience, workoutFrequency);
  const workoutPlan: any[] = [];
  
  split.forEach((splitDay: any, index: number) => {
    const workout = generateWorkoutDay(splitDay, equipment, experience);
    workoutPlan.push({
      day: workoutDays[index] || `Day ${index + 1}`,
      ...workout,
    });
  });

  // Add rest days
  const allDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const weeklySchedule = allDays.map(day => {
    const workout = workoutPlan.find(w => w.day === day);
    if (workout) {
      return { day, workout: workout.name, exercises: workout.exercises };
    }
    return { day, workout: 'Rest', exercises: [] };
  });

  // Get today's workout
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const todayWorkout = weeklySchedule.find((w: any) => w.day === today);

  return {
    weeklySchedule,
    today: todayWorkout || { name: 'Rest Day', exercises: [], duration: '0' },
    split: split.map((s: any) => s.name),
  };
}
