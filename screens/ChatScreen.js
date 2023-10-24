import { StyleSheet, Button, Text, View } from "react-native";

export default function ChatScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <Text>Chat</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    btn: {
        width: '100%',
        height: 50,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
});