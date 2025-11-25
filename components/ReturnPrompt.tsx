
import { useRouter } from 'expo-router';
import { ChevronLeft } from 'lucide-react-native';
import { Pressable, StyleSheet, Text } from 'react-native';

// expo router navigate to special page

const ReturnPrompt = ({date, name}) => {
  const router = useRouter();

  return (
      <Pressable onPress={() =>
              router.push({
                pathname: "/(tabs)/(prompting)/[prompt]",
                params: { writing: name, date: date}
              })} style={[styles.holder]}>
        <ChevronLeft size={36}/>
        <Text style={styles.font}>{date} - {name}</Text>
    
      </Pressable>
  )
}

export default ReturnPrompt

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