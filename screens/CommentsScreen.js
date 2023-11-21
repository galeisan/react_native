import {observer} from "mobx-react";
import {
    ActivityIndicator, Button, Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View
} from "react-native";
import {useEffect} from "react";
import {useRootStore} from "../hooks/useRootStore";


export const CommentsScreen = observer(({navigation}) => {
        const { commentsStore } = useRootStore();

        useEffect(() => {
            commentsStore.getComments();
        }, []);

        return <SafeAreaView style={styles.container}>
            <Pressable onPress={() => commentsStore.removeCommentsFromLocal()}><Text style={styles.removeButton}>Remove All</Text></Pressable>
            <ScrollView style={styles.content}>
                {!commentsStore.isLoading ? (
                    commentsStore.comments.map((comments, i) => {
                        return (
                            <View key={`item_${i}`} style={styles.post}>
                                <Text style={styles.commentTitle}>ID: {comments.id}</Text>
                                <Text style={styles.commentTitle}>User: {comments.email}</Text>
                                <Text>{comments.body}</Text>
                            </View>
                        );
                    })
                ) : (
                    <ActivityIndicator />
                )}
            </ScrollView>
        </SafeAreaView>
    }
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    content: {
        flex: 1,
        padding: 16
    },
    comment: {
        margin: 8,
        padding: 8,
        borderWidth: 1,
        borderRadius: 6,
        backgroundColor: '#C1E1C1'
    },
    commentTitle: {
        fontWeight: 'bold',
        marginBottom: 8
    },
    removeButton: {
        color: '#FF6961',
        fontSize: 20,
        marginTop: 8
    }
})