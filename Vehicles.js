import React from "react";
import {View,Text,StyleSheet} from "react-native";
const Vehicles =()=>{
    return(
        <View style={styles.conatiner}>
            <Text>Vehicles</Text>
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
export default Vehicles;