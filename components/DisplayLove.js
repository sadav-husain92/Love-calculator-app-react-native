import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const DisplayLove = (props) => {

    if (props.data === '') {
        return <Text style={styles.text}></Text>
    } else if (props.data.message) {
        return <Text style={styles.text}>Kuch to Gadbad Hai, DAYAA !!!</Text>
    } else {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{props.data.percentage} %</Text>
                <Text style={styles.text}>{props.data.result}</Text>
            </View>
        );
    }
}

export default DisplayLove;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: "center"
    },
    text: {
        fontSize: 30,
        textAlign: "center"

    }
});