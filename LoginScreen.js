import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{6,}$/;
    return passwordRegex.test(password);
  };

  const handleLogin = () => {
    if (!validateEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    if (!validatePassword(password)) {
      Alert.alert(
        'Invalid Password',
        'Password must be at least 6 characters long, contain an uppercase letter, a lowercase letter, a number, and a special character.'
      );
      return;
    }

    // Implement login logic here (e.g., API call)
    console.log('Logging in with:', email, password);
    navigation.navigate('Home'); // Navigate to Home on successful login
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>
          Don't have an account?{' '}
          <Text
            style={styles.linkText}
            onPress={() => navigation.navigate('Register')}
          >
            Register
          </Text>
        </Text>
      </View>

      <View style={styles.forgotPasswordContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotScreen')}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingLeft: 15,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  registerContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  registerText: {
    fontSize: 16,
    color: '#555',
  },
  linkText: {
    color: '#007bff',
    textDecorationLine: 'underline',
  },
  forgotPasswordContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  forgotPasswordText: {
    color: '#007bff',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
//------------------------------------------------
// import React, { useState } from 'react';
// import { View, TextInput, Button, StyleSheet, Alert, ActivityIndicator } from 'react-native';
// import axios from 'axios';

// const LoginScreen = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleLogin = async () => {
//     if (!email || !password) {
//       Alert.alert('Validation Error', 'Email and password are required!');
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await axios.post('http://localhost:9191/login', {
//         email: email.trim(),
//         password,
//       });

//       setLoading(false);

//       if (response.status === 200) {
//         Alert.alert('Login Successful', 'You have logged in successfully!');
//         navigation.navigate('HomeScreen');
//       } else {
//         Alert.alert('Login Failed', 'Invalid credentials or server error!');
//       }
//     } catch (error) {
//       setLoading(false);
//       Alert.alert('Error', 'An error occurred. Please check your network and try again.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//         autoCapitalize="none"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       {loading ? <ActivityIndicator size="large" color="#0000ff" /> : <Button title="Login" onPress={handleLogin} />}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 16,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     marginBottom: 16,
//     padding: 8,
//     borderRadius: 4,
//   },
// });

// export default LoginScreen;

