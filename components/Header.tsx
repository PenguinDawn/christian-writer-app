import { Feather } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
        <Feather style={styles.padding1} color="white" size="30"/>
        <Text style={styles.title}>The Christian Writer</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    flexDirection: "row",
    padding: 15,
    paddingInline: 30,
    gap: 10,
    width: "100%",
    backgroundColor: "#0B0C6C",
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: "white",
  },
  padding1: {
    paddingTop: 3,

  },
});