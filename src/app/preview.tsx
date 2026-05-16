import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, StyleSheet } from "react-native";

import { THEME } from "../styles/constants";
import { Button } from "../components/Buttons";
import { DevCard } from "../components/DevCard";

export default function PreviewScreen() {

    return (
        <SafeAreaView style={styles.safeContainer}>

            <View style={styles.container}>

                <View style={styles.headerContainer}>
                    <Text style={styles.title}>
                        Seu cartão
                    </Text>
                </View>

                <DevCard />

                <View style={styles.footerContainer}>
                    <Button
                        label="Editar"
                        variant="outline"
                     
                    />

                    <Button
                        label="Finalizar"
                    />
                </View>

            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    safeContainer: {
        flex: 1
    },

    container: {
        flex: 1,
        paddingHorizontal: 24,
        justifyContent: "center",
        gap: 24
    },

    headerContainer: {
        gap: 16
    },

    title: {
        color: THEME.colors.heading,
        fontWeight: "bold",
        fontSize: THEME.text.heading.h2,
    },

    footerContainer: {
        gap: 12
    }

})