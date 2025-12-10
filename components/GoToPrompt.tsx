
import { useRouter } from 'expo-router';
import { ChevronRight } from 'lucide-react-native';
import { Pressable, StyleSheet, Text } from 'react-native';

// expo router navigate to special page

const GoToPrompt = ({date, name, description, writ}) => {
  const router = useRouter();
  return (
      <Pressable onPress={() =>
              router.push({
                pathname: `/(tabs)/(prompting)/[prompt]`,
                params: { title: name, date: date, description: description, writ: writ}
              })} style={[styles.holder]}>
        <Text style={styles.font}>{date} - {name}</Text>
        <ChevronRight size={36}/>
      </Pressable>
  )
}

export default GoToPrompt

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
    marginInline: "auto",
  },
  font: {
    color: "black",
    fontSize: 20,
  },
});