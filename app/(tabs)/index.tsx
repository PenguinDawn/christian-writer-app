import { StyleSheet } from 'react-native';

import ButtonTouch from '@/components/ButtonTouch';
import Header from '@/components/Header';
import PromptHolder from '@/components/PromptHolder';
import { Text, View } from '@/components/Themed';
import { useState } from 'react';


export default function TabOneScreen() {
  const description = "Hi there";
  const date = "11/15/2025";
  const title = "Saul's Deception";

  const [themeBackground, changeBackground] = useState("black");
  const [themeColor, changeColor] = useState("white")


  return (
    <View style={[styles.container, { backgroundColor: themeBackground }]}>
      <Header />
      <Text style={[styles.title, { color: themeColor }]}>Today's Prompt</Text>
      <PromptHolder date={date} title={title} description={description} />
      <ButtonTouch size="half" run={() => {}} color="green" middle={"Copy"}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 10,
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
