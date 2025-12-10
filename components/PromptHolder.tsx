import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const PromptHolder = ({date, title, description}) => {

  return (
    <View style={styles.container}>
      {date &&
        <Text style={styles.title}>{date} - {title}</Text>
      }
        <Text>{description}</Text>
    </View>
  )
}

export default PromptHolder

const styles = StyleSheet.create({
  container: {
    width: "82%",
    padding: 10,
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 2.5,
    backgroundColor: "#DCE0DC",
    minHeight: 150
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  paragraphed: {
    color: "black",
  },
});