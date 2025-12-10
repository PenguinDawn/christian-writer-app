import { StyleSheet, Text, View } from 'react-native';

import GoToHolder from '@/components/GoToHolder';
import Header from '@/components/Header';
import { useColorScheme } from '@/components/useColorScheme';
import { useEffect, useState } from 'react';

import { FlatList } from 'react-native';
import prompted from "../../../assets/prompts.json";


export default function HistoryScreen() {

  const [data, setData] = useState<any | undefined>();

  useEffect(() => {
    setData(prompted.prompts.filter((item) => item.writing !== undefined))

  }, [])

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
    <FlatList
      contentContainerStyle={[{
        backgroundColor: themeBackground, gap: 10,
        height: "100%",
      }]}
      data={data}
      renderItem={({ item }) => (
        <GoToHolder date={item.date} name={item.title} description={item.description} writ={item.writing} />
      )}
      keyExtractor={item => item.date}
      ListHeaderComponent={
        <View>
          <Header />
          <Text style={[styles.title, { color: themeColor, textAlign: "center" }]}>History</Text>
        </View>
      }
    >





    </FlatList>
  );
}

const styles = StyleSheet.create({
  container: {

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
    marginTop: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
