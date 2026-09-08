import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const equipmentOptions = [
  { id: 'full_gym', title: 'Full Gym', emoji: '🏋️' },
  { id: 'home_gym', title: 'Home Gym', emoji: '🏠' },
  { id: 'dumbbells', title: 'Dumbbells', emoji: '💪' },
  { id: 'bodyweight', title: 'Bodyweight', emoji: '🤸' },
];

export default function EquipmentScreen() {
  const router = useRouter();
  const [selectedEquipment, setSelectedEquipment] = useState('');

  const handleNext = async () => {
    await AsyncStorage.setItem('equipment', selectedEquipment);
    router.push('/onboarding/diet');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Equipment</Text>
      <Text style={styles.subtitle}>What equipment do you have access to?</Text>

      {equipmentOptions.map((option) => (
        <TouchableOpacity
          key={option.id}
          onPress={() => setSelectedEquipment(option.id)}
          activeOpacity={0.7}
          style={[styles.card, selectedEquipment === option.id && styles.selectedCard]}
        >
          <View style={styles.cardContent}>
            <Text style={styles.emoji}>{option.emoji}</Text>
            <Text style={styles.cardTitle}>{option.title}</Text>
          </View>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={[styles.button, !selectedEquipment && styles.disabledButton]}
        onPress={handleNext}
        disabled={!selectedEquipment}
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  emoji: {
    fontSize: 32,
    marginRight: 16,
  },
  cardTitle: {
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
