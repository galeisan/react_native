import React from 'react';
import {View, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native' ;
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import TaskOne from "./TaskOne";
import TaskTwo from "./TaskTwo";
import TaskThree from "./TaskThree";


const Stack = createNativeStackNavigator();

function HomeScreen({navigation}) {
    return (
        <View>
            <Text>Main Page</Text>
            <Button onPress={() => navigation.navigate('Task One')}
                    title="Task One"/>
            <Button onPress={() => navigation.navigate('Task Two')}
                    title="Task Two"/>
            <Button onPress={() => navigation.navigate('Task Three')}
                    title="Task Three"/>
        </View>
    );
}

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'Home'} component={HomeScreen}/>
                <Stack.Screen name={'Task One'} component={TaskOne}/>
                <Stack.Screen name={'Task Two'} component={TaskTwo}/>
                <Stack.Screen name={'Task Three'} component={TaskThree}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;