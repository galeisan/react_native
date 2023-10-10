import React from 'react';
import {View, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native' ;
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import TaskOne from "./pages/TaskOne";
import TaskTwo from "./pages/TaskTwo";
import TaskThree from "./pages/TaskThree";
import About from "./pages/About";
import ToDoList from "./pages/ToDoList";


const Stack = createNativeStackNavigator();

function HomeScreen({navigation}) {
    return (
        <View>
            <Button onPress={() => navigation.navigate('Task One')}
                    title="HW1.1"/>
            <Button onPress={() => navigation.navigate('Task Two')}
                    title="HW1.2"/>
            <Button onPress={() => navigation.navigate('Task Three')}
                    title="HW1.3"/>
            <Button onPress={() => navigation.navigate('About')}
                    title="HW2"/>
            <Button onPress={() => navigation.navigate('ToDoList')}
                    title="HW3"/>
        </View>
    );
}

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'Home'} component={HomeScreen}/>
                <Stack.Screen name={'About'} component={About}/>
                <Stack.Screen name={'ToDoList'} component={ToDoList}/>
                <Stack.Screen name={'Task One'} component={TaskOne}/>
                <Stack.Screen name={'Task Two'} component={TaskTwo}/>
                <Stack.Screen name={'Task Three'} component={TaskThree}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;