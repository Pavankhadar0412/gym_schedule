import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { useAsyncStorage } from '../../hooks/useAsyncStorage';

export default function WorkoutScreen() {
  const [workoutPlan] = useAsyncStorage('workoutPlan', null);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Workout Schedule</Text>
      
      {workoutPlan?.weeklySchedule?.map((day: any, index: number) => (
        <Card key={index} style={styles.card}>
          <Card.Content>
            <Text style={styles.dayName}>{day.day}</Text>
            <Text style={styles.workoutName}>{day.workout}</Text>
            <Text style={styles.exerciseCount}>{day.exercises?.length || 0} Exercises</Text>
          </Card.Content>
        </Card>
      ))}

      <Text style={styles.disclaimer}>
        This app provides general fitness estimates. Consult a qualified professional for personalized advice.
      </Text>
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
  card: {
    margin: 16,
    backgroundColor: '#16213e',
  },
  dayName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6366f1',
    marginBottom: 4,
  },
  workoutName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f3f4f6',
    marginBottom: 4,
  },
  exerciseCount: {
    fontSize: 14,
    color: '#9ca3af',
  },
  disclaimer: {
    fontSize: 10,
    color: '#6b7280',
    textAlign: 'center',
    padding: 20,
    lineHeight: 14,
  },
});
