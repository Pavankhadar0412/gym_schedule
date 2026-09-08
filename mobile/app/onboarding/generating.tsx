import { View, Text, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { generateWorkoutPlan } from '../../services/WorkoutGenerator';
import { generateNutritionPlan } from '../../services/NutritionGenerator';

const steps = [
  'Analyzing your profile...',
  'Calculating estimated calorie needs...',
  'Creating your workout split...',
  'Building your nutrition plan...',
  'Preparing your weekly schedule...',
];

export default function GeneratingScreen() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const generatePlan = async () => {
      // Get all onboarding data
      const personalDetails = JSON.parse(await AsyncStorage.getItem('personalDetails') || '{}');
      const fitnessGoal = await AsyncStorage.getItem('fitnessGoal');
      const experience = await AsyncStorage.getItem('experience');
      const workoutFrequency = JSON.parse(await AsyncStorage.getItem('workoutFrequency') || '3');
      const workoutDays = JSON.parse(await AsyncStorage.getItem('workoutDays') || '[]');
      const equipment = await AsyncStorage.getItem('equipment');
      const dietPreferences = JSON.parse(await AsyncStorage.getItem('dietPreferences') || '{}');
      const supplementPreferences = JSON.parse(await AsyncStorage.getItem('supplementPreferences') || '{}');

      // Combine all data
      const userProfile = {
        ...personalDetails,
        goal: fitnessGoal,
        experience,
        workoutFrequency,
        workoutDays,
        equipment,
        diet: dietPreferences.diet,
        mealsPerDay: dietPreferences.mealsPerDay,
        allergies: dietPreferences.allergies,
        dislikedFoods: dietPreferences.dislikedFoods,
        proteinPreference: supplementPreferences.protein,
        creatinePreference: supplementPreferences.creatine,
      };

      // Animate through steps
      for (let i = 0; i < steps.length; i++) {
        setCurrentStep(i);
        await new Promise(resolve => setTimeout(resolve, 800));
      }

      // Generate plans
      const workoutPlan = generateWorkoutPlan(userProfile);
      const nutritionPlan = generateNutritionPlan(userProfile);

      // Save plans
      await AsyncStorage.setItem('userProfile', JSON.stringify(userProfile));
      await AsyncStorage.setItem('workoutPlan', JSON.stringify(workoutPlan));
      await AsyncStorage.setItem('nutritionPlan', JSON.stringify(nutritionPlan));
      await AsyncStorage.setItem('hasCompletedOnboarding', JSON.stringify(true));

      // Initialize progress
      await AsyncStorage.setItem('progress', JSON.stringify({
        streak: 0,
        longestStreak: 0,
        weeklyCompletion: 0,
        monthlyCompletion: 0,
        weightHistory: [],
      }));

      router.replace('/onboarding/complete');
    };

    generatePlan();
  }, [router]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>🏋️</Text>
        <Text style={styles.title}>{steps[currentStep]}</Text>
        <View style={styles.progressContainer}>
          <View style={[styles.progressBar, { width: `${((currentStep + 1) / steps.length) * 100}%` }]} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 32,
  },
  emoji: {
    fontSize: 80,
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f3f4f6',
    textAlign: 'center',
    marginBottom: 48,
  },
  progressContainer: {
    width: 200,
    height: 4,
    backgroundColor: '#374151',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#6366f1',
    borderRadius: 2,
  },
});
