import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleReset = async () => {
    if (!email) {
      setError('Please enter your email');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // TODO: Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSent(true);
    } catch (err) {
      setError('Failed to send reset email. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Reset Password</Text>
        <Text style={styles.subtitle}>
          {sent 
            ? 'Check your email for reset instructions'
            : 'Enter your email to receive password reset instructions'
          }
        </Text>

        {error ? <Text style={styles.error}>{error}</Text> : null}

        {!sent ? (
          <>
            <TextInput
              label="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              style={styles.input}
              mode="outlined"
              theme={{ colors: { primary: '#6366f1' } }}
            />

            <Button
              mode="contained"
              style={styles.button}
              onPress={handleReset}
              loading={loading}
              disabled={loading}
            >
              SEND RESET LINK
            </Button>
          </>
        ) : (
          <Button
            mode="contained"
            style={styles.button}
            onPress={() => router.push('/auth/login')}
          >
            BACK TO LOGIN
          </Button>
        )}

        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backLink}>Back to Login</Text>
        </TouchableOpacity>
      </View>

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
  content: {
    flex: 1,
    padding: 32,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#f3f4f6',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#9ca3af',
    marginBottom: 32,
  },
  error: {
    color: '#ef4444',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    marginBottom: 16,
    backgroundColor: '#16213e',
  },
  button: {
    backgroundColor: '#6366f1',
    paddingVertical: 8,
    marginBottom: 24,
  },
  backLink: {
    color: '#6366f1',
    textAlign: 'center',
  },
  disclaimer: {
    fontSize: 10,
    color: '#6b7280',
    textAlign: 'center',
    padding: 20,
    lineHeight: 14,
  },
});
