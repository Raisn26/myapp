import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import meme from "./xb.jpeg";

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.redBox}>
        <Text style={styles.text}>CS is so fun!</Text>
      </View>
      <Text style={styles.text2}> Mr. Sayles is the best teacher</Text>
      <Text style={styles.text2}> Idk what am I writing</Text>
      <TouchableOpacity onPress={() => alert("你惊扰了witch")}>
        <Image source={meme} style={styles.image} />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  redBox: {
    backgroundColor: "#ff0049",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#00ff00",
    fontsize: 29,
  },
  text2: {
    color: "#ff0000",
    fontsize: 9,
  },
  image: {
    width: 195,
    height: 258,
  },
});
