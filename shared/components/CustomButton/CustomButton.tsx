import { Pressable, Text, TextStyle, ViewStyle } from 'react-native';
import { styles } from './CustomButton.style';

type CustomButtonProps = {
  caption: string;
  disabled?: boolean;
  onPress: () => void;
  buttonStyle?: ViewStyle,
  captionStyle?: TextStyle,
}

export function CustomButton({ caption, onPress, disabled = false, buttonStyle, captionStyle }: CustomButtonProps) {
  const combineButtonStyle = [
    styles.customButton,
    disabled ? styles.disabled : null,
    buttonStyle,
  ];
  const combineCaptionStyle = [
    styles.customButtonText,
    captionStyle
  ];

  return (
    <Pressable
      disabled={disabled}
      style={combineButtonStyle}
      onPress={onPress}
    >
      <Text style={combineCaptionStyle}>{caption}</Text>
    </Pressable>
  );
}