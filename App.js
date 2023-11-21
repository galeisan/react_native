import React from 'react';
import {View, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native' ;
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {AboutScreen} from "./screens/AboutScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {CommentsScreen} from "./screens/CommentsScreen";
import TodoScreen from "./screens/TodoScreen";
import ChatScreen from "./screens/ChatScreen";
import {HomeScreen} from "./screens/HomeScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';
import CompletedTodoScreen from "./screens/CompletedTodoScreen";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Host } from 'react-native-portalize';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const TabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStack} options={{headerShown: false, tabBarIcon: ({ focused }) => (
                    <Ionicons name="home"  size={28} />
                ),}} />
            <Tab.Screen name="Todo" component={TodoScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <Ionicons name="newspaper"  size={28} />
                ),
            }}/>
            <Tab.Screen name="Chat" component={ChatScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <Ionicons name="chatbox" size={28} />
                ),
            }}/>
            <Tab.Screen name="Comments" component={CommentsScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <Ionicons name="server" size={28} />
                ),
            }}/>
        </Tab.Navigator>
    );
}
const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={'HomeScreen'}
                component={HomeScreen}
                options={(props) => ({
                    headerTitle: (props) => <Ionicons name="home"  size={28} />,
                    headerRight: () => (
                        <Button
                            onPress={() => props.navigation.navigate('About')}
                            title="О приложении"
                            color="#000"
                        />)
                })}
            />
            <Stack.Screen name={'About'} component={AboutScreen} initialParams={{ itemId: 42 }} />
        </Stack.Navigator>
    );
}
export default function App() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Host>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name={'Tab'} component={TabNavigation} options={{headerShown: false}} />
                        <Stack.Screen name={'AboutScreen'} component={AboutScreen}/>
                        <Stack.Screen name={'Completed'} component={CompletedTodoScreen}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </Host>
        </GestureHandlerRootView>
    )
}