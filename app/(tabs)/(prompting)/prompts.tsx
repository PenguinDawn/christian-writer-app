import { StyleSheet, Text, useColorScheme, View } from 'react-native';

import GoToHolder from '@/components/GoToHolder';
import Header from '@/components/Header';
import { useEffect, useState } from 'react';


export default function PromptScreen() {
  const description = "Hi there";
  const date = "11/15/2025";
  const title = "Saul's Deception";

  const [themeBackground, changeBackground] = useState("black");
  const [themeColor, changeColor] = useState("white");
  useEffect(() => {
    let colorMode = useColorScheme();

    if (colorMode == "light") {
      changeBackground("white");
      changeColor("black");
    }
    else {
      changeBackground("black");
      changeColor("white");
    }

  }, [])


  return (
    // change to flatlist
    <View style={[styles.container, { backgroundColor: themeBackground }]}>
      <Header />
      <Text style={[styles.title, { color: themeColor }]}>Prompts</Text>
      <GoToHolder date={"11/11/11"} name={"Saul"} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 10,
    height: "100%",
  },
  buttonHolder: {
    width: "90%",
    gap: "4%",
    flexDirection: "row",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
