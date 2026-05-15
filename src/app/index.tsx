import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen(){
    return(
        <SafeAreaView>
            //acrescentar icone 
            <View>
                <Text>
                    DevCard
                </Text>
                <Text>
                    Seu cartão de visita digital de dev mobile
                </Text>
                <View>
                    <TouchableOpacity>
                        <Text>
                            Criar meu cartão

                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>


    )
}

const styles = StyleSheet.create({
container:{

}

})