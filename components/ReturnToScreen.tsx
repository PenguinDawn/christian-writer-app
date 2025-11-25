
import { useRouter } from 'expo-router';
import { ChevronLeft } from 'lucide-react-native';
import { useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

// expo router navigate to special page

const ReturnWriting = ({date, name}) => {
  const router = useRouter();
    const [themeBackground, changeBackground] = useState("black");
    const [themeColor, changeColor] = useState("white")

  return (
      <Pressable  style={[styles.holder, {backgroundColor: themeBackground}]}>
        <ChevronLeft color={themeColor} size={36}/>
        <Text style={[styles.font, {color: themeColor}]}>Return to Prompts</Text>
      </Pressable>
  )
}

export default ReturnWriting

const styles = StyleSheet.create({
  holder: {
    padding: 5,
    paddingLeft: 15,
    borderRadius: 5,
    alignItems: "center",
    width: "80%",
    flexDirection: "row",
  },
  font: {
    color: "black",
    fontSize: 20,
  },
});