import {Button, FlatList, StyleSheet, Text, View} from "react-native";
import React, {useEffect, useState} from "react";
import {observer} from "mobx-react";
import {useRootStore} from "../hooks/useRootStore";


const CompletedTodoScreen = observer(({navigation}) => {
    const {todoStore} = useRootStore();

    const [todo, setTodo] = useState(todoStore.actionGetCompleted(todoStore.todoModel.todoList) || []);

    useEffect(() => {
    }, [todo])

    return (
        <View style={{flex: 1}}>
            <Text style={styles.header}>Завершенные задачи</Text>
            <FlatList
                data={todo}
                renderItem={({item}) => (
                    <View style={styles.todoLine}>
                        <Text style={styles.texts}>{item.text}</Text>
                    </View>
                )}/>
            <View style={{marginBottom: 70}}>
                <Button title="Go back" onPress={() => navigation.goBack()}/>
            </View>
        </View>
    );
});

const styles = StyleSheet.create({
    header: {
        fontSize: 20,
        textAlign: 'center',
        padding: 20,
        backgroundColor: '#C1E1C1'
    },
    todoLine: {
        marginVertical: 8,
        padding: 8,
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
        borderWidth: 1,
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    texts: {
        flex: 3,
        textAlign: 'center',
        fontSize: 15
    }
});

export default CompletedTodoScreen;