import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, FlatList } from "react-native";

export default function Santos() {
    const [dados, setDados] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const request = async () => {
            const req = await fetch(
                `https://api.hgbrasil.com/weather?woeid=455991&array_limit=10&fields=only_results,temp,city_name,forecast,max,min,date&key=	18cc8c1d`
            );
            const json = await req.json();
            setDados(json.forecast);
}
        request();

        setLoading(false)
    }, []);

    if (loading) {
        return (
            <ActivityIndicator size="large" color="#FFF" />
        )
    }
    else if (!loading) {
        return (
            <View>
                <View>
                    <FlatList
                        data={dados}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.tempo}>
                                    <Text style={styles.txt1}>Data: {item.date}</Text>
                                    <Text style={styles.txt2}>Minimo: {item.min}</Text>
                                    <Text style={styles.txt2}>Máximo: {item.max}</Text>
                                </View>
                            );
                        }}
                    />
                </View>
            </View>
        );
    }}

const styles = StyleSheet.create({
    txt1:{
        marginTop: 20,
        fontSize: 23,
        fontWeight: "bold",
        textAlign: "center",
        color: '#03334a',
    },

    txt2:{
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: '#17698f',
    }
})