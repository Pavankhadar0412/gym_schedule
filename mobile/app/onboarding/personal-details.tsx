import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function PersonalDetailsScreen() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const handleNext = async () => {
    const personalDetails = {
      name,
      age: parseInt(age) || 0,
      gender,
      height: parseInt(height) || 0,
      weight: parseInt(weight) || 0,
    };
    await AsyncStorage.setItem('personalDetails', JSON.stringify(personalDetails));
    router.push('/onboarding/fitness-goal');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Personal Details</Text>
      <Text style={styles.subtitle}>Tell us about yourself</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor="#9ca3af"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Age</Text>
        <TextInput
          value={age}
          onChangeText={setAge}
          keyboardType="number-pad"
          style={styles.input}
          placeholder="Enter your age"
          placeholderTextColor="#9ca3af"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Gender (Male/Female/Other)</Text>
        <TextInput
          value={gender}
          onChangeText={setGender}
          style={styles.input}
          placeholder="Enter your gender"
          placeholderTextColor="#9ca3af"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Height (cm)</Text>
        <TextInput
          value={height}
          onChangeText={setHeight}
          keyboardType="number-pad"
          style={styles.input}
          placeholder="Enter your height"
          placeholderTextColor="#9ca3af"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Weight (kg)</Text>
        <TextInput
          value={weight}
          onChangeText={setWeight}
          keyboardType="number-pad"
          style={styles.input}
          placeholder="Enter your weight"
          placeholderTextColor="#9ca3af"
        />
      </View>

      <TouchableOpacity 
        style={[styles.button, (!name || !age || !gender || !height || !weight) && styles.disabledButton]}
        onPress={handleNext}
        disabled={!name || !age || !gender || !height || !weight}
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
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: '#9ca3af',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#16213e',
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
