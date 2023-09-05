import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PetView from '../components/pet-view';


const ViewSelector = () => {
    return (
        <View style={styles.container}>
            <PetView/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#AAA",
        flex: 5,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
})

export default ViewSelector;