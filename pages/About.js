import {StyleSheet, Button, Text, View, TextInput} from "react-native";

export default function About({ navigation }) {

    return (
        <View style={styles.container}>

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
        // alignContent: 'center',
        // justifyContent: 'center',
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