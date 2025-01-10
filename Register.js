import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const Register= () => {
  // State hooks for form data
  const [Firstname, setFirstName] = useState('');
  const [Lastname, setLastName]  =useState('');
  // const [name, setLastName] = useState('');
  // const[name, setLastName]
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  
  // State for validation errors
  const [errorMessage, setErrorMessage] = useState('');

  // Handle form submission
  const handleSignUp = () => {
    // Basic validation checks
    if (!Firstname|| !Lastname || !email || !password ) {
      setErrorMessage('All fields are required');
      return;
    }
    
    // if (password !== confirmPassword) {
    //   setErrorMessage('Passwords do not match');
    //   return;
    // }

    // Clear error message
    setErrorMessage('')
    // Handle actual sign-up logic here (e.g., API call)
    Alert.alert('Success', `Welcome, ${Firstname}!`);

    // You can use this to send the data to ur backend
    // signUp({ name, email, password });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Register</Text>
      
      {/* Name Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter your Firstname"
        value={Firstname}
        onChangeText={(text) => setFirstName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your Lastname"
        value={Lastname}
        onChangeText={(text) => setLastName(text)}
      />
      
      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      
      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      
      {/* Confirm Password Input
      <TextInput
        style={styles.input}
        placeholder="Confirm your password"
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
        secureTextEntry
      /> */}

      {/* Error Message */}
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles for the sign-up page
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    width: '100%',
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
  error: {
    color: 'red',
    marginTop: 10,
    fontSize: 14,
  },
});

export default Register;
//------------------------------------------------------------
// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
// import axios from 'axios';

// const Register = ({ navigation }) => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleRegister = async () => {
//     if (!firstName || !lastName || !email || !password) {
//       Alert.alert('Validation Error', 'All fields are required!');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:9191/registration/register', {
//         firstName,
//         lastName,
//         email,
//         password,
//       });

//       if (response.status === 200) {
//         Alert.alert('Success', 'Registration successful! Please check your email to complete your registration.');
//         navigation.navigate('LoginScreen');
//       } else {
//         Alert.alert('Error', 'Registration failed. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       Alert.alert('Error', 'An error occurred while registering. Please try again.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>User Registration Form</Text>

//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>First Name:</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter your first name"
//           value={firstName}
//           onChangeText={setFirstName}
//         />
//       </View>

//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Last Name:</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter your last name"
//           value={lastName}
//           onChangeText={setLastName}
//         />
//       </View>

//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Email:</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter your email"
//           value={email}
//           onChangeText={setEmail}
//           keyboardType="email-address"
//           autoCapitalize="none"
//         />
//       </View>

//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Password:</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter your password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//         />
//       </View>

//       <Button title="Register" onPress={handleRegister} color="green" />

//       <View style={styles.footer}>
//         <Text>Already registered? </Text>
//         <Text style={styles.link} onPress={() => navigation.navigate('LoginScreen')}>Login here.</Text>
//       </View>
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
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   inputContainer: {
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 16,
//     marginBottom: 8,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     borderRadius: 4,
//     paddingHorizontal: 8,
//     backgroundColor: '#fff',
//   },
//   footer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 20,
//   },
//   link: {
//     color: 'blue',
//     textDecorationLine: 'underline',
//   },
// });

// export default Register;
