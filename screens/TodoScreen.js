import React, {useEffect, useRef, useState} from "react";
import {
    ActivityIndicator,
    Alert,
    Button,
    FlatList,
    SafeAreaView,
    StyleSheet, Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import {StatusBar} from "expo-status-bar";
import {observer} from "mobx-react";
import {useRootStore} from "../hooks/useRootStore";
import TodoItem from "../components/TodoItem";
import {useNavigation} from "@react-navigation/native";
import {Modalize} from "react-native-modalize";
import {Portal} from "react-native-portalize";


const TodoScreen = observer(({navigation: {navigate}}) => {
    const navigation = useNavigation();
    const [text, setText] = useState('');
    const {todoStore} = useRootStore();

    useEffect(() => {
        todoStore.getTodoObjectFromService();
    }, [])

    const addTodo = () => {
        todoStore.actionAdd({text, completed: false, index: todoStore.todoModel.todoList.length});
        setText('');
    };
    const touchHandler = (index) => {
        todoStore.actionChange(index);
    };
    const deleteHandler = (index) => {
        todoStore.actionDelete(index);
    };
    const keyExtractor = (index) => {
        return index.toString();
    };
    const modalizeRef = useRef(null);
    const onOpen = () => {
        modalizeRef.current?.open();
    };

    const getCompletedTodo = () =>
        todoStore.todoModel === null ? [] : todoStore.actionGetCompleted();



    const deleteAlert = (index) => {
        return Alert.alert('Точно удалить', '', [
                {
                    text: 'Нет',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {text: 'Да', onPress: () => deleteHandler(index)},
            ]);
    }




    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <TextInput style={styles.textInput} onChangeText={newText => setText(newText)}
                           value={text}></TextInput>
                <Button title="Добавить" onPress={() => addTodo()}/>
                {todoStore.todoModel && !todoStore.isLoading ? (
                    <FlatList
                        data={todoStore.todoModel.todoList}
                        keyExtractor={(item, index) => keyExtractor(index)}
                        renderItem={({item, index}) => (
                            <TodoItem el={item} ind={index} touchHandler={touchHandler} deleteHandler={deleteAlert}/>
                        )}/>
                ) : (
                    <ActivityIndicator/>)
                }

                <>
                    <TouchableOpacity onPress={onOpen}>
                        <Text style={styles.modal_btn}>Завершенные задачи</Text>
                    </TouchableOpacity>
                    <Portal>
                        <Modalize
                            ref={modalizeRef}
                            modalTopOffset={200}
                            childrenStyle={{
                                padding: 16,
                                flex: 1
                            }}
                            flatListProps={{
                                data: getCompletedTodo(),
                                keyExtractor: (item, index) => keyExtractor(index),
                                renderItem: (item) =>
                                    <View style={styles.todoLineCompleted}>
                                        <Text style={styles.texts}>{item.item.text}</Text>
                                    </View>,
                                showsVerticalScrollIndicator: false,
                            }}
                        >
                        </Modalize>
                    </Portal>
                </>

            </View>
        </SafeAreaView>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
        padding: 16,
    },
    content: {
        alignItems: "center",
    },
    textInput: {
        marginVertical: 8,
        padding: 8,
        borderRadius: 8,
        borderWidth: 1,
        marginHorizontal: 10,
        width: 350,
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
    todoLineCompleted: {
        marginVertical: 8,
        padding: 8,
        backgroundColor: '#C1E1C1',
        borderRadius: 8,
        borderWidth: 1,
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    closeIcon: {
        color: 'red'
    },
    modal_btn: {
        color: '#007AFF',
        fontSize: 20,
    },
    taskCompleted: {
        backgroundColor: '#C1E1C1'
    },
});

export default TodoScreen;
