import React from "react";
import {View,Text,StyleSheet} from "react-native";
const Compliances=()=>{
    return(
        <View style={styles.conatiner}>
            <Text>Compliances</Text>
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
export default Compliances;