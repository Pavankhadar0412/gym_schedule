import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const dietOptions = [
  { id: 'vegetarian', title: 'Vegetarian', emoji: '🥬' },
  { id: 'non_vegetarian', title: 'Non-Vegetarian', emoji: '🍗' },
  { id: 'vegan', title: 'Vegan', emoji: '🌱' },
];

export default function DietScreen() {
  const router = useRouter();
  const [selectedDiet, setSelectedDiet] = useState('');
  const [mealsPerDay, setMealsPerDay] = useState('3');
  const [allergies, setAllergies] = useState('');
  const [dislikedFoods, setDislikedFoods] = useState('');

  const handleNext = async () => {
    const dietPreferences = {
      diet: selectedDiet,
      mealsPerDay: parseInt(mealsPerDay) || 3,
      allergies,
      dislikedFoods,
    };
    await AsyncStorage.setItem('dietPreferences', JSON.stringify(dietPreferences));
    router.push('/onboarding/supplements');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Diet Preferences</Text>
      <Text style={styles.subtitle}>Select your diet type</Text>

      {dietOptions.map((option) => (
        <TouchableOpacity
          key={option.id}
          onPress={() => setSelectedDiet(option.id)}
          activeOpacity={0.7}
          style={[styles.card, selectedDiet === option.id && styles.selectedCard]}
        >
          <View style={styles.cardContent}>
            <Text style={styles.emoji}>{option.emoji}</Text>
            <Text style={styles.cardTitle}>{option.title}</Text>
          </View>
        </TouchableOpacity>
      ))}

      <View style={styles.inputCard}>
        <Text style={styles.label}>Meals Per Day</Text>
        <TextInput
          value={mealsPerDay}
          onChangeText={setMealsPerDay}
          keyboardType="number-pad"
          style={styles.input}
          placeholder="3"
          placeholderTextColor="#9ca3af"
        />
      </View>

      <View style={styles.inputCard}>
        <Text style={styles.label}>Allergies (Optional)</Text>
        <TextInput
          value={allergies}
          onChangeText={setAllergies}
          style={styles.input}
          placeholder="None"
          placeholderTextColor="#9ca3af"
        />
      </View>

      <View style={styles.inputCard}>
        <Text style={styles.label}>Disliked Foods (Optional)</Text>
        <TextInput
          value={dislikedFoods}
          onChangeText={setDislikedFoods}
          style={styles.input}
          placeholder="None"
          placeholderTextColor="#9ca3af"
        />
      </View>

      <TouchableOpacity
        style={[styles.button, !selectedDiet && styles.disabledButton]}
        onPress={handleNext}
        disabled={!selectedDiet}
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
  inputCard: {
    marginBottom: 16,
    backgroundColor: '#16213e',
    borderRadius: 8,
    padding: 16,
  },
  label: {
    fontSize: 14,
    color: '#9ca3af',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#1f2937',
    color: '#f3f4f6',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#374151',
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
