import React from "react";
import {View,Text,StyleSheet} from "react-native";
const Dashboard =()=>{
    return(
        <View style={styles.conatiner}>
            <Text>Dashboard</Text>
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
export default Dashboard;