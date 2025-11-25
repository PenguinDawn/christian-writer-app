import { StyleSheet } from 'react-native';

import ButtonTouch from '@/components/ButtonTouch';
import Header from '@/components/Header';
import PromptHolder from '@/components/PromptHolder';
import ReturnWriting from '@/components/ReturnToScreen';
import { View } from '@/components/Themed';
import { useRouter } from 'expo-router';
import { useState } from 'react';


export default function HomeScreen() {
  const description = "Hi there";
  const date = "11/15/2025";
  const title = "Saul's Deception";

  const [themeBackground, changeBackground] = useState("black");
  const [themeColor, changeColor] = useState("white")
    const router = useRouter();


  return (
    <View style={[styles.container, { backgroundColor: themeBackground }]}>
      <Header />
      <ReturnWriting date={date} name={title}/>
      <PromptHolder date={date} title={title} description={description} />
      <View style={[styles.buttonHolder, {backgroundColor: themeBackground}]}> 
        <ButtonTouch size="half" run={() => {}} color="green" middle={"Copy"}/>
        <ButtonTouch size="half" run={() => {}} color="green" middle={"Share"}/>
      </View>
      <ButtonTouch size="full" run={() =>
              router.push({
                pathname: "/(tabs)/(historyWrite)/[writing]",
                params: { writing: title, date: date}
              })} color="primary" middle={"Write"}/>
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
