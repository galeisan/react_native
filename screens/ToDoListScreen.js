import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {Button, StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, SafeAreaView} from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import TodoLine from "../components/TodoItem";
const Stack = createNativeStackNavigator();

export default function ToDoListScreen({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'Todo'} component={Todo}/>
            <Stack.Screen name={'Completed'} component={CompletedTasks}/>
        </Stack.Navigator>
    );
};

function Todo({navigation}){
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');
    const addTodo = () => {
        let newTodos = [...todos];
        newTodos.push({text: text, isCompleted: false});
        setTodos(newTodos);
        setText('');
    };
    const getCompletedTodos = () => {
        const newTodos = [...todos]
        return newTodos.filter(item => item.isCompleted)
    };
    const touchHandler = (index) => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newTodos);
    };
    const deleteHandler = (index) => {
        const items = [...todos];
        items.splice(index, 1);
        setTodos(items);
    };
    const keyExtractor = (index) => {
        return index.toString();
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.input}>
                    <TextInput style={styles.textInput} onChangeText={newText => setText(newText)} value={text}></TextInput>
                    <Button title="Добавить" onPress={() => addTodo() }/>
                </View>
                <FlatList
                    data={todos}
                    keyExtractor={(item, index) => keyExtractor(index)}
                    renderItem={({item, index}) => (
                        <TodoLine el={item} ind={index} touchHandler={touchHandler} deleteHandler={deleteHandler}/>
                    )}/>
                <Button title='Завершенные задачи' onPress={() => navigation.navigate('Completed', {completedTodos: getCompletedTodos()})}/>
                <StatusBar style="auto" />
            </View>
        </SafeAreaView>
    );
}

function CompletedTasks({navigation, route}) {
    const keyExtractor = (index) => {
        return index.toString();
    };
    return (
        <View style={{marginHorizontal: 10}}>
            <FlatList
                data={route.params.completedTodos}
                keyExtractor={(item, index) => keyExtractor(index)}
                renderItem={({item}) =>
                    <View style={styles.todoLine}>
                        <Text style={styles.texts}>{item.text}</Text>
                    </View>
                }/>
            <View style={{marginBottom:70}}>
                <Button title="Go back" onPress={() => navigation.goBack()}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
        padding: 16,
    },
    textInput: {
        marginVertical: 8,
        padding: 8,
        borderRadius: 8,
        borderWidth: 1,
        marginHorizontal: 10,
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
    closeIcon: {
        color: 'red'
    },
    taskCompleted: {
        backgroundColor: '#C1E1C1'
    },
});