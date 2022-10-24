import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Dimensions,
} from "react-native";
import sun from "./sun.jpeg";
import knife from "./knife.jpeg";
import fire from "./fire.jpeg";
import fall from "./fall.jpeg";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Room" component={Room} />
        <Stack.Screen name="Ending1" component={Ending1} />
        <Stack.Screen name="Hallway" component={Hallway} />
        <Stack.Screen name="Leftroom" component={Leftroom} />
        <Stack.Screen name="Page5" component={Page5} />
        <Stack.Screen name="Page6" component={Page6} />
        <Stack.Screen name="Page7" component={Page7} />
        <Stack.Screen name="Page8" component={Page8} />
        <Stack.Screen name="Page9" component={Page9} />
        <Stack.Screen name="Page10" component={Page10} />
        <Stack.Screen name="Page11" component={Page11} />
        <Stack.Screen name="Page12" component={Page12} />
        <Stack.Screen name="Page13" component={Page13} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>Welcome to the Adventure Game.</Text>
      <Text style={styles.text}>
        U have to choose the options on the screen and try to get the good
        ending.
      </Text>
      <Text style={styles.text}> Good Luck!</Text>
      <Button
        title="Start the Game"
        onPress={() => navigation.navigate("Room")}
      ></Button>
      <StatusBar style="auto" />
    </ScrollView>
  );
};

const Room = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>
        You waked up, realizing that you are in a bed in a hospital.
      </Text>
      <Text style={styles.text}>What are you going to do?</Text>
      <Button
        title="Shout and ask if anyone is here"
        onPress={() => navigation.navigate("Ending1")}
      ></Button>
      <Button
        title="Get out of the bed and walk to the door"
        onPress={() => navigation.navigate("Hallway")}
      ></Button>
    </ScrollView>
  );
};

const Ending1 = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={knife} style={{ width: 500, height: 400 }} />
      <Text style={styles.text}>
        U suddenly got stabbed in the back by a man, and u died.
      </Text>
      <Text style={styles.text}>Game over.</Text>
      <Button
        title="Return to homescreen"
        onPress={() => navigation.navigate("Home")}
      ></Button>
    </ScrollView>
  );
};

const Hallway = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>U walked to the door and opened it.</Text>
      <Text style={styles.text}>
        U got out of the room and find urself at the end of the hallway.
      </Text>
      <Text style={styles.text}>
        U walked and get to the other end of the hallway.
      </Text>
      <Text style={styles.text}>
        There are two doors at the end of the hallway, which one will u open?
      </Text>
      <Button
        title="Left"
        onPress={() => navigation.navigate("Leftroom")}
      ></Button>
      <Button
        title="Right"
        onPress={() => navigation.navigate("Page5")}
      ></Button>
    </ScrollView>
  );
};

const Leftroom = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={fire} style={{ width: 500, height: 400 }} />
      <Text style={styles.text}>
        U get into the room and the door locked up
      </Text>
      <Text style={styles.text}>
        The room temperature goes up and the room starts burning
      </Text>
      <Text style={styles.text}>U died in the flame.</Text>
      <Button
        title="Return to last decision page"
        onPress={() => navigation.navigate("Hallway")}
      ></Button>
    </ScrollView>
  );
};

const Page5 = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>
        U get into the room and the door locked up
      </Text>
      <Text style={styles.text}>There is another door in the room.</Text>
      <Text style={styles.text}>U need to find the keys to open the door.</Text>
      <Text style={styles.text}>Where would u look?</Text>
      <Button
        title="Window"
        onPress={() => navigation.navigate("Page6")}
      ></Button>
      <Button
        title="under the table"
        onPress={() => navigation.navigate("Page7")}
      ></Button>
    </ScrollView>
  );
};

const Page6 = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={fall} style={{ width: 500, height: 400 }} />
      <Text style={styles.text}>U walk near the window.</Text>
      <Text style={styles.text}>
        U suddenly got pushed from the back and fell off the window
      </Text>
      <Text style={styles.text} t>
        U died.
      </Text>
      <Button
        title="Return to last decision page"
        onPress={() => navigation.navigate("Page5")}
      ></Button>
    </ScrollView>
  );
};

const Page7 = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>U walk near the table </Text>
      <Text style={styles.text}>
        U looked under the table and found the key for the door.
      </Text>
      <Text style={styles.text}>
        U open the door and saw a bunch of zombies standing in the hallway.
      </Text>
      <Text style={styles.text}>What will you do?</Text>
      <Button
        title="Run through the zombies as fast as u can"
        onPress={() => navigation.navigate("Page8")}
      ></Button>
      <Button
        title="sneak through the sombies"
        onPress={() => navigation.navigate("Page9")}
      ></Button>
    </ScrollView>
  );
};

const Page8 = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>U ran as fast as u can </Text>
      <Text style={styles.text}>The zombies heard u and kept chasing u</Text>
      <Text style={styles.text}>
        U were almost out of breath when u see a toliet around the corner of the
        hallway
      </Text>
      <Text style={styles.text}>What will you do?</Text>
      <Button
        title="Hide in the toliet"
        onPress={() => navigation.navigate("Page10")}
      ></Button>
      <Button
        title="Keep on running"
        onPress={() => navigation.navigate("Page11")}
      ></Button>
    </ScrollView>
  );
};

const Page9 = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>U walk quietly among the zombies </Text>
      <Text style={styles.text}>They were not aware of u</Text>
      <Text style={styles.text}>U turn around the corner and see a man.</Text>
      <Text style={styles.text}>He is not looking at u, What will you do?</Text>
      <Button
        title="Try to talk to him"
        onPress={() => navigation.navigate("Page12")}
      ></Button>
      <Button
        title="Hit him from the back to knock him out."
        onPress={() => navigation.navigate("Page13")}
      ></Button>
    </ScrollView>
  );
};

const Page10 = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>U hide in the toliet </Text>
      <Text style={styles.text}>
        U waited for 5 minutes and cannot hear any sound.
      </Text>
      <Text style={styles.text}>Will u go out of the closet?</Text>
      <Button
        title="Go out of the toliet"
        onPress={() => navigation.navigate("Page12")}
      ></Button>
      <Button
        title="Stay in the toliet"
        onPress={() => navigation.navigate("Page12")}
      ></Button>
    </ScrollView>
  );
};

const Page11 = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text} xt>
        U kept on running and see a man in front of u{" "}
      </Text>
      <Text style={styles.text}>What will u do?</Text>
      <Button
        title="Call for him to help u"
        onPress={() => navigation.navigate("Page12")}
      ></Button>
      <Button
        title="Tell him to run with u"
        onPress={() => navigation.navigate("Page12")}
      ></Button>
    </ScrollView>
  );
};

const Page12 = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>The man sees u</Text>
      <Text style={styles.text}>He teleported behind u and knock u out</Text>
      <Text style={styles.text}>
        U fainted, and was transferred into one of the zombies.
      </Text>
      <Text style={styles.text}>Bad Ending</Text>
    </ScrollView>
  );
};

const Page13 = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={sun} style={{ width: 500, height: 400 }} />
      <Text style={styles.text}>
        U knock the man out and find the key to the exit of the building.
      </Text>
      <Text style={styles.text}>U eventually got out alive.</Text>
      <Text style={styles.text}>Good Ending.</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontFamilty: "Cochin",
  },
});

export default App;
