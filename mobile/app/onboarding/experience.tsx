import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const experienceLevels = [
  { id: 'beginner', title: 'Beginner', description: 'New to working out' },
  { id: 'intermediate', title: 'Intermediate', description: 'Some experience' },
  { id: 'advanced', title: 'Advanced', description: 'Experienced lifter' },
];

export default function ExperienceScreen() {
  const router = useRouter();
  const [selectedExperience, setSelectedExperience] = useState('');

  const handleNext = async () => {
    await AsyncStorage.setItem('experience', selectedExperience);
    router.push('/onboarding/workout-frequency');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Experience Level</Text>
      <Text style={styles.subtitle}>How experienced are you with working out?</Text>

      {experienceLevels.map((level) => (
        <TouchableOpacity
          key={level.id}
          onPress={() => setSelectedExperience(level.id)}
          activeOpacity={0.7}
          style={[styles.card, selectedExperience === level.id && styles.selectedCard]}
        >
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{level.title}</Text>
            <Text style={styles.cardDescription}>{level.description}</Text>
          </View>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={[styles.button, !selectedExperience && styles.disabledButton]}
        onPress={handleNext}
        disabled={!selectedExperience}
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
  card: {
    marginBottom: 16,
    backgroundColor: '#16213e',
    borderRadius: 8,
    padding: 16,
  },
  selectedCard: {
    backgroundColor: '#6366f1',
  },
  cardContent: {
    padding: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f3f4f6',
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 14,
    color: '#9ca3af',
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
