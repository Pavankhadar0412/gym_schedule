import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const goals = [
  { id: 'build_muscle', title: 'Build Muscle', emoji: '💪' },
  { id: 'lose_weight', title: 'Lose Weight', emoji: '🔥' },
  { id: 'maintain', title: 'Maintain Weight', emoji: '⚖️' },
  { id: 'gain_weight', title: 'Gain Weight', emoji: '⬆️' },
  { id: 'improve_fitness', title: 'Improve Fitness', emoji: '🏃' },
];

export default function FitnessGoalScreen() {
  const router = useRouter();
  const [selectedGoal, setSelectedGoal] = useState('');

  const handleNext = async () => {
    await AsyncStorage.setItem('fitnessGoal', selectedGoal);
    router.push('/onboarding/experience');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Fitness Goal</Text>
      <Text style={styles.subtitle}>What's your main goal?</Text>

      {goals.map((goal) => (
        <TouchableOpacity
          key={goal.id}
          onPress={() => setSelectedGoal(goal.id)}
          activeOpacity={0.7}
          style={[styles.goalCard, selectedGoal === goal.id && styles.selectedCard]}
        >
          <View style={styles.cardContent}>
            <Text style={styles.emoji}>{goal.emoji}</Text>
            <Text style={styles.goalTitle}>{goal.title}</Text>
          </View>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={[styles.button, !selectedGoal && styles.disabledButton]}
        onPress={handleNext}
        disabled={!selectedGoal}
      >
        <Text style={styles.buttonText}>NEXT</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f3f4f6',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#9ca3af',
    marginBottom: 32,
  },
  goalCard: {
    marginBottom: 16,
    backgroundColor: '#16213e',
    borderRadius: 8,
    padding: 16,
  },
  selectedCard: {
    backgroundColor: '#6366f1',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emoji: {
    fontSize: 32,
    marginRight: 16,
  },
  goalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f3f4f6',
  },
  button: {
    backgroundColor: '#6366f1',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  disabledButton: {
    backgroundColor: '#374151',
  },
  buttonText: {
    color: '#f3f4f6',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
