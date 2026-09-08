import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Modal, Alert } from 'react-native';
import { useAsyncStorage } from '../../hooks/useAsyncStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

const vegetarianMeals = {
  breakfast: [
    { name: 'Oats + Milk + Banana + Nuts', description: 'Rolled oats with milk, sliced banana, and mixed nuts', protein: 15, calories: 350 },
    { name: 'Greek Yogurt + Fruit + Granola', description: 'Greek yogurt with berries and granola', protein: 20, calories: 300 },
    { name: 'Paneer Paratha + Curd', description: 'Whole wheat paratha with paneer filling and yogurt', protein: 18, calories: 400 },
    { name: 'Smoothie Bowl', description: 'Berry smoothie with seeds and nuts', protein: 12, calories: 280 },
  ],
  lunch: [
    { name: 'Rice + Dal + Paneer + Vegetables', description: 'Brown rice, lentil curry, paneer, and mixed vegetables', protein: 25, calories: 500 },
    { name: 'Quinoa Salad + Chickpeas', description: 'Quinoa salad with chickpeas and vegetables', protein: 18, calories: 450 },
    { name: 'Rajma Rice + Salad', description: 'Kidney beans curry with rice and salad', protein: 22, calories: 480 },
    { name: 'Tofu Stir Fry + Rice', description: 'Tofu stir-fried with vegetables and rice', protein: 20, calories: 460 },
  ],
  snack: [
    { name: 'Greek Yogurt + Fruit', description: 'Greek yogurt with fresh fruits', protein: 15, calories: 180 },
    { name: 'Protein Shake + Banana', description: 'Plant protein shake with banana', protein: 25, calories: 250 },
    { name: 'Nuts + Seeds', description: 'Mixed nuts and seeds', protein: 8, calories: 200 },
    { name: 'Roasted Chickpeas', description: 'Spiced roasted chickpeas', protein: 10, calories: 150 },
  ],
  dinner: [
    { name: 'Roti + Paneer/Tofu + Vegetables', description: 'Whole wheat roti with paneer/tofu curry and vegetables', protein: 22, calories: 450 },
    { name: 'Dal + Rice + Salad', description: 'Lentil curry with rice and salad', protein: 18, calories: 420 },
    { name: 'Vegetable Soup + Toast', description: 'Mixed vegetable soup with whole grain toast', protein: 8, calories: 280 },
    { name: 'Lentil Soup + Quinoa', description: 'Hearty lentil soup with quinoa', protein: 16, calories: 380 },
  ],
};

const nonVegetarianMeals = {
  breakfast: [
    { name: 'Eggs + Toast + Avocado', description: 'Scrambled eggs with whole grain toast and avocado', protein: 25, calories: 400 },
    { name: 'Omelette + Vegetables + Toast', description: 'Egg omelette with vegetables and toast', protein: 22, calories: 380 },
    { name: 'Greek Yogurt + Eggs', description: 'Greek yogurt with boiled eggs', protein: 28, calories: 350 },
    { name: 'Protein Smoothie + Eggs', description: 'Whey protein smoothie with boiled eggs', protein: 35, calories: 420 },
  ],
  lunch: [
    { name: 'Chicken Breast + Rice + Vegetables', description: 'Grilled chicken breast with brown rice and vegetables', protein: 40, calories: 550 },
    { name: 'Fish + Quinoa + Salad', description: 'Grilled fish with quinoa and fresh salad', protein: 35, calories: 500 },
    { name: 'Chicken Curry + Rice', description: 'Chicken curry with brown rice', protein: 38, calories: 520 },
    { name: 'Egg + Chicken + Rice', description: 'Egg and chicken with rice and vegetables', protein: 42, calories: 540 },
  ],
  snack: [
    { name: 'Greek Yogurt + Fruit', description: 'Greek yogurt with fresh fruits', protein: 15, calories: 180 },
    { name: 'Protein Shake + Banana', description: 'Whey protein shake with banana', protein: 25, calories: 250 },
    { name: 'Boiled Eggs + Nuts', description: 'Boiled eggs with mixed nuts', protein: 14, calories: 220 },
    { name: 'Chicken Jerky', description: 'Dried chicken strips', protein: 20, calories: 180 },
  ],
  dinner: [
    { name: 'Grilled Chicken + Vegetables', description: 'Grilled chicken with roasted vegetables', protein: 35, calories: 450 },
    { name: 'Fish + Sweet Potato + Salad', description: 'Grilled fish with sweet potato and salad', protein: 32, calories: 480 },
    { name: 'Chicken Soup + Rice', description: 'Chicken soup with brown rice', protein: 28, calories: 400 },
    { name: 'Egg + Chicken + Vegetables', description: 'Egg and chicken stir-fry with vegetables', protein: 30, calories: 420 },
  ],
};

const veganMeals = {
  breakfast: [
    { name: 'Smoothie Bowl + Seeds', description: 'Berry smoothie bowl with chia seeds and nuts', protein: 12, calories: 320 },
    { name: 'Tofu Scramble + Toast', description: 'Scrambled tofu with vegetables and toast', protein: 18, calories: 350 },
    { name: 'Overnight Oats + Plant Milk', description: 'Oats soaked in plant milk with fruits', protein: 10, calories: 300 },
    { name: 'Chia Pudding + Fruit', description: 'Chia seed pudding with fresh fruits', protein: 8, calories: 280 },
  ],
  lunch: [
    { name: 'Tofu + Rice + Vegetables', description: 'Stir-fried tofu with brown rice and vegetables', protein: 22, calories: 480 },
    { name: 'Lentil Curry + Rice', description: 'Spiced lentil curry with brown rice', protein: 18, calories: 450 },
    { name: 'Chickpea Salad + Quinoa', description: 'Chickpea salad with quinoa and vegetables', protein: 16, calories: 420 },
    { name: 'Soy Chunks + Rice + Dal', description: 'Soy chunks curry with rice and lentils', protein: 24, calories: 500 },
  ],
  snack: [
    { name: 'Plant Protein Shake + Fruit', description: 'Plant-based protein shake with banana', protein: 25, calories: 250 },
    { name: 'Nuts + Seeds + Fruit', description: 'Mixed nuts, seeds, and fresh fruit', protein: 10, calories: 220 },
    { name: 'Roasted Chickpeas', description: 'Spiced roasted chickpeas', protein: 10, calories: 150 },
    { name: 'Hummus + Vegetables', description: 'Hummus with raw vegetables', protein: 8, calories: 180 },
  ],
  dinner: [
    { name: 'Lentil Soup + Quinoa', description: 'Hearty lentil soup with quinoa', protein: 16, calories: 380 },
    { name: 'Tofu Stir Fry + Rice', description: 'Tofu stir-fried with vegetables and rice', protein: 20, calories: 460 },
    { name: 'Chickpea Curry + Roti', description: 'Chickpea curry with whole wheat roti', protein: 18, calories: 440 },
    { name: 'Vegetable + Tofu Bowl', description: 'Mixed vegetable and tofu bowl with grains', protein: 18, calories: 420 },
  ],
};

export default function NutritionScreen() {
  const [nutritionPlan, setNutritionPlan] = useAsyncStorage('nutritionPlan', null);
  const [userProfile] = useAsyncStorage('userProfile', null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMealIndex, setSelectedMealIndex] = useState<number | null>(null);
  const [alternativeMeals, setAlternativeMeals] = useState<any[]>([]);

  const getMealDatabase = () => {
    const diet = userProfile?.diet || 'non_vegetarian';
    if (diet === 'vegetarian') return vegetarianMeals;
    if (diet === 'vegan') return veganMeals;
    return nonVegetarianMeals;
  };

  const handleReplaceMeal = (mealIndex: number, currentMealName: string) => {
    const mealDatabase = getMealDatabase();
    const mealTypes = ['breakfast', 'lunch', 'snack', 'dinner'];
    const mealType = mealTypes[mealIndex];
    
    const meals = mealDatabase[mealType as keyof typeof mealDatabase] || [];
    const alternatives = meals.filter((meal: any) => meal.name !== currentMealName);
    
    setAlternativeMeals(alternatives);
    setSelectedMealIndex(mealIndex);
    setModalVisible(true);
  };

  const handleSelectMeal = async (selectedMeal: any) => {
    if (selectedMealIndex === null) return;

    const updatedMeals = [...(nutritionPlan?.meals || [])];
    const mealTypes = ['Breakfast', 'Lunch', 'Snack', 'Dinner'];
    
    updatedMeals[selectedMealIndex] = {
      name: mealTypes[selectedMealIndex],
      ...selectedMeal,
    };

    const updatedPlan = {
      ...nutritionPlan,
      meals: updatedMeals,
    };

    setNutritionPlan(updatedPlan);
    await AsyncStorage.setItem('nutritionPlan', JSON.stringify(updatedPlan));
    
    setModalVisible(false);
    setSelectedMealIndex(null);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>My Nutrition</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Daily Targets (Estimated)</Text>
        <View style={styles.macroRow}>
          <View style={styles.macroItem}>
            <Text style={styles.macroLabel}>Calories</Text>
            <Text style={styles.macroValue}>{nutritionPlan?.calories || '--'} kcal</Text>
          </View>
          <View style={styles.macroItem}>
            <Text style={styles.macroLabel}>Protein</Text>
            <Text style={styles.macroValue}>{nutritionPlan?.protein || '--'} g</Text>
          </View>
        </View>
        <View style={styles.macroRow}>
          <View style={styles.macroItem}>
            <Text style={styles.macroLabel}>Carbs</Text>
            <Text style={styles.macroValue}>{nutritionPlan?.carbs || '--'} g</Text>
          </View>
          <View style={styles.macroItem}>
            <Text style={styles.macroLabel}>Fat</Text>
            <Text style={styles.macroValue}>{nutritionPlan?.fat || '--'} g</Text>
          </View>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Meal Plan</Text>
      
      {nutritionPlan?.meals?.map((meal: any, index: number) => (
        <View key={index} style={styles.card}>
          <View style={styles.mealHeader}>
            <Text style={styles.mealName}>{meal.name}</Text>
            <TouchableOpacity 
              style={styles.replaceButton}
              onPress={() => handleReplaceMeal(index, meal.name)}
            >
              <Text style={styles.replaceButtonText}>Replace</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.mealDescription}>{meal.description}</Text>
          <View style={styles.mealStats}>
            <Text style={styles.mealStat}>Protein: {meal.protein}g</Text>
            <Text style={styles.mealStat}>Calories: {meal.calories}</Text>
          </View>
        </View>
      ))}

      <Text style={styles.disclaimer}>
        Calorie and macro targets are estimates. Individual needs vary. Consult a qualified professional.
      </Text>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Choose Alternative Meal</Text>
            
            <ScrollView style={styles.modalScrollView}>
              {alternativeMeals.map((meal, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.alternativeMealCard}
                  onPress={() => handleSelectMeal(meal)}
                >
                  <Text style={styles.alternativeMealName}>{meal.name}</Text>
                  <Text style={styles.alternativeMealDescription}>{meal.description}</Text>
                  <View style={styles.alternativeMealStats}>
                    <Text style={styles.alternativeMealStat}>Protein: {meal.protein}g</Text>
                    <Text style={styles.alternativeMealStat}>Calories: {meal.calories}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    borderRadius: 8,
    padding: 16,
  },
  cardTitle: {
    fontSize: 12,
    color: '#9ca3af',
    marginBottom: 16,
    textTransform: 'uppercase',
  },
  macroRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  macroItem: {
    flex: 1,
  },
  macroLabel: {
    fontSize: 12,
    color: '#9ca3af',
    marginBottom: 4,
  },
  macroValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6366f1',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f3f4f6',
    paddingHorizontal: 20,
    marginTop: 8,
  },
  mealHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  mealName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f3f4f6',
    flex: 1,
  },
  mealDescription: {
    fontSize: 14,
    color: '#d1d5db',
    marginBottom: 8,
  },
  mealStats: {
    flexDirection: 'row',
    gap: 16,
  },
  mealStat: {
    fontSize: 12,
    color: '#9ca3af',
  },
  replaceButton: {
    backgroundColor: '#6366f1',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    marginLeft: 8,
  },
  replaceButtonText: {
    color: '#f3f4f6',
    fontSize: 12,
    fontWeight: 'bold',
  },
  disclaimer: {
    fontSize: 10,
    color: '#6b7280',
    textAlign: 'center',
    padding: 20,
    lineHeight: 14,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#1a1a2e',
    borderRadius: 16,
    padding: 20,
    width: '90%',
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f3f4f6',
    marginBottom: 16,
    textAlign: 'center',
  },
  modalScrollView: {
    maxHeight: 400,
    marginBottom: 16,
  },
  alternativeMealCard: {
    backgroundColor: '#16213e',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  alternativeMealName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f3f4f6',
    marginBottom: 4,
  },
  alternativeMealDescription: {
    fontSize: 12,
    color: '#9ca3af',
    marginBottom: 8,
  },
  alternativeMealStats: {
    flexDirection: 'row',
    gap: 12,
  },
  alternativeMealStat: {
    fontSize: 11,
    color: '#6366f1',
  },
  closeButton: {
    backgroundColor: '#374151',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#f3f4f6',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
