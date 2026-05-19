import { TouchableOpacity, Text, GestureResponderEvent } from "react-native";
import { styles } from "./styles";

type Props = {
  label: string;
  variant?: "primary" | "secondary" | "outline";
  disabled?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
};

export function Button({
  label,
  variant = "primary",
  disabled,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={disabled}
      onPress={onPress}
      style={[
        styles[variant].buttonContainer,
        disabled && styles.disabled.buttonContainer,
      ]}
    >
      <Text style={styles[variant].buttonText}>{label}</Text>
    </TouchableOpacity>
  );
}