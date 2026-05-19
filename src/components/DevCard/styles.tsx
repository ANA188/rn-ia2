import { THEME } from "../../styles/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    cardContainer: {
        backgroundColor: "#3783f6",
        borderRadius: THEME.border.radius.xl,
        paddingVertical: 32,
        paddingHorizontal: 24,
        justifyContent: "center",
        alignItems: "center",
        gap: 12,
        width: "100%"
    },

    cardAvatarContainer: {
        backgroundColor: "rgba(192,220,255,0.4)",
        padding: 4,
        borderRadius: 999
    },

    cardAvatarSubContainer: {
        backgroundColor: "#f8fbff",
        height: 72,
        width: 72,
        borderRadius: 999,
        justifyContent: "center",
        alignItems: "center"
    },

    cardAvatarLetter: {
        color: "#3783f6",
        fontSize: THEME.text.heading.h2,
        fontWeight: "bold"
    },

    cardTitle: {
        color: "#f8fbff",
        fontSize: THEME.text.heading.h2,
        fontWeight: "bold"
    },

    cardText: {
        color: "#d5e5ff",
        fontSize: 16,
    },

    cardSubtitle: {
        color: "#d5e5ff",
        fontSize: 14,
    },

    cardSeparator: {
        backgroundColor: "rgba(192,220,255,0.4)",
        height: 1,
        width: "100%",
        marginVertical: 8
    },

    cardRole: {
        color: "#f8fbff",
        fontSize: THEME.text.heading.h4,
        fontWeight: "bold"
    },

    carBadgeContainer: {
        backgroundColor: "#ffc124",
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: THEME.border.radius.xl
    },

    carBadgeText: {
        color: "#4c3600",
        fontWeight: "bold",
        letterSpacing: 1
    },

    cardTextGroup: {
        justifyContent: "center",
        alignItems: "center",
        gap: 4
    }

})