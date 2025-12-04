import * as Clipboard from 'expo-clipboard';
import { Share, StyleSheet, Text, View } from 'react-native';

import ButtonTouch from '@/components/ButtonTouch';
import Header from '@/components/Header';
import PromptHolder from '@/components/PromptHolder';
import { useColorScheme } from '@/components/useColorScheme';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';

export default function HomeScreen() {

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

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [data, setData] = useState()
  const router = useRouter();
  const [date, setDate] = useState("")
  const [day, setDay] = useState(0);
  const [dayStr, setDayStr] = useState("");
  const [month, setMonth] = useState(0);
  const [monthStr, setMonthStr] = useState("");


  useEffect(() => {
    const firstDate = new Date(); // would use get new Date()

    setDay(firstDate.getDay());
    if (day < 10) {
      setDayStr("0" + day.toString());
    }


    setDay(firstDate.getMonth());
    if (month < 10) {
      setMonthStr("0" + month.toString());
    }
    const year = (firstDate.getFullYear()).toString().slice(-2);
    setDate(`${monthStr}/${dayStr}/${year}`);
  }, [])


  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(description);
    alert('Copied to Clipboard!'); // Provide user feedback
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: description,
        title: date + "-" + title, // Title is for the share sheet itself
      });

      // Handle the result (e.g., sharedAction or dismissedAction)
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // Shared with activity type of result.activityType
        } else {
          // Shared
        }
      } else if (result.action === Share.dismissedAction) {
        // Dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../assets/prompts.json");
        const json = await response.json();
        setData(json);
        setData(data?.map((prompt) => { prompt.date === date }))
        setDescription(data.description);
        setTitle(data.title);
      } catch (error) {
        console.error(error)
      }
    };

    fetchData();
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: themeBackground }]}>
      <Header />
      <Text style={[styles.title, { color: themeColor }]}>Today's Prompt</Text>
      <PromptHolder date={date} title={title} description={description} />
      <View style={[styles.buttonHolder, { backgroundColor: themeBackground }]}>
        <ButtonTouch size="half" run={copyToClipboard} color="green" middle={"Copy"} />
        <ButtonTouch size="half" run={onShare} color="green" middle={"Share"} />
      </View>
      <ButtonTouch size="full" run={() =>
        router.push({
          pathname: "/(tabs)/(historyWrite)/[writing]",
          params: { writing: title, date: date }
        })} color="primary" middle={"Write"} />
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
