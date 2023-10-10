import {StyleSheet, Button, Text, View, TextInput} from "react-native";
import { useEffect, useState } from "react";

export default function TaskTwo({ navigation }) {
    const [surname, setSurname] = useState('');
    const [showValue, setShowValue] = useState(false);
    const [name, setName] = useState('');

    return (
        <View style={styles.container}>
            <Text>
                {name ? `${name}` : ''}
            </Text>
            <TextInput
                style={styles.input}
                onChangeText={text => setName(text)}
            />
            {showValue? <Text>{surname}</Text> : null}
            <TextInput
                style={styles.input}
                onChangeText={text => setSurname(text)}
            />
            <Button style={styles.btn} title="Send" onPress={() => setShowValue(!showValue)} />
            <View style={styles.bottom}>
                <Button title="Go back"
                        style={styles.button}
                        onPress={() => navigation.goBack()} />
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    btn: {
        marginVertical: 16,
    },
    input: {
        marginVertical: 16,
        padding: 8,
        backgroundColor: '#f5f5f5'
    }
});