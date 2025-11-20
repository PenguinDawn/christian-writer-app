import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const PromptHolder = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Title goes here</Text>
    </View>
  )
}

export default PromptHolder

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  paragraphed: {
    color: "black",
  },
});