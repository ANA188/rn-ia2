import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { THEME } from "../styles/constants";
import { Button } from "../components/Buttons";

export default function SucessoScreen() {
    return (
        <SafeAreaView>
            
            <View style={styles.container}>

                <View style={styles.headerContainer} >
                    <Text style={styles.title}>
                        Cartão criado com sucesso!
                    </Text>
                    <Text style={styles.subtitle}>
                        Seu cartão de visita digital está pronto.
                        Compartilher com a galera!
                    </Text>

                </View>
                <View style={styles.footerContainer}>
                    <Button label="Criar outro cartão"/>
                    <Button label="Voltar ao início" variant="secondary"/>

                </View>
            </View>
        </SafeAreaView>


    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:"column",
        backgroundColor:"read",
        height:"100%",
        alignContent:"center",
        paddingHorizontal:24,

    },
    headerContainer:{
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        height: 650,
        gap:12
    },

     title:{
         color:THEME.colors.heading,
        fontWeight:"bold",
        fontSize:THEME.text.heading.h2,
        width:200,
        textAlign:"center" 
    },
    subtitle:{
        color:THEME.colors.subtitle,
        fontWeight:"400",
        fontSize:16,
        width:200,
        textAlign:"center"    
    },
   
    footerContainer:{
        flexDirection:"column",
        gap:12



  }

})