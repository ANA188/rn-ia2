import { StyleSheet } from "react-native";
import { THEME } from "../../styles/constants";

export const stylePrimary = StyleSheet.create({
  buttonContainer: {
    backgroundColor: THEME.colors.primary,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: THEME.border.radius.xl,
  },

  buttonText: {
    color: THEME.colors.primary_foreground,
    fontWeight: "600",
    fontSize: 18,
  },
});

export const styleSecondary = StyleSheet.create({
  buttonContainer: {
    ...stylePrimary.buttonContainer,
    backgroundColor: "#ECECEC",
  },

  buttonText: {
    ...stylePrimary.buttonText,
    color: THEME.colors.primary,
  },
});

export const styleOutline = StyleSheet.create({
  buttonContainer: {
    ...stylePrimary.buttonContainer,
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: THEME.colors.primary,
  },

  buttonText: {
    ...stylePrimary.buttonText,
    color: THEME.colors.primary,
  },
});

export const styleDisabled = StyleSheet.create({
  buttonContainer: {
    opacity: 0.5,
  },
});

export const styles = {
  primary: stylePrimary,
  secondary: styleSecondary,
  outline: styleOutline,
  disabled: styleDisabled,
} as const;