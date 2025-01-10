import React from "react";
import {View,Text,StyleSheet} from "react-native";
const Users =()=>{
    return(
        <View style={styles.conatiner}>
            <Text>Users</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    conatiner:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
export default Users;