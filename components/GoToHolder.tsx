
import { ChevronRight } from 'lucide-react-native';
import { Pressable, StyleSheet, Text } from 'react-native';

// expo router navigate to special page

const GoToHolder = ({date, name}) => {
  return (
      <Pressable style={[styles.holder]}>
        <Text style={styles.font}>{date} - {name}</Text>
        <ChevronRight size={36}/>
      </Pressable>
  )
}

export default GoToHolder

const styles = StyleSheet.create({
  holder: {
    padding: 5,
    paddingLeft: 15,
    borderRadius: 5,
    alignItems: "center",
    width: "80%",
    backgroundColor: "#C9ECCB",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  font: {
    color: "black",
    fontSize: 20,
  },
});