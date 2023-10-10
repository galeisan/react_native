import {Button, Pressable, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";

export default function TodoLine({ el, ind, touchHandler, deleteHandler }) {
    return (
        <View style={[styles.todoLine, el.isCompleted ? styles.taskCompleted : styles.taskNotCompleted]}>
            <TouchableOpacity onPress={() => touchHandler(ind)}>
                <Text>{el.text}</Text>
            </TouchableOpacity>
            <Pressable onPress={() => deleteHandler(ind)}><Text style={styles.closeIcon}>X</Text></Pressable>
        </View>
    );
}

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