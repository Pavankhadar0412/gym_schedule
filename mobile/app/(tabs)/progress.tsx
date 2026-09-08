import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { useAsyncStorage } from '../../hooks/useAsyncStorage';

export default function ProgressScreen() {
  const [progress] = useAsyncStorage('progress', null);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Progress</Text>

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.cardTitle}>🔥 Workout Streak</Text>
          <Text style={styles.streakValue}>{progress?.streak || 0} Days</Text>
          <Text style={styles.streakLabel}>Current Streak</Text>
          <Text style={styles.streakValue}>{progress?.longestStreak || 0} Days</Text>
          <Text style={styles.streakLabel}>Longest Streak</Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.cardTitle}>Weight Progress</Text>
          <View style={styles.weightList}>
            {progress?.weightHistory?.map((entry: any, index: number) => (
              <View key={index} style={styles.weightEntry}>
                <Text style={styles.weightDate}>{entry.date}</Text>
                <Text style={styles.weightValue}>{entry.weight} kg</Text>
              </View>
            ))}
          </View>
          <Button mode="contained" style={styles.button} onPress={() => {}}>
            Add Weight
          </Button>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.cardTitle}>Weekly Completion</Text>
          <Text style={styles.completionText}>{progress?.weeklyCompletion || 0} / 5 workouts</Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.cardTitle}>Monthly Completion</Text>
          <Text style={styles.completionText}>{progress?.monthlyCompletion || 0} / 20 workouts</Text>
        </Card.Content>
      </Card>

      <Text style={styles.disclaimer}>
        Progress tracking is for informational purposes. Consult a qualified professional for health advice.
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
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6366f1',
    marginBottom: 12,
  },
  streakValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#f3f4f6',
  },
  streakLabel: {
    fontSize: 14,
    color: '#9ca3af',
    marginBottom: 16,
  },
  weightList: {
    marginBottom: 16,
  },
  weightEntry: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#374151',
  },
  weightDate: {
    fontSize: 14,
    color: '#d1d5db',
  },
  weightValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#f3f4f6',
  },
  button: {
    backgroundColor: '#6366f1',
  },
  completionText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f3f4f6',
  },
  disclaimer: {
    fontSize: 10,
    color: '#6b7280',
    textAlign: 'center',
    padding: 20,
    lineHeight: 14,
  },
});
