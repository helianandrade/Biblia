import React, { useEffect, useState } from "react";
import { StyleSheet, Text, FlatList, TouchableOpacity, View, ActivityIndicator } from "react-native";
import  { getBook } from "../services/books.http.service"

export default function BookDetails({ route, navigation }){
    const [book, setBook] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const { abbrev } = route.params;
    const numColumns = 3; 
    useEffect(()=>{
        getBook(abbrev).then(async(data)=> {
            setBook(data);
            setIsLoading(false);
        })
    }, [])
    
    if (isLoading) {
        return <View style={styles.container}><ActivityIndicator size="large" color="#0000ff" /></View>;
    }

    return (
        <FlatList 
            contentContainerStyle={styles.list}
            data={Array.from({ length: book.chapters })}
            keyExtractor={(item, index) => index.toString()}
            numColumns={numColumns}
            key={numColumns.toString()} 
            renderItem={({ item, index }) => 
                <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Versículos', { abbrev: abbrev, cap: index+1})}>
                    <Text style={styles.books}>{index + 1}</Text>
                </TouchableOpacity>
            }
        />
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F5FCFF",
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        flex: 1,
        borderRadius: 10,
        padding: 5,
        height: 100, 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    list: {
        backgroundColor: "#fff",
    },
    books: {
        color: '#000',
        fontSize: 16,
    },
});
