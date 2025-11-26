
import { useRouter } from 'expo-router';
import { ChevronLeft } from 'lucide-react-native';
import { useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

// expo router navigate to special page

const ReturnPrompt = () => {
  const router = useRouter();
      const [themeBackground, changeBackground] = useState("black");
      const [themeColor, changeColor] = useState("white");
      // let colorMode = useColorScheme();
    
      // if (colorMode == "light") {
      //   changeBackground("white");
      //   changeColor("black");
      // }
      // else {
      //   changeBackground("black");
      //   changeColor("white");
      // }

  return (
      <Pressable onPress={() => {router.navigate("/(tabs)/(prompting)/prompts")}} style={[styles.holder, {backgroundColor: themeBackground}]}>
        <ChevronLeft style={styles.shev} color={themeColor} size={36}/>
        <Text style={[styles.font, {color: themeColor, borderBottomColor: themeColor}]}>Return to Prompts</Text>
      </Pressable>
  )
}

export default ReturnPrompt

const styles = StyleSheet.create({
  holder: {
    padding: 5,
    paddingLeft: 15,
    borderRadius: 5,
    width: "92%",
    flexDirection: "row",
  },
  font: {
    color: "black",
    fontSize: 20,
    paddingBottom: 1,
    borderBottomWidth: 3,
    borderRadius: 1,
    alignSelf: "center",
  },
  shev: {
    marginTop: 4,

  },
});