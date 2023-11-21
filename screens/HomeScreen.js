import {StyleSheet, Button, Text, View, SafeAreaView, ActivityIndicator} from "react-native";
import {observer} from "mobx-react";
import {mobxClicker} from "../modules/clicker/MobxClicker";
import {useRootStore} from "../hooks/useRootStore";
import {useEffect} from "react";


// export default function HomeScreen({ navigation }) {
//
//     return (
//         <View style={styles.container}>
//             <Text>Home</Text>
//         </View>
//     );
// };

export const HomeScreen = observer(() => {
    // const handleOnClick = ()  => {
    //     mobxClicker.actionClick();
    // };
    //
    // return (
    //     <SafeAreaView style={styles.container}>
    //         <View>
    //             <Text>Count clicker value: {mobxClicker?.count}</Text>
    //             <Text>Double value: {mobxClicker?.doubleCount}</Text>
    //             <Button onPress={handleOnClick} title={'Click me'}/>
    //         </View>
    //     </SafeAreaView>
    // )

    // const {clickerStore} = useRootStore();
    //
    // const handleClick = () => {
    //     clickerStore.actionClick();
    // };
    //
    // const handleOnReset = () => {
    //   clickerStore.resetClick()
    // }
    //
    // return (
    //     <SafeAreaView style={styles.container}>
    //         <View>
    //             <Text>Count clicker value: {clickerStore?.count}</Text>
    //             <Text>Double value: {clickerStore?.doubleCount}</Text>
    //             <Button onPress={handleClick} title={'Click'}/>
    //             <Button onPress={handleOnReset} title={'Reset'}/>
    //         </View>
    //     </SafeAreaView>
    // )

    const {clickerStore} = useRootStore();

    useEffect(() => {
        clickerStore.getClickerObjectFromService();
    },[]);

    const handleOnClick = () => {
        clickerStore.actionClick();
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                {/*{clickerStore.clickerModel && !clickerStore.setIsLoading ? (*/}
                {/*    <Text>{clickerStore.clickerModel.count}</Text>*/}
                {/*) : (*/}
                {/*    <ActivityIndicator/>*/}
                {/*)}*/}
                <Button onPress={handleOnClick} title={'Click me'} />
            </View>
        </SafeAreaView>
    )
})


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