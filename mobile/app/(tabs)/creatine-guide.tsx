import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';

export default function CreatineGuideScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Creatine Guide</Text>

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.cardTitle}>Creatine Monohydrate</Text>
          <Text style={styles.cardSubtitle}>The most researched form of creatine</Text>
          
          <Text style={styles.sectionTitle}>What is it?</Text>
          <Text style={styles.cardText}>
            Creatine monohydrate is a naturally occurring compound found in muscle cells.
            It helps your muscles produce energy during heavy lifting or high-intensity exercise.
          </Text>

          <Text style={styles.sectionTitle}>Usage</Text>
          <Text style={styles.cardText}>
            • It is generally taken consistently rather than only on workout days
          </Text>
          <Text style={styles.cardText}>
            • Typical dose: 3-5g per day
          </Text>
          <Text style={styles.cardText}>
            • Can be mixed with water or another beverage
          </Text>
          <Text style={styles.cardText}>
            • Timing is flexible - morning, pre-workout, or post-workout
          </Text>

          <Text style={styles.sectionTitle}>Considerations</Text>
          <Text style={styles.cardText}>
            • Stay hydrated when using creatine
          </Text>
          <Text style={styles.cardText}>
            • Effects may take several weeks to become noticeable
          </Text>
          <Text style={styles.cardText}>
            • Not necessary for everyone, especially beginners
          </Text>
          <Text style={styles.cardText}>
            • Whole foods like red meat and fish also contain creatine
          </Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.cardTitle}>No Creatine</Text>
          <Text style={styles.cardSubtitle}>Training without supplementation</Text>
          
          <Text style={styles.sectionTitle}>Natural Sources</Text>
          <Text style={styles.cardText}>
            • Red meat: Beef, pork
          </Text>
          <Text style={styles.cardText}>
            • Fish: Herring, salmon, tuna
          </Text>
          <Text style={styles.cardText}>
            • Small amounts in chicken and some plant foods
          </Text>

          <Text style={styles.sectionTitle}>Training Focus</Text>
          <Text style={styles.cardText}>
            • Focus on progressive overload in training
          </Text>
          <Text style={styles.cardText}>
            • Ensure adequate protein intake
          </Text>
          <Text style={styles.cardText}>
            • Get sufficient rest and recovery
          </Text>
        </Card.Content>
      </Card>

      <Card style={styles.warningCard}>
        <Card.Content>
          <Text style={styles.warningTitle}>Important Safety Information</Text>
          <Text style={styles.warningText}>
            • Creatine is generally considered safe for healthy adults
          </Text>
          <Text style={styles.warningText}>
            • Do not exceed recommended doses
          </Text>
          <Text style={styles.warningText}>
            • Not recommended for individuals with kidney problems
          </Text>
          <Text style={styles.warningText}>
            • May cause water weight gain initially
          </Text>
          <Text style={styles.warningText}>
            • Quality matters - choose reputable brands
          </Text>
        </Card.Content>
      </Card>

      <Card style={styles.disclaimerCard}>
        <Card.Content>
          <Text style={styles.disclaimerTitle}>Medical Disclaimer</Text>
          <Text style={styles.disclaimerText}>
            Consult a qualified healthcare professional if you have a medical condition,
            take medication, or have concerns about using supplements.
            This information is for educational purposes only and does not constitute medical advice.
          </Text>
        </Card.Content>
      </Card>

      <Text style={styles.disclaimer}>
        This guide provides educational information only. Always consult a qualified healthcare
        professional before starting any supplement regimen.
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
  warningCard: {
    margin: 16,
    backgroundColor: '#1f2937',
    borderWidth: 1,
    borderColor: '#f59e0b',
  },
  disclaimerCard: {
    margin: 16,
    backgroundColor: '#1f2937',
    borderWidth: 1,
    borderColor: '#6366f1',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6366f1',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#9ca3af',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f3f4f6',
    marginTop: 16,
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: '#d1d5db',
    marginBottom: 6,
  },
  warningTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f59e0b',
    marginBottom: 12,
  },
  warningText: {
    fontSize: 13,
    color: '#f3f4f6',
    marginBottom: 8,
  },
  disclaimerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6366f1',
    marginBottom: 12,
  },
  disclaimerText: {
    fontSize: 13,
    color: '#f3f4f6',
    lineHeight: 18,
  },
  disclaimer: {
    fontSize: 10,
    color: '#6b7280',
    textAlign: 'center',
    padding: 20,
    lineHeight: 14,
  },
});
