
import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";

const Users = () => {
  const usersData = [
    { id: "1", name: "Vinay", role: "Customer" },
    { id: "2", name: "vyshnavi", role: "Customer" },
    { id: "3", name: "Priyaa", role: "Customer" },
    { id: "4", name: "swamy", role: "Customer" },
  ];

  const renderUserItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Text style={styles.userName}>{item.name}</Text>
      <Text style={styles.userRole}>{item.role}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Users</Text>
      <FlatList
        data={usersData}
        renderItem={renderUserItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  listContainer: {
    paddingBottom: 20,
  },
  itemContainer: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
  },
  userName: {
    fontSize: 18,
    fontWeight: "600",
  },
  userRole: {
    fontSize: 16,
    color: "#777",
    marginTop: 4,
  },
});

export default Users;
