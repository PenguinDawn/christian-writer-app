import * as Clipboard from 'expo-clipboard';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import ButtonTouch from '@/components/ButtonTouch';
import Header from '@/components/Header';
import PromptHolder from '@/components/PromptHolder';
import ReturnWriting from '@/components/ReturnToScreen';
import { useColorScheme } from '@/components/useColorScheme';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';


export default function WritingScreen() {

  const { title, date, description, writ } = useLocalSearchParams();

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

  const [writingBlock, setWritingBlock] = useState("");

  useEffect(() => {
    if(writ != undefined) {
      setWritingBlock(writ);
    }
  })

  const [inputHeight, setInputHeight] = useState(40); // Initial heightvalue

  const handleContentSizeChange = (event) => {
    setInputHeight(event.nativeEvent.contentSize.height);
  };

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(description);
    alert('Copied to Clipboard!'); // Provide user feedback
  };

  const copyToClipboardWriting = async () => {
    await Clipboard.setStringAsync(writingBlock);
    alert('Copied to Clipboard!'); // Provide user feedback
  };



  return (
    <ScrollView style={[{ backgroundColor: themeBackground }]}>
      <View style={[styles.container, { backgroundColor: themeBackground }]}>
        <Header />
        <ReturnWriting />

        <View style={[styles.titleHolder, { backgroundColor: themeBackground }]}>
          <Text style={[styles.title2, { color: themeColor }]}>{date}</Text>
          <Text style={[styles.title, { color: themeColor }]}>{title}</Text>
        </View>
        <PromptHolder description={description} />
        <View style={[styles.buttonHolder, { backgroundColor: themeBackground }]}>
          <ButtonTouch size="half" run={copyToClipboard} color="green" middle={"Copy Prompt"} />
          <ButtonTouch size="half" run={copyToClipboardWriting} color="green" middle={"Copy Writing"} />
        </View>

        <TextInput onContentSizeChange={handleContentSizeChange} multiline={true} placeholder="Your story here..." style={[styles.writingHolder, { borderColor: themeColor, height: inputHeight }]} value={writingBlock} onChangeText={(text) => { setWritingBlock(text) }}></TextInput>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 10,
    height: "100%",
    paddingBottom: 20,
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

  title2: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  titleHolder: {
    alignItems: "center",
  },
  writingHolder: {
    width: "81%",
    padding: 10,
    borderRadius: 5,
    borderWidth: 2.5,
    minHeight: 200,
    backgroundColor: "#DCE0DC",
  },
});
