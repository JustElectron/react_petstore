import React, {useEffect, useState} from 'react';
import {View, ScrollView, Text, StyleSheet, ActivityIndicator} from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';


const PetView = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    const table = {
        tableHead: ['id', 'Name', 'Category', 'Status'],
        tableData: [
            [ '1', 'Alice', 'Cat', 'Sold'],
            [ '2', 'Bob', 'Dog', 'Sold']
        ],
    };

    const getPets = async () => {
        try {
        const response = await fetch("https://petstore3.swagger.io/api/v3/pet/findByStatus?status=available")
        const json = await response.json()
        let tab = {tableData:[]}
        for (i = 0; i < 10; i++) {
            tab.tableData.push([String(json[i].id), json[i].name, json[i].category.name, json[i].status])
        }
        console.log(tab)
        setData(tab)
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }


    useEffect(() => {
        getPets();
    }, []);

    return (
        <View style={styles.container}>
            <Text>search and create placeholder!</Text>
            {isLoading ? (<ActivityIndicator/>):
            (
            <ScrollView vertical={true}>
                <Table style={styles.table}>
                    <Row data={table.tableHead} style={styles.head} textStyle={styles.text}/>
                    <Rows data={data.tableData} textStyle={styles.text}/>
                </Table>
            </ScrollView>)}
        </View>
    )
}

/*
class PetView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['Name', 'Category', 'Status'],
            tableData: [
                ['Alice', 'Cat', 'Sold'],
                ['Bob', 'Dog', 'Sold']
            ]
          }
    }
    render() {
        return(
            <View style={styles.container}>
                <Text>search and create placeholder!</Text>
                <Table style={styles.table}>
                    <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text}/>
                    <Rows data={this.state.tableData} textStyle={styles.text}/>
                </Table>
            </View>
        )
    }
}*/


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        margin: 10,
        padding: 10,
        paddingTop: 10,
        height: "90%",
        width: "90%",
    },
    table: {
        borderColor: "#000",
        borderWidth: 1,
    },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 },
})

export default PetView;