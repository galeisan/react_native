// import React, {useEffect, useRef, useState} from "react";
// import {
//     ActivityIndicator,
//     Alert,
//     Button,
//     FlatList,
//     SafeAreaView,
//     StyleSheet, Text,
//     TextInput,
//     TouchableOpacity,
//     View
// } from "react-native";
// import {StatusBar} from "expo-status-bar";
// import {observer} from "mobx-react";
// import {useRootStore} from "../stores/useRootStore";
// import TodoItem from "../components/TodoItem";
// import {useNavigation} from "@react-navigation/native";
// import {Modalize} from "react-native-modalize";
// import {Portal} from "react-native-portalize";
//
//
// const TodoScreen = observer(({navigation: {navigate}}) => {
//     const navigation = useNavigation();
//     const [text, setText] = useState('');
//     const {todoStore} = useRootStore();
//
//     useEffect(() => {
//         todoStore.getTodoObjectFromService();
//     }, [])
//
//     const addTodo = () => {
//         todoStore.actionAdd({text, completed: false, index: todoStore.todoModel.todoList.length});
//         setText('');
//     };
//     const touchTodo = (index) => {
//         todoStore.actionChange(index);
//     };
//     const deleteHandler = (index) => {
//         todoStore.actionDelete(index);
//     };
//     const keyExtractor = (index) => {
//         return index.toString();
//     };
//     const modalizeRef = useRef(null);
//     const onOpen = () => {
//         modalizeRef.current?.open();
//     };
//
//     const getCompletedTodo = () =>
//         todoStore.todoModel === null ? [] : todoStore.actionGetCompleted();
//
//
//
//     const deleteAlert = (index) => {
//         return Alert.alert('Точно удалить', '', [
//                 {
//                     text: 'Нет',
//                     onPress: () => console.log('Cancel Pressed'),
//                     style: 'cancel',
//                 },
//                 {text: 'Да', onPress: () => deleteHandler(index)},
//             ]);
//     }
//
//
//
//
//     return (
//         <SafeAreaView style={styles.container}>
//             <View style={styles.content}>
//                 <TextInput style={styles.textInput} onChangeText={newText => setText(newText)}
//                            value={text}></TextInput>
//                 <Button title="Добавить" onPress={() => addTodo()}/>
//                 {todoStore.todoModel && !todoStore.isLoading ? (
//                     <FlatList
//                         data={todoStore.todoModel.todoList}
//                         keyExtractor={(item, index) => keyExtractor(index)}
//                         renderItem={({item, index}) => (
//                             <TodoItem el={item} ind={index} touchTodo={touchTodo} deleteHandler={deleteAlert}/>
//                         )}/>
//                 ) : (
//                     <ActivityIndicator/>)
//                 }
//                 <Button title='Завершенные задачи'
//                         onPress={() => navigate('Completed', {completedTodos: todoStore.todoModel.todoList})}/>
//                 <StatusBar style="auto"/>
//
//                 <>
//                     <TouchableOpacity onPress={onOpen}>
//                         <Text>Open the modal</Text>
//                     </TouchableOpacity>
//                     <Portal>
//                         <Modalize
//                             ref={modalizeRef}
//                             modalTopOffset={200}
//                             childrenStyle={{
//                                 padding: 16,
//                                 flex: 1
//                             }}
//                             flatListProps={{
//                                 data: getCompletedTodo(),
//                                 keyExtractor: (item, index) => keyExtractor(index),
//                                 renderItem: (item) =>
//                                     <View>
//                                         <Text style={styles.texts}>{item.text}</Text>
//                                     </View>,
//                                 showsVerticalScrollIndicator: false,
//                             }}
//                         >
//                         </Modalize>
//                     </Portal>
//                 </>
//
//             </View>
//         </SafeAreaView>
//     );
// });
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         flexDirection: 'column',
//         alignContent: 'center',
//         padding: 16,
//     },
//     textInput: {
//         marginVertical: 8,
//         padding: 8,
//         borderRadius: 8,
//         borderWidth: 1,
//         marginHorizontal: 10,
//     },
//     todoLine: {
//         marginVertical: 8,
//         padding: 8,
//         backgroundColor: '#f5f5f5',
//         borderRadius: 8,
//         borderWidth: 1,
//         marginHorizontal: 10,
//         flexDirection: 'row',
//         justifyContent: "space-between",
//     },
//     closeIcon: {
//         color: 'red'
//     },
//     taskCompleted: {
//         backgroundColor: '#C1E1C1'
//     },
// });
//
// export default TodoScreen;

import React, {useEffect, useRef, useState} from "react";
import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    TextInput,
    Text,
    TouchableOpacity,
    View, ActivityIndicator, Alert
} from "react-native";
import {StatusBar} from "expo-status-bar";
import {observer} from "mobx-react";
import {useRootStore} from "../stores/useRootStore";
import TodoItem from "../components/TodoItem";
import {useNavigation} from "@react-navigation/native";
import {Portal} from "react-native-portalize";
import {Modalize} from "react-native-modalize";

const ToDoScreen = observer(({navigation: {navigate}}) => {
    const navigation = useNavigation();
    const [text, setText] = useState('');
    const {todoStore} = useRootStore();

    useEffect(() => {
        todoStore.getTodoObjectFromService();
    }, [todoStore])

    const modalizeRef = useRef(null);

    const openCompletedTodo = () => {
        modalizeRef.current?.open();
    }

    const getCompletedTodo = () =>
        todoStore.todoModel === null ? [] : todoStore.actionGetCompleted();


    const addTodo = () => {
        const index = todoStore.todoModel.todoList?.length ?? 0;
        todoStore.actionAdd({
            text,
            completed: false,
            index: index,
        });
        setText('');
    };
    const touchTodo = (index) => {
        todoStore.actionChange(index);
    };
    const deleteTodo = (index) => {
        todoStore.actionDelete(index);
    };
    const keyExtractor = (index) => {
        return index.toString();
    };

    const deleteAlert = (index: number) => {
        return Alert.alert('This item will be deleted', 'Are you sure?', [
            {
                text: 'Cancel',
                onPress: () => {
                    console.log('Canceled');
                },
                style: 'cancel',
            },
            {
                text: 'Delete',
                onPress: () => deleteTodo(index)
            },
        ]);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={[styles.defaultText, {marginTop: 40}]}>NEW:</Text>
                {todoStore.todoModel && !todoStore.isLoading ? (
                    <FlatList
                        data={todoStore.todoModel.todoList}
                        keyExtractor={(item, index) => keyExtractor(index)}
                        renderItem={({item, index}) => (
                            <TodoItem el={item} ind={index} touchHandler={touchTodo}
                                      deleteHandler={deleteAlert}/>)}
                    />) : (
                    <ActivityIndicator/>)
                }
                <TextInput
                    style={styles.input}
                    placeholder="Enter task"
                    onChangeText={newText => setText(newText)}
                    value={text}>
                </TextInput>
                <TouchableOpacity style={[styles.buttonFirst, {marginBottom: 14}]}
                                  onPress={() => addTodo()}>
                    <Text style={styles.appButtonText}>Add new task</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonSecond, {marginBottom: 20}]}
                                  onPress={() => openCompletedTodo()}>
                    <Text style={styles.appButtonText}>Completed -></Text>
                </TouchableOpacity>
                <StatusBar style="auto"/>
            </View>

            <Portal>
                <Modalize
                    ref={modalizeRef}
                    modalTopOffset={200}
                    closeOnOverlayTap
                    childrenStyle={{
                        padding: 16,
                        flex: 1
                    }}
                    modalStyle={{
                        borderTopLeftRadius: 24,
                        borderTopRightRadius: 24,
                    }}
                    overlayStyle={{
                        backgroundColor: 'rgba(52, 52, 52, 0.8)',
                    }}
                    onClose={() => {
                        console.log('closed');
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

        </SafeAreaView>
    );
});

const styles = StyleSheet.create({
    input: {
        padding: 8,
        width:
            250,
        height:
            40,
        borderWidth:
            2,
        borderColor:
            'black',
        marginBottom:
            20,
        backgroundColor:
            '#f5f5f5'
    }
    ,
    buttonFirst: {
        width: 120,
        height:
            50,
        justifyContent:
            "center",
        alignItems:
            "center",
        backgroundColor:
            'black',
    }
    ,
    buttonSecond: {
        width: 120,
        height:
            50,
        justifyContent:
            "center",
        alignItems:
            "center",
        backgroundColor:
            'seagreen',
    }
    ,
    container: {
        flex: 1,
    }
    ,
    content: {
        flex: 1,
        padding:
            16,
        alignItems:
            "center"
    }
    ,
    todoLine: {
        width: 300,
        borderWidth:
            1,
        borderColor:
            'purple',
        justifyContent:
            'flex-start',
        flexDirection:
            'row',
        flex:
            1,
        flexWrap:
            'wrap',
        marginTop:
            12,
    }
    ,
    todoLineCompleted: {
        borderWidth: 4,
        borderColor: 'green',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flex: 1,
        flexWrap: 'wrap',
        marginTop: 12,
        paddingVertical: 20
    }
    ,
    todoLineTouch: {
        paddingVertical: 10,
        paddingHorizontal:
            16,
        flexDirection:
            'row',
        flex:
            3,
    }
    ,
    appButtonText: {
        color: 'white',
        fontSize:
            16,
    }
    ,
    defaultText: {
        fontWeight: 'bold',
        color:
            'black',
        fontSize:
            28,
    }
    ,
    titleText: {
        color: 'black',
        fontSize:
            20,
        flex:
            3
    },
    texts: {
        flex: 1,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: "100",
        color: 'green',
    }
    ,
    emptyView: {
        width: 10,
    }
    ,
});

export default ToDoScreen;