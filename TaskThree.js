import {StyleSheet, Button, Text, View, TextInput} from "react-native";

export default function TaskThree({ navigation }) {

    return (
        <View style={styles.container}>

            <View style={styles.bottom}>
                <Box width={90} height={70} color='#E0BBE4'></Box>
                <Box width={100} height={85} color='#957DAD'></Box>
                <Box width={150} height={90} color='#D291BC'></Box>
                <Button title="Go back"
                        style={styles.button}
                        onPress={() => navigation.goBack()} />
            </View>
        </View>
    );
};

export const Box = (props) => (
    <View style={{ width: props.width, height: props.height, backgroundColor:
        props.color}} />
);


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