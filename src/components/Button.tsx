import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import { Styles } from "../styles/GlobalStyles";

interface ButtonProps {
  onPress: () => void;
  title: string;
  isBlue: boolean;
  isGray: boolean;
}

export default function Button({
  title,
  onPress,
  isBlue,
  isGray,
}: ButtonProps) {
  const { theme } = useContext(ThemeContext); // Assuming ThemeContext provides an object with a 'theme' property

  const getButtonStyle = () => {
    if (isBlue) {
      return Styles.btnBlue;
    }
    if (isGray) {
      return Styles.btnGray;
    }
    return theme === "light" ? Styles.btnLight : Styles.btnGray; // Assuming Styles.btnDark is defined
  };

  const getTextStyle = () => {
    if (isBlue || isGray) {
      return Styles.smallTextLight;
    }
    return theme === "dark" ? Styles.smallTextLight : Styles.smallTextDark;
  };

  return (
    <TouchableOpacity style={getButtonStyle()} onPress={onPress}>
      <Text style={getTextStyle()}>{title}</Text>
    </TouchableOpacity>
  );
}
