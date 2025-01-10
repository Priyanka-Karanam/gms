import React from "react";
import {View,Text,StyleSheet} from "react-native";
const Accounts=()=>{
    return(
        <View style={styles.conatiner}>
            <Text>Accounts & Tax</Text>
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
export default Accounts;