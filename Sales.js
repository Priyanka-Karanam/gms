import React from "react";
import {View,Text,StyleSheet} from "react-native";
const Sales =()=>{
    return(
        <View style={styles.conatiner}>
            <Text>Sales</Text>
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
export default Sales;