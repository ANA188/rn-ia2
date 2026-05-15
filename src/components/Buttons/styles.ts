import { Text, StyleSheet } from "react-native";
import { THEME } from "../../styles/constants";

export const styles = StyleSheet.create(
    {
      buttonContainer:{
        backgroundColor:THEME.colors.primary,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        paddingVertical:16,
        paddingHorizontal:24,
        borderRadius:THEME.border.radius.md

    },
    buttonText:{
        color: THEME.colors.primary_foreground,
        fontWeight:"500",
        fontSize:18
    }
    }
)
  