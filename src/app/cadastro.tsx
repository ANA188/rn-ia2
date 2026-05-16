import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { THEME } from "../styles/constants";
import { Button } from "../components/Buttons";
import { DevCard } from "../components/DevCard";

export default function CadastroScreen() {
    return (
        <SafeAreaView>
            
            <View style={styles.container}>

                <View style={styles.headerContainer} >
                    <Text style={styles.title}>
                        Seu cartão
                    </Text>

                </View>
                <DevCard />

                <View style={styles.footerContainer}>
                    <Button label="Editar" variant="outline"/>
                    <Button label="Finalizar" />

                </View>
            </View>
        </SafeAreaView>


    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:"column",
       justifyContent:"center",
        paddingHorizontal:24,
        gap:12,

    },
    headerContainer:{
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"flex-start",
        gap:16
    },

     title:{
         color:THEME.colors.heading,
        fontWeight:"bold",
        fontSize:THEME.text.heading.h2,
        textAlign:"center" 
    },
   
   
    footerContainer:{
        flexDirection:"column",
        gap:12
    },




    

})