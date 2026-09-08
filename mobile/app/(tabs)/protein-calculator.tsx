import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card, Button, TextInput } from 'react-native-paper';
import { useState } from 'react';
import { useAsyncStorage } from '../../hooks/useAsyncStorage';

export default function ProteinCalculatorScreen() {
  const [userProfile] = useAsyncStorage('userProfile', null);
  const [nutritionPlan] = useAsyncStorage('nutritionPlan', null);
  const [currentIntake, setCurrentIntake] = useState('');

  const weight = userProfile?.weight || 70;
  const targetProtein = nutritionPlan?.protein || 130;
  const currentProtein = parseInt(currentIntake) || 0;
  const progress = Math.min((currentProtein / targetProtein) * 100, 100);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Protein Target</Text>

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.cardTitle}>Current Weight</Text>
          <Text style={styles.weightValue}>{weight} kg</Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.cardTitle}>Estimated Protein Range</Text>
          <Text style={styles.proteinRange}>
            {Math.round(weight * 1.6)}–{Math.round(weight * 2.0)} g/day
          </Text>
          <Text style={styles.note}>
            Based on your weight and activity level (1.6-2.0g per kg)
          </Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.cardTitle}>Today's Progress</Text>
          
          <View style={styles.progressContainer}>
            <View style={styles.progressCircle}>
              <Text style={styles.progressText}>{Math.round(progress)}%</Text>
            </View>
            <View style={styles.progressDetails}>
              <Text style={styles.currentProtein}>{currentProtein} g</Text>
              <Text style={styles.targetProtein}>/ {targetProtein} g</Text>
            </View>
          </View>

          <TextInput
            label="Log protein intake (g)"
            value={currentIntake}
            onChangeText={setCurrentIntake}
            keyboardType="number-pad"
            style={styles.input}
            mode="outlined"
            theme={{ colors: { primary: '#6366f1' } }}
          />
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.cardTitle}>Protein Sources</Text>
          <Text style={styles.sourceTitle}>High Protein Foods:</Text>
          <Text style={styles.sourceText}>• Chicken breast (31g per 100g)</Text>
          <Text style={styles.sourceText}>• Fish (22g per 100g)</Text>
          <Text style={styles.sourceText}>• Eggs (6g per egg)</Text>
          <Text style={styles.sourceText}>• Greek yogurt (10g per 100g)</Text>
          <Text style={styles.sourceText}>• Lentils (9g per 100g)</Text>
          <Text style={styles.sourceText}>• Tofu (8g per 100g)</Text>
          <Text style={styles.sourceText}>• Paneer (18g per 100g)</Text>
        </Card.Content>
      </Card>

      <Text style={styles.disclaimer}>
        Protein targets are estimates. Individual needs vary based on activity, goals, and health factors.
        Consult a qualified professional for personalized nutrition advice.
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
    fontSize: 12,
    color: '#9ca3af',
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  weightValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#6366f1',
  },
  proteinRange: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f3f4f6',
    marginBottom: 8,
  },
  note: {
    fontSize: 12,
    color: '#9ca3af',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  progressCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 8,
    borderColor: '#6366f1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 24,
  },
  progressText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f3f4f6',
  },
  progressDetails: {
    flex: 1,
  },
  currentProtein: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#10b981',
  },
  targetProtein: {
    fontSize: 16,
    color: '#9ca3af',
  },
  input: {
    backgroundColor: '#1f2937',
  },
  sourceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f3f4f6',
    marginBottom: 8,
    marginTop: 12,
  },
  sourceText: {
    fontSize: 14,
    color: '#d1d5db',
    marginBottom: 4,
  },
  disclaimer: {
    fontSize: 10,
    color: '#6b7280',
    textAlign: 'center',
    padding: 20,
    lineHeight: 14,
  },
});
