import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";

export default function Home({navigation}) {
    return (
        <View style={styles.bloco}>
            <Text style={styles.texto}>Previsão do Tempo</Text>
            <View>
                
            <TouchableOpacity style={styles.botao}
                    onPress={()=>navigation.navigate("Santos")}>
                    <Text style={styles.txtBotao}>Santos</Text>
                </TouchableOpacity>

                
                <TouchableOpacity style={styles.botao}
                    onPress={()=>navigation.navigate("Vicente")}>
                    <Text style={styles.txtBotao}>São Vicente </Text>
                </TouchableOpacity>

                
                <TouchableOpacity style={styles.botao}
                    onPress={()=>navigation.navigate("Praia")}>
                    <Text style={styles.txtBotao}>Praia Grande</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.botao}
                    onPress={()=>navigation.navigate("Mongagua")}>
                    <Text style={styles.txtBotao}>Mongaguá</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao}
                    onPress={()=>navigation.navigate("Itanhaem")}>
                    <Text style={styles.txtBotao}>Itanhaém</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    bloco:{
        flex: 1,
        backgroundColor:'#f5fcfc'
    }, 
    
    texto:{
        marginTop: 30,
        fontSize:30,
        textAlign: "center",
        fontWeight: "bold",
        color: '#03334a'
    },

    texto2:{
        fontSize:20,
        textAlign: "center",
        fontWeight: "bold",
        color: '#17698f'
    },

    botao:{
        marginTop:25,
        backgroundColor:'#329dcf',
        width:'69%',
        height: '10%',
        marginLeft:'17%',
        borderRadius: 5,
    },

    txtBotao:{
        fontSize: 20,
        color: '#FFF',
        marginTop: 3,
        textAlign: 'center',
        fontWeight: 'bold',
    }
})