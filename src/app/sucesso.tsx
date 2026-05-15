import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { THEME } from "../styles/constants";
import { Button } from "../components/Buttons";

export default function SucessoScreen() {
    return (
        <SafeAreaView>
            {/* acrescentar icone */}
            <View style={styles.container}>
                <View style={styles.headerContainer} >
                    <Text>
                        DevCard
                    </Text>
                    <Text>
                        Seu cartão de visita digital de dev mobile
                    </Text>

                </View>
                 <Button label="Criar meu cartão"/>
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
        height: 750
    },
    logo:{
        color:"#6547e8",
        fontWeight: "bold",
        fontSize:56
    },
    subtitle:{
        color:"#737377",
        fontWeight:"400",
        fontSize:16,
        width:200,
        textAlign:"center"    
    },
  

})