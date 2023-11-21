import {Pressable, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useEffect} from "react";
import {observer} from "mobx-react";
import {useRootStore} from "../stores/useRootStore";


export const TodoItem = observer(props => {
    const {todoStore} = useRootStore();

    useEffect(() => {
    }, [todoStore.todoModel.todoList[props.ind].completed])

    return (
        <View style={[styles.todoLine, props.el.completed ? styles.taskCompleted : styles.taskNotCompleted]}>
            <TouchableOpacity onPress={() => props.touchTodo(props.ind)}>
                <Text style={styles.texts}>{props.el.text}</Text>
            </TouchableOpacity>
            <Pressable onPress={() => props.deleteHandler(props.ind)}>
                <Text style={styles.closeIcon}>X</Text>
            </Pressable>
        </View>
    );
});

const styles = StyleSheet.create({
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

export default TodoItem;