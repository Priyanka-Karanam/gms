// import React from 'react';
// import { View, Text, Button } from 'react-native';

// const HomeScreen = ({ navigation }) => {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text style={{ fontSize: 24 }}>Welcome to the Home Page!</Text>
//       <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
//     </View>
//   );
// };

// export default HomeScreen;
//------------------------------------------------
import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Welcome to the Home Page!</Text>
      <Button title="Go to Dashboard" onPress={() => navigation.navigate('AdminDashboard')} />
    </View>
  );
};

export default HomeScreen;
