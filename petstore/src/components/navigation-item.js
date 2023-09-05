import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const NavigationItem = (props) => {
    return (
        <TouchableOpacity style={styles.navigationButton} onPress={props.onPress}>
            <Text style={styles.buttonText}>{props.name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    navigationButton: {
        width: "20%",
        height: "100%",
        justifyContent: 'center',
    },
    buttonText: {
        textAlign: 'center',
        justifyContent: 'center',
    }
})

export default NavigationItem;