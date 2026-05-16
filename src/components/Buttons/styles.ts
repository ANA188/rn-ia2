import { Text, StyleSheet } from "react-native";
import { THEME } from "../../styles/constants";

export const stylePrimary = StyleSheet.create(
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

export const styleSecondary = StyleSheet.create(
    {
      buttonContainer:{
        ...stylePrimary.buttonContainer,
        backgroundColor:"transparent"
        

    },
    buttonText:{
      ...stylePrimary.buttonText,
     color: THEME.colors.primary
    }
    }
)
export const styleoutline = StyleSheet.create(
    {
      buttonContainer:{
        ...stylePrimary.buttonContainer,
        backgroundColor:"transparent",
        borderColor:THEME.colors.primary
        

    },
    buttonText:{
      ...stylePrimary.buttonText,
     color: THEME.colors.primary
    }
    }
)



 
export const styles = {
    primary: stylePrimary,
    secondary: styleSecondary,
    outline:stylePrimary
} as const