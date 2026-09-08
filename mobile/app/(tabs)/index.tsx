import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Card, Button, ProgressBar } from 'react-native-paper';
import { useAsyncStorage } from '../../hooks/useAsyncStorage';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  const [userProfile] = useAsyncStorage('userProfile', null);
  const [workoutPlan] = useAsyncStorage('workoutPlan', null);
  const [nutritionPlan] = useAsyncStorage('nutritionPlan', null);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'GOOD MORNING';
    if (hour < 18) return 'GOOD AFTERNOON';
    return 'GOOD EVENING';
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>{getGreeting()} 👋</Text>
        <Text style={styles.userName}>{userProfile?.name || 'User'}</Text>
      </View>

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.cardTitle}>Your Goal</Text>
          <Text style={styles.goalText}>{userProfile?.goal || 'Not set'}</Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.cardTitle}>Today's Workout</Text>
          <Text style={styles.workoutName}>{workoutPlan?.today?.name || 'Rest Day'}</Text>
          <Text style={styles.workoutDetails}>
            {workoutPlan?.today?.exercises?.length || 0} Exercises • {workoutPlan?.today?.duration || '30-45'} min
          </Text>
          <Button 
            mode="contained" 
            style={styles.button}
            onPress={() => router.push('/(tabs)/today-workout')}
          >
            START WORKOUT
          </Button>
        </Card.Content>
      </Card>

      <View style={styles.statsGrid}>
        <Card style={styles.statCard}>
          <Card.Content>
            <Text style={styles.statLabel}>Weight</Text>
            <Text style={styles.statValue}>{userProfile?.weight || '--'} kg</Text>
          </Card.Content>
        </Card>

        <Card style={styles.statCard}>
          <Card.Content>
            <Text style={styles.statLabel}>Protein</Text>
            <Text style={styles.statValue}>{nutritionPlan?.protein || '--'} g</Text>
          </Card.Content>
        </Card>

        <Card style={styles.statCard}>
          <Card.Content>
            <Text style={styles.statLabel}>Calories</Text>
            <Text style={styles.statValue}>{nutritionPlan?.calories || '--'} kcal</Text>
          </Card.Content>
        </Card>

        <Card style={styles.statCard}>
          <Card.Content>
            <Text style={styles.statLabel}>Weekly Progress</Text>
            <Text style={styles.statValue}>4 / 5</Text>
            <ProgressBar progress={0.8} style={styles.progressBar} />
          </Card.Content>
        </Card>
      </View>

      <Text style={styles.disclaimer}>
        This app provides general fitness and nutrition estimates for informational purposes.
        Consult a qualified healthcare or fitness professional for personalized advice.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  header: {
    padding: 20,
  },
  greeting: {
    fontSize: 14,
    color: '#9ca3af',
    marginBottom: 4,
  },
  userName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f3f4f6',
  },
  card: {
    margin: 16,
    backgroundColor: '#16213e',
  },
  cardTitle: {
    fontSize: 12,
    color: '#9ca3af',
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  goalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6366f1',
  },
  workoutName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f3f4f6',
    marginBottom: 4,
  },
  workoutDetails: {
    fontSize: 14,
    color: '#9ca3af',
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
    backgroundColor: '#6366f1',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8,
  },
  statCard: {
    width: '48%',
    margin: 8,
    backgroundColor: '#16213e',
  },
  statLabel: {
    fontSize: 12,
    color: '#9ca3af',
    marginBottom: 4,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f3f4f6',
  },
  progressBar: {
    marginTop: 8,
    height: 6,
    backgroundColor: '#374151',
  },
  disclaimer: {
    fontSize: 10,
    color: '#6b7280',
    textAlign: 'center',
    padding: 20,
    lineHeight: 14,
  },
});
