import { Text, View } from "react-native";
import { styles } from "./styles";

export function DevCard() {
    return (
        <View style={styles.cardContainer}>

            <View style={styles.cardAvatarContainer}>
                <View style={styles.cardAvatarSubContainer}>
                    <Text style={styles.cardAvatarLetter}>B</Text>
                </View>
            </View>

            <View style={styles.cardTextgroup}>
                <Text style={styles.cardTitle}>
                    Brendo Vale
                </Text>

                <Text style={styles.cardText}>
                    Arquiteto de Software
                </Text>

                <Text style={styles.cardSubtitle}>
                    MWT
                </Text>
            </View>

            <View style={styles.cardSeparator} />

            <View style={styles.cardTextgroup}>
                <Text style={styles.cardSubtitle}>
                    Especialista em
                </Text>

                <Text style={styles.cardRole}>
                    Backend
                </Text>
            </View>

            <View style={styles.carBadgeContainer}>
                <Text style={styles.carBadgeText}>
                    Especialista
                </Text>
            </View>

            <Text style={styles.cardSubtitle}>
                12 anos de experiência
            </Text>

        </View>
    )
}