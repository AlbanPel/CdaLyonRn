import {StatusBar, StyleSheet, Text, View} from "react-native";

export default function Home() {
    return (
        <View style={styles.container}>
            <Text>Welcome to CalculaCat 2022 !!</Text>
            <StatusBar hidden={true}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        //flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})