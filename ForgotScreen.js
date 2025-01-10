import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const ForgotScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  

  const handlePasswordReset = () => {
    // In a real application, you'll send an email reset request to your backend
    if (!email) {
      Alert.alert('Error', 'Please enter your email address.');
      return;
    }

    // Fake password reset logic
    Alert.alert('Password Reset', `A password reset link has been sent to ${email}`);
    navigation.navigate('Login'); // Navigate back to login screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.subtitle}>Enter your email to reset your password</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <View style={styles.buttonContainer}>
        <Button title="Reset Password" onPress={handlePasswordReset} />
      </View>

      <Text
        style={styles.backToLoginText}
        onPress={() => navigation.navigate('Login')}
      >
        Back to Login
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  backToLoginText: {
    textAlign: 'center',
    color: '#007bff',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
});

export default ForgotScreen;
//-----------------------------------------------
// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, Alert, ActivityIndicator } from 'react-native';
// import axios from 'axios';

// const ForgotScreen = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleForgotPassword = async () => {
//     if (!email.trim()) {
//       Alert.alert('Validation Error', 'Please enter your email address.');
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await axios.post('http://localhot:9191/registration/forgot-password', {
//         email: email.trim(),
//       });

//       setLoading(false);

//       if (response.status === 200) {
//         Alert.alert('Success', 'A verification link has been sent to your email. Please check your inbox.');
//       } else {
//         Alert.alert('Error', 'An unexpected error occurred. Please try again later.');
//       }
//     } catch (error) {
//       setLoading(false);
//       console.error('Error:', error);
//       if (error.response) {
//         Alert.alert('Error', error.response.data?.message || 'No user found with this email.');
//       } else {
//         Alert.alert('Error', 'Unable to connect to the server. Please check your internet connection.');
//       }
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Forgot Password</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//         autoCapitalize="none"
//       />
//       {loading ? (
//         <ActivityIndicator size="large" color="#0000ff" />
//       ) : (
//         <Button title="Verify Email" onPress={handleForgotPassword} />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 16,
//     backgroundColor: '#f5f5f5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     borderRadius: 4,
//     marginBottom: 16,
//     paddingHorizontal: 8,
//     backgroundColor: '#fff',
//   },
// });

// export default ForgotScreen;

