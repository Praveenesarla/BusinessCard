import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Linking,
} from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ProjectCard from "./ProjectCard";

export default function App() {
  const contactMe = () => {
    Linking.openURL("mailto:esarlapraveen16@gmail.com");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["bottom"]}>
        <ScrollView>
          <StatusBar style="dark" />
          <View style={styles.container}>
            <Image
              source={{
                uri: "https://i.pinimg.com/originals/88/a6/ed/88a6ed264153bee75dfa5517bb438e64.png",
              }}
              style={{ width: "100%", aspectRatio: 16 / 9 }}
            />
            <Image
              source={require("./assets/vadim.png")}
              style={{
                marginTop: -75,
                width: 150,
                height: 150,
                borderRadius: 75,
                borderWidth: 5,
                borderColor: "white",
              }}
            />
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>
              Praveen Kumar
            </Text>
            <Text>React Native Developer</Text>
            <View style={{ flexDirection: "row", marginVertical: 10, gap: 10 }}>
              <FontAwesome6 name="github" size={24} color="black" />
              <FontAwesome6 name="x-twitter" size={24} color="black" />
              <FontAwesome6 name="at" size={24} color="black" />
            </View>
            <Button title="Contact Me" onPress={contactMe} />
            <Text style={{ padding: 10, fontSize: 16 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus odit eos quis temporibus iusto, dicta velit iure amet
              minima officiis explicabo animi odio, ullam accusamus culpa ab sed
              consequuntur quasi? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptatibus odit eos quis temporibus iusto,
            </Text>
            <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 18 }}>
              Projects
            </Text>
            <ProjectCard />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
