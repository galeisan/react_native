import { StyleSheet, Button, Text, View } from "react-native";
import { useEffect, useState } from "react";

export default function TaskOneScreen({ navigation }) {
    const [pressedCount, setPressedCount] = useState(0);
    const [disabledCount, setCountDisabeled] = useState(false);

    const handlePress = () => {
        setPressedCount(pressedCount + 1);
    };
    const handleRestart = () => {
        setCountDisabeled(false)
        setPressedCount(0)
    }

    useEffect(() => {
        if (pressedCount > 3 & !disabledCount) {
            setCountDisabeled(true)
        }
    }, [pressedCount, disabledCount]);

    return (
        <View style={styles.container}>
            <Text style={{ margin: 16 }}>
                {pressedCount > 0
                    ? `The button was pressed ${pressedCount} times!`
                    : 'The button isn\'t pressed yet'
                }
            </Text>
            <Button
                disabled={disabledCount}
                title='Press me'
                onPress={handlePress} />
            <Button
                title='Restart'
                onPress={handleRestart} />
            <View style={styles.bottom}>
                <Button title="Go back"
                    style={styles.btn}
                    onPress={() => navigation.goBack()} />
            </View>
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