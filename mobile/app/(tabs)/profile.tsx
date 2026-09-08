import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Card, Button, Divider } from 'react-native-paper';
import { useAsyncStorage } from '../../hooks/useAsyncStorage';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfileScreen() {
  const [userProfile] = useAsyncStorage('userProfile', null);
  const router = useRouter();

  const handleLogout = async () => {
    // Clear auth state
    await AsyncStorage.setItem('isAuthenticated', JSON.stringify(false));
    router.replace('/auth/login');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Profile</Text>

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.name}>{userProfile?.name || 'User'}</Text>
          <Text style={styles.email}>{userProfile?.email || 'user@example.com'}</Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.sectionTitle}>Personal Details</Text>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Age</Text>
            <Text style={styles.detailValue}>{userProfile?.age || '--'} years</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Gender</Text>
            <Text style={styles.detailValue}>{userProfile?.gender || '--'}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Height</Text>
            <Text style={styles.detailValue}>{userProfile?.height || '--'} cm</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Weight</Text>
            <Text style={styles.detailValue}>{userProfile?.weight || '--'} kg</Text>
          </View>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.sectionTitle}>Fitness Goals</Text>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Goal</Text>
            <Text style={styles.detailValue}>{userProfile?.goal || '--'}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Experience</Text>
            <Text style={styles.detailValue}>{userProfile?.experience || '--'}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Workout Days</Text>
            <Text style={styles.detailValue}>{userProfile?.workoutDays?.length || 0} days/week</Text>
          </View>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.sectionTitle}>Preferences</Text>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Diet</Text>
            <Text style={styles.detailValue}>{userProfile?.diet || '--'}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Equipment</Text>
            <Text style={styles.detailValue}>{userProfile?.equipment || '--'}</Text>
          </View>
        </Card.Content>
      </Card>

      <Button mode="contained" style={styles.editButton} onPress={() => {}}>
        Edit Profile
      </Button>

      <Button mode="outlined" style={styles.logoutButton} onPress={handleLogout}>
        Logout
      </Button>

      <Text style={styles.disclaimer}>
        This app provides general fitness information. Consult qualified professionals for personalized advice.
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
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f3f4f6',
  },
  email: {
    fontSize: 14,
    color: '#9ca3af',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6366f1',
    marginBottom: 12,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#374151',
  },
  detailLabel: {
    fontSize: 14,
    color: '#9ca3af',
  },
  detailValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#f3f4f6',
  },
  editButton: {
    margin: 16,
    backgroundColor: '#6366f1',
  },
  logoutButton: {
    margin: 16,
    marginTop: 0,
    borderColor: '#ef4444',
  },
  disclaimer: {
    fontSize: 10,
    color: '#6b7280',
    textAlign: 'center',
    padding: 20,
    lineHeight: 14,
  },
});
