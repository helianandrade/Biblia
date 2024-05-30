import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";


export default function Testament({navigation}){
 return (
    <View style={styles.view}>
        <Text style={styles.title}>Seja Bem-vindo a Bíblia Digital ✝ 🛐</Text>
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Livros', { testament: 'VT' })}>
        <Image
                style={styles.image}
                source={require('../../assets/old-book.png')}
            />
            <Text style={styles.books}>Antigo</Text>
            <Text style={styles.books}>Testamento</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Livros', { testament: 'NT' })}>
            <Image
                style={styles.image}
                source={require('../../assets/biblia.png')}
            />
            <Text style={styles.books}>Novo</Text>
            <Text style={styles.books}>Testamento</Text>
        </TouchableOpacity>
    </View>
 )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#E8E8E8",
        alignItems: "center",
        justifyContent: "center",
        margin: 20,
        borderRadius: 10,
        padding: 20,
        height: 250,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    view: {
        alignItems: "center",
        justifyContent: "center",
        flex:1,
        backgroundColor: "#F5FCFF",
    },
    books: {
        color: '#000',
        fontSize: 25,
        fontWeight:"bold",
        marginTop: 10,
    },
    title: {
        color: '#000',
        fontSize: 28,
        fontWeight:"bold",
        marginBottom: 20,
        textAlign: 'center',
    },

    image: {
        width: 120,
        height: 120,
    },
})
