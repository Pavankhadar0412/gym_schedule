import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const proteinOptions = [
  { id: 'whey', title: 'Whey Protein' },
  { id: 'whey_isolate', title: 'Whey Isolate' },
  { id: 'plant', title: 'Plant Protein' },
  { id: 'none', title: 'No Protein Powder' },
  { id: 'not_sure', title: 'Not Sure' },
];

const creatineOptions = [
  { id: 'monohydrate', title: 'Creatine Monohydrate' },
  { id: 'none', title: 'No Creatine' },
  { id: 'not_sure', title: 'Not Sure' },
];

export default function SupplementsScreen() {
  const router = useRouter();
  const [selectedProtein, setSelectedProtein] = useState('');
  const [selectedCreatine, setSelectedCreatine] = useState('');

  const handleNext = async () => {
    const supplementPreferences = {
      protein: selectedProtein,
      creatine: selectedCreatine,
    };
    await AsyncStorage.setItem('supplementPreferences', JSON.stringify(supplementPreferences));
    router.push('/onboarding/generating');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Supplements</Text>
      <Text style={styles.subtitle}>Select your preferences (optional)</Text>

      <Text style={styles.sectionTitle}>Protein Powder</Text>
      {proteinOptions.map((option) => (
        <TouchableOpacity
          key={option.id}
          onPress={() => setSelectedProtein(option.id)}
          activeOpacity={0.7}
          style={[styles.card, selectedProtein === option.id && styles.selectedCard]}
        >
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{option.title}</Text>
          </View>
        </TouchableOpacity>
      ))}

      <Text style={styles.sectionTitle}>Creatine</Text>
      {creatineOptions.map((option) => (
        <TouchableOpacity
          key={option.id}
          onPress={() => setSelectedCreatine(option.id)}
          activeOpacity={0.7}
          style={[styles.card, selectedCreatine === option.id && styles.selectedCard]}
        >
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{option.title}</Text>
          </View>
        </TouchableOpacity>
      ))}

      <Text style={styles.disclaimer}>
        Supplements are optional. This app provides educational information only.
        Consult a qualified healthcare professional before using supplements.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={handleNext}
      >
        <Text style={styles.buttonText}>GENERATE MY PLAN</Text>
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6366f1',
    marginBottom: 16,
    marginTop: 24,
  },
  card: {
    marginBottom: 12,
    backgroundColor: '#16213e',
    borderRadius: 8,
    padding: 16,
  },
  selectedCard: {
    backgroundColor: '#6366f1',
  },
  cardContent: {
    padding: 4,
  },
  cardTitle: {
    fontSize: 16,
    color: '#f3f4f6',
  },
  disclaimer: {
    fontSize: 12,
    color: '#6b7280',
    textAlign: 'center',
    marginVertical: 24,
    lineHeight: 16,
  },
  button: {
    backgroundColor: '#6366f1',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#f3f4f6',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
