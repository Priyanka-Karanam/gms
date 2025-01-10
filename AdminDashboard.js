// import React from "react";
// import { View, Button, StyleSheet } from "react-native";

// const DashB= ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Button title="Receive Payment" onPress={() => navigation.navigate('ReceivePayment')} />
//       <Button title="Add Expense" onPress={() => navigation.navigate('AddExpense')} />
//       <Button title="New Estimate" onPress={() => navigation.navigate('NewEstimate')} />
//       <Button title="New Appointment" onPress={() => navigation.navigate('NewAppointment')} />
//       <Button title="Counter Sale" onPress={() => navigation.navigate('CounterSale')} />
//       <Button title="Quick Invoice" onPress={() => navigation.navigate('QuickInvoice')} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     padding: 20,
//   },
// });

// export default DashB;
//--------------------------------------------------------------

import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Ionicons for icons

const AdminDashboard = ({ navigation }) => {
  const menuItems = [
    { name: 'Dashboard', icon: 'home-outline', route: 'Dashboard' },
    { name: 'Inventory', icon: 'cube-outline', route: 'Inventory' },
    { name: 'Users', icon: 'people-outline', route: 'Users' },
    { name: 'Vehicles', icon: 'car-outline', route: 'Vehicles' },
    { name: 'Services', icon: 'construct-outline', route: 'Services' },
    { name: 'Quotation', icon: 'document-text-outline', route: 'Quotation' },
    { name: 'Invoices', icon: 'receipt-outline', route: 'Invoices' },
    { name: 'Job Card', icon: 'clipboard-outline', route: 'JobCard' },
    { name: 'Accounts & Tax', icon: 'calculator-outline', route: 'Accounts' },
    { name: 'Sales', icon: 'stats-chart-outline', route: 'Sales' },
    { name: 'Compliances', icon: 'checkmark-circle-outline', route: 'Compliances' },
    { name: 'Reports', icon: 'bar-chart-outline', route: 'Reports' },
    { name: 'Remainders', icon: 'calendar-outline', route: 'Remainders' },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>GARAGE MANAGEMENT SYSTEM</Text>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() => navigation.navigate(item.route)} // Navigate to the specified route
          >
            <Icon name={item.icon} size={24} color="#000" /> {/* Add the icon */}
            <Text style={styles.menuText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  header: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  menuText: {
    color: '#000',
    fontSize: 16,
    marginLeft: 15,
  },
});

export default AdminDashboard;