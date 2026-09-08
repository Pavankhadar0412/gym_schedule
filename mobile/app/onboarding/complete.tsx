import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function CompleteScreen() {
  const router = useRouter();

  const handleViewPlan = () => {
    router.replace('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>🎉</Text>
        <Text style={styles.title}>YOUR PLAN IS READY!</Text>
        <Text style={styles.subtitle}>
          Your personalized workout and nutrition plan has been created.
        </Text>

        <View style={styles.checklist}>
          <View style={styles.checkItem}>
            <Text style={styles.checkmark}>✓</Text>
            <Text style={styles.checkText}>Workout schedule generated</Text>
          </View>
          <View style={styles.checkItem}>
            <Text style={styles.checkmark}>✓</Text>
            <Text style={styles.checkText}>Nutrition plan created</Text>
          </View>
          <View style={styles.checkItem}>
            <Text style={styles.checkmark}>✓</Text>
            <Text style={styles.checkText}>Calorie targets calculated</Text>
          </View>
          <View style={styles.checkItem}>
            <Text style={styles.checkmark}>✓</Text>
            <Text style={styles.checkText}>Weekly schedule ready</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleViewPlan}>
        <Text style={styles.buttonText}>VIEW MY PLAN</Text>
      </TouchableOpacity>

      <Text style={styles.disclaimer}>
        This app provides general fitness and nutrition estimates for informational purposes.
        Consult a qualified healthcare or fitness professional for personalized advice.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    justifyContent: 'space-between',
    padding: 32,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emoji: {
    fontSize: 80,
    marginBottom: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f3f4f6',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#9ca3af',
    textAlign: 'center',
    marginBottom: 48,
  },
  checklist: {
    width: '100%',
  },
  checkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  checkmark: {
    fontSize: 20,
    color: '#10b981',
    marginRight: 12,
  },
  checkText: {
    fontSize: 16,
    color: '#d1d5db',
  },
  button: {
    backgroundColor: '#6366f1',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#f3f4f6',
    fontSize: 16,
    fontWeight: 'bold',
  },
  disclaimer: {
    fontSize: 10,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 14,
  },
});
