
import { Pressable, StyleSheet, Text } from 'react-native';


const ButtonTouch = ({run, size, color, middle}) => {

    let sizing;
    if(size === "full") {
      sizing = styles.large;
    }
    else {
      sizing = styles.small;
    }

    let colored;
    let fontCol;
    if(color === "primary") {
      colored = styles.blue;
      fontCol = styles.white;
    }
    else {
      colored = styles.green;
      fontCol = styles.black;
    }

  return (
      <Pressable onPress={run} style={[styles.button, sizing, colored]}>
        <Text style={fontCol}>{middle}</Text>
      </Pressable>
  )
}

export default ButtonTouch

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  white: {
    color: "white",
    fontSize: 18,
  },
  black : {
    color: "black",
    fontSize: 18,
  },
  small: {
    width: "43%",
  },
  large: {
    width: "80%",
  },
  green: {
    backgroundColor: "#C9ECCB",
  },
  blue: {
    backgroundColor: "#0C4185",
  }
});