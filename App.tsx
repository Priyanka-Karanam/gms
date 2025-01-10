/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
//  * @format
//  */

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;
//--------------------------------------------------------------------
//GMS SignUP Page*//**** */
// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

// const SignUpPage = () => {
//   // State hooks for form data
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
  
//   // State for validation errors
//   const [errorMessage, setErrorMessage] = useState('');

//   // Handle form submission
//   const handleSignUp = () => {
//     // Basic validation checks
//     if (!name || !email || !password || !confirmPassword) {
//       setErrorMessage('All fields are required');
//       return;
//     }
    
//     if (password !== confirmPassword) {
//       setErrorMessage('Passwords do not match');
//       return;
//     }

//     // Clear error message
//     setErrorMessage('');

//     // Handle actual sign-up logic here (e.g., API call)
//     Alert.alert('Success', `Welcome, ${name}`!);

//     // You can use this to send the data to your backend, e.g.
//     // signUp({ name, email, password });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Sign Up</Text>
      
//       {/* Name Input */}
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your name"
//         value={name}
//         onChangeText={(text) => setName(text)}
//       />
      
//       {/* Email Input */}
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your email"
//         value={email}
//         onChangeText={(text) => setEmail(text)}
//         keyboardType="email-address"
//       />
      
//       {/* Password Input */}
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your password"
//         value={password}
//         onChangeText={(text) => setPassword(text)}
//         secureTextEntry
//       />
      
//       {/* Confirm Password Input */}
//       <TextInput
//         style={styles.input}
//         placeholder="Confirm your password"
//         value={confirmPassword}
//         onChangeText={(text) => setConfirmPassword(text)}
//         secureTextEntry
//       />

//       {/* Error Message */}
//       {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

//       {/* Sign Up Button */}
//       <TouchableOpacity style={styles.button} onPress={handleSignUp}>
//         <Text style={styles.buttonText}>Sign Up</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// // Styles for the sign-up page
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   header: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     marginBottom: 40,
//   },
//   input: {
//     width: '100%',
//     padding: 10,
//     marginVertical: 10,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//   },
//   button: {
//     backgroundColor: '#007BFF',
//     paddingVertical: 12,
//     width: '100%',
//     marginTop: 20,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: '#fff',
//     textAlign: 'center',
//     fontSize: 18,
//   },
//   error: {
//     color: 'red',
//     marginTop: 10,
//     fontSize: 14,
//   },
// });
// export default SignUpPage;
//-------------------------------------------------
//**Login page****
// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// const LoginScreen = () => {
//   // State for email, password, and message
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

//   // Hardcoded credentials for demo purposes
//   const HARD_CODED_EMAIL = 'abc@gmail.com';
//   const HARD_CODED_PASSWORD = 'abc123';

//   // Function to handle login
//   const handleLogin = () => {
//     if (email === HARD_CODED_EMAIL && password === HARD_CODED_PASSWORD) {
//       setMessage('Login Successful!');
//     } else {
//       setMessage('Invalid credentials');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         autoCapitalize="none"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />

//       <Button title="Login" onPress={handleLogin} />

//       {message && <Text style={styles.message}>{message}</Text>}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
//     backgroundColor: '#f4f4f4',
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 16,
//   },
//   input: {
//     width: '100%',
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     marginBottom: 12,
//     paddingLeft: 8,
//     borderRadius: 5,
//   },
//   message: {
//     marginTop: 12,
//     color: 'red',
//   },
// });

// export default LoginScreen;
//--------------------------------------------------------------
//***GMS App Register */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import LoginPage from './LoginScreen';  // Import the LoginPage
// import SignUpPage from './Register';
// import HomePage from './HomeScreen';    // Import the HomePage
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import Register from './Register';
import ForgotScreen from './ForgotScreen';
import ResetPassword from './ResetPassword';
import Inventory from './Inventory';
import AdminDashboard from './AdminDashboard';
import Quatations from './Quatations';
import Invoices from './Invoices';
import Vehicles from './Vehicles';
import Services from './Services';
import Users from './Users';
import JobCard from './Jobcard';
import Sales from './Sales';
import Remainders from './Remainders';
import Reports from './Reports';
import Dashboard from './Dashboard';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="ForgotScreen" component={ForgotScreen}/>
        <Stack.Screen name="ResetPassword" component={ResetPassword}/>
        <Stack.Screen name="AdminDashboard" component={AdminDashboard}/>
        <Stack.Screen name="Inventory" component={Inventory}/>
        <Stack.Screen name="Users" component={Users} />
        <Stack.Screen name="Services" component={Services} />
        <Stack.Screen name="JobCard" component={JobCard} />
        <Stack.Screen name="Invoices" component={Invoices} />
        <Stack.Screen name="Reports" component={Reports} />
        <Stack.Screen name="Remainders" component={Remainders} />
        <Stack.Screen name="Vehicles" component={Vehicles} />
        <Stack.Screen name="Quotations" component={Quatations} />
        <Stack.Screen name="Sales" component={Sales} />
        <Stack.Screen name="Dashboard" component={Dashboard} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
//**----------------------------------------------------------------- */
//DashBoard//
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Homepage from './dashBoard/Homepage';
// import AddCar from './dashBoard/AddCar';
// import ManageServices from './dashBoard/ManageServices';
// import ManageCars from './dashBoard/ManageCars';
// import Cars from './dashBoard/Cars';
// import CustomerFeedback from  './dashBoard/CustomerFeedback';
// // import Dashboard from './dashBoard/Dashboard';
// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="HomePage">
//         <Stack.Screen name="HomePage" component={Homepage} />
//         <Stack.Screen name="AddCar" component={AddCar} />
//         <Stack.Screen name="ManageServices" component={ManageServices} />
//         <Stack.Screen name="Cars" component={Cars} />
//         <Stack.Screen name="ManageCars" component={ManageCars}/>
//         <Stack.Screen name="CustomerFeedback" component={CustomerFeedback} />
//         {/* <Stack.Screen name="Dashboard" component={Dashboard} />
//          */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
   

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import AddCar from './Dashboard/AddCar'; // Import the AddCar screen
// import ManageCars from './Dashboard/ManageCars';// Import the ManageCars screen

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="AddCar">
//         <Stack.Screen name="AddCar" component={AddCar} />
//         <Stack.Screen name="ManageCars" component={ManageCars} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;


