import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { useState } from 'react';
import { useAsyncStorage } from '../../hooks/useAsyncStorage';
import { useRouter } from 'expo-router';

export default function TodayWorkoutScreen() {
  const router = useRouter();
  const [workoutPlan] = useAsyncStorage('workoutPlan', null);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [completedExercises, setCompletedExercises] = useState<number[]>([]);
  const [showTimer, setShowTimer] = useState(false);

  const todayWorkout = workoutPlan?.today;
  const exercises = todayWorkout?.exercises || [];
  const currentExercise = exercises[currentExerciseIndex];

  const handleStartExercise = () => {
    setShowTimer(true);
  };

  const handleCompleteExercise = () => {
    setCompletedExercises([...completedExercises, currentExerciseIndex]);
    setShowTimer(false);

    if (currentExerciseIndex < exercises.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
    }
  };

  const handleSkipExercise = () => {
    setShowTimer(false);
    if (currentExerciseIndex < exercises.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
    }
  };

  if (!exercises.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Today's Workout</Text>
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.restDay}>Rest Day</Text>
            <Text style={styles.restMessage}>No workout scheduled for today</Text>
          </Card.Content>
        </Card>
      </View>
    );
  }

  if (showTimer && currentExercise) {
    return (
      <View style={styles.container}>
        <View style={styles.timerContainer}>
          <Text style={styles.exerciseName}>{currentExercise.name}</Text>
          <Text style={styles.muscleGroup}>{currentExercise.muscleGroup}</Text>
          
          <View style={styles.setsInfo}>
            <Text style={styles.setsText}>{currentExercise.sets} Sets × {currentExercise.reps} Reps</Text>
            <Text style={styles.restText}>Rest: {currentExercise.rest} sec</Text>
          </View>

          <View style={styles.timerDisplay}>
            <Text style={styles.timerText}>01:30</Text>
          </View>

          <View style={styles.timerButtons}>
            <TouchableOpacity style={styles.timerButton} onPress={() => {}}>
              <Text style={styles.timerButtonText}>+30 sec</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.timerButton} onPress={() => {}}>
              <Text style={styles.timerButtonText}>-30 sec</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.skipButton} onPress={handleSkipExercise}>
            <Text style={styles.skipButtonText}>SKIP</Text>
          </TouchableOpacity>

          <Button mode="contained" style={styles.completeButton} onPress={handleCompleteExercise}>
            ✓ COMPLETED
          </Button>
        </View>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Today's Workout</Text>
      <Text style={styles.workoutName}>{todayWorkout?.name || 'Workout'}</Text>
      <Text style={styles.workoutInfo}>{exercises.length} Exercises • {todayWorkout?.duration || '30-45'} min</Text>

      {exercises.map((exercise: any, index: number) => (
        <Card
          key={index}
          style={[
            styles.exerciseCard,
            completedExercises.includes(index) && styles.completedCard
          ]}
        >
          <Card.Content>
            <View style={styles.exerciseHeader}>
              <View>
                <Text style={styles.exerciseName}>{exercise.name}</Text>
                <Text style={styles.muscleGroup}>{exercise.muscleGroup}</Text>
              </View>
              {completedExercises.includes(index) && (
                <Text style={styles.completedIcon}>✓</Text>
              )}
            </View>
            <Text style={styles.exerciseDetails}>
              {exercise.sets} Sets × {exercise.reps} Reps • Rest: {exercise.rest} sec
            </Text>
            <Text style={styles.instructions}>{exercise.instructions}</Text>
            
            {!completedExercises.includes(index) && index === currentExerciseIndex && (
              <Button mode="contained" style={styles.startButton} onPress={handleStartExercise}>
                START
              </Button>
            )}
          </Card.Content>
        </Card>
      ))}

      {completedExercises.length === exercises.length && (
        <Card style={styles.completionCard}>
          <Card.Content>
            <Text style={styles.completionTitle}>Workout Complete! 🎉</Text>
            <Button mode="contained" style={styles.finishButton} onPress={() => router.back()}>
              FINISH
            </Button>
          </Card.Content>
        </Card>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f3f4f6',
    padding: 20,
  },
  workoutName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6366f1',
    paddingHorizontal: 20,
    marginBottom: 4,
  },
  workoutInfo: {
    fontSize: 14,
    color: '#9ca3af',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  exerciseCard: {
    margin: 16,
    backgroundColor: '#16213e',
  },
  completedCard: {
    backgroundColor: '#1f2937',
    opacity: 0.7,
  },
  exerciseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f3f4f6',
    marginBottom: 4,
  },
  muscleGroup: {
    fontSize: 14,
    color: '#6366f1',
    textTransform: 'capitalize',
  },
  completedIcon: {
    fontSize: 24,
    color: '#10b981',
  },
  exerciseDetails: {
    fontSize: 14,
    color: '#d1d5db',
    marginBottom: 8,
  },
  instructions: {
    fontSize: 12,
    color: '#9ca3af',
    marginBottom: 12,
  },
  startButton: {
    backgroundColor: '#6366f1',
  },
  timerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  timerDisplay: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#16213e',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  timerText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#f3f4f6',
  },
  timerButtons: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 24,
  },
  timerButton: {
    backgroundColor: '#374151',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  timerButtonText: {
    color: '#f3f4f6',
    fontSize: 14,
    fontWeight: 'bold',
  },
  skipButton: {
    marginBottom: 16,
  },
  skipButtonText: {
    color: '#9ca3af',
    fontSize: 14,
  },
  completeButton: {
    backgroundColor: '#10b981',
    width: 200,
  },
  restDay: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6366f1',
    textAlign: 'center',
    marginBottom: 8,
  },
  restMessage: {
    fontSize: 16,
    color: '#9ca3af',
    textAlign: 'center',
  },
  card: {
    margin: 16,
    backgroundColor: '#16213e',
  },
  completionCard: {
    margin: 16,
    backgroundColor: '#10b981',
  },
  completionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f3f4f6',
    textAlign: 'center',
    marginBottom: 16,
  },
  finishButton: {
    backgroundColor: '#f3f4f6',
  },
});
