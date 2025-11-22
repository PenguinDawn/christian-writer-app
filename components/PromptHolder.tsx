import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const PromptHolder = ({date, title, description}) => {

  return (
    <View style={styles.container}>
        <Text style={styles.title}>{date} - {title}</Text>
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
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  paragraphed: {
    color: "black",
  },
});