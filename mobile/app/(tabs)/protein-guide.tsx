import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';

export default function ProteinGuideScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Protein Powder Guide</Text>

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.cardTitle}>Whey Protein</Text>
          <Text style={styles.cardSubtitle}>For users who consume dairy</Text>
          <Text style={styles.cardText}>
            • Protein per serving: 20-25g
          </Text>
          <Text style={styles.cardText}>
            • Diet compatibility: Non-vegetarian, Vegetarian
          </Text>
          <Text style={styles.cardText}>
            • Dairy content: Contains lactose
          </Text>
          <Text style={styles.cardText}>
            • Benefits: Fast absorption, complete amino acid profile
          </Text>
          <Text style={styles.cardText}>
            • Check label: Protein content per serving, added sugars
          </Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.cardTitle}>Whey Isolate</Text>
          <Text style={styles.cardSubtitle}>Higher protein concentration</Text>
          <Text style={styles.cardText}>
            • Protein per serving: 25-30g
          </Text>
          <Text style={styles.cardText}>
            • Diet compatibility: Non-vegetarian, Vegetarian
          </Text>
          <Text style={styles.cardText}>
            • Dairy content: Lower lactose than standard whey
          </Text>
          <Text style={styles.cardText}>
            • Benefits: Higher protein percentage, faster absorption
          </Text>
          <Text style={styles.cardText}>
            • Check label: Protein isolate percentage, purity
          </Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.cardTitle}>Plant Protein</Text>
          <Text style={styles.cardSubtitle}>Suitable for vegan users</Text>
          <Text style={styles.cardText}>
            • Protein per serving: 15-20g
          </Text>
          <Text style={styles.cardText}>
            • Diet compatibility: Vegan, Vegetarian
          </Text>
          <Text style={styles.cardText}>
            • Dairy content: Dairy-free
          </Text>
          <Text style={styles.cardText}>
            • Benefits: Suitable for plant-based diets, sustainable
          </Text>
          <Text style={styles.cardText}>
            • Check label: Complete amino acid profile, protein sources
          </Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.cardTitle}>No Protein Powder</Text>
          <Text style={styles.cardSubtitle}>Whole-food alternatives</Text>
          <Text style={styles.cardText}>
            • High protein foods: Chicken, fish, eggs, Greek yogurt
          </Text>
          <Text style={styles.cardText}>
            • Plant sources: Lentils, chickpeas, tofu, quinoa
          </Text>
          <Text style={styles.cardText}>
            • Benefits: Whole foods provide additional nutrients
          </Text>
          <Text style={styles.cardText}>
            • Consider: Meal planning to meet protein targets
          </Text>
        </Card.Content>
      </Card>

      <Card style={styles.warningCard}>
        <Card.Content>
          <Text style={styles.warningTitle}>Important Notes</Text>
          <Text style={styles.warningText}>
            • Protein powder is a supplement, not a replacement for whole foods
          </Text>
          <Text style={styles.warningText}>
            • Individual protein needs vary based on activity and goals
          </Text>
          <Text style={styles.warningText}>
            • Consult a healthcare professional before starting supplements
          </Text>
          <Text style={styles.warningText}>
            • Check product labels for quality and third-party testing
          </Text>
        </Card.Content>
      </Card>

      <Text style={styles.disclaimer}>
        This guide provides educational information only. Consult a qualified healthcare professional
        before using any supplements, especially if you have medical conditions or take medications.
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
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6366f1',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#9ca3af',
    marginBottom: 12,
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
  disclaimer: {
    fontSize: 10,
    color: '#6b7280',
    textAlign: 'center',
    padding: 20,
    lineHeight: 14,
  },
});
