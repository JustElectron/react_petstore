import React from 'react';
import {View, StyleSheet} from 'react-native';
import NavigationItem from '../components/navigation-item';

const NavigationBar = (props) => {
    return (
        <View style={styles.navigationBar}>
            <NavigationItem name="pets" onPress={() => props.onPress(0)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    navigationBar: {
        backgroundColor: "#FFFFFF",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
})

export default NavigationBar;