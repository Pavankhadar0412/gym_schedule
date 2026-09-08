import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const frequencyOptions = [
  { id: 3, title: '3 Days' },
  { id: 4, title: '4 Days' },
  { id: 5, title: '5 Days' },
  { id: 6, title: '6 Days' },
];

const daysOfWeek = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
];

export default function WorkoutFrequencyScreen() {
  const router = useRouter();
  const [selectedFrequency, setSelectedFrequency] = useState<number | null>(null);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const toggleDay = (day: string) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d: string) => d !== day));
    } else if (selectedDays.length < (selectedFrequency || 7)) {
      setSelectedDays([...selectedDays, day]);
    }
  };

  const handleNext = async () => {
    await AsyncStorage.setItem('workoutFrequency', JSON.stringify(selectedFrequency));
    await AsyncStorage.setItem('workoutDays', JSON.stringify(selectedDays));
    router.push('/onboarding/equipment');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Workout Frequency</Text>
      <Text style={styles.subtitle}>How many days can you train?</Text>

      <View style={styles.frequencyContainer}>
        {frequencyOptions.map((option) => (
          <TouchableOpacity
            key={option.id}
            onPress={() => {
              setSelectedFrequency(option.id);
              setSelectedDays([]);
            }}
            style={[styles.frequencyButton, selectedFrequency === option.id && styles.selectedFrequency]}
          >
            <Text style={styles.frequencyText}>{option.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {selectedFrequency && (
        <>
          <Text style={styles.sectionTitle}>Select your workout days</Text>
          <View style={styles.daysContainer}>
            {daysOfWeek.map((day) => (
              <TouchableOpacity
                key={day}
                onPress={() => toggleDay(day)}
                style={[
                  styles.dayButton,
                  selectedDays.includes(day) && styles.selectedDay
                ]}
                disabled={!selectedDays.includes(day) && selectedDays.length >= selectedFrequency}
              >
                <Text style={[
                  styles.dayText,
                  selectedDays.includes(day) && styles.selectedDayText
                ]}>
                  {day.substring(0, 3)}
                </Text>
                {selectedDays.includes(day) && <Text style={styles.checkmark}>✓</Text>}
              </TouchableOpacity>
            ))}
          </View>
        </>
      )}

      <TouchableOpacity
        style={[styles.button, (!selectedFrequency || selectedDays.length !== selectedFrequency) && styles.disabledButton]}
        onPress={handleNext}
        disabled={!selectedFrequency || selectedDays.length !== selectedFrequency}
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
  frequencyContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 32,
  },
  frequencyButton: {
    backgroundColor: '#16213e',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginRight: 12,
    marginBottom: 12,
    minWidth: 80,
    alignItems: 'center',
  },
  selectedFrequency: {
    backgroundColor: '#6366f1',
  },
  frequencyText: {
    color: '#f3f4f6',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f3f4f6',
    marginBottom: 16,
  },
  daysContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 32,
  },
  dayButton: {
    backgroundColor: '#16213e',
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedDay: {
    backgroundColor: '#6366f1',
  },
  dayText: {
    color: '#f3f4f6',
    fontSize: 14,
    fontWeight: 'bold',
  },
  selectedDayText: {
    color: '#f3f4f6',
  },
  checkmark: {
    color: '#f3f4f6',
    fontSize: 12,
    marginTop: 4,
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
