import { Image, Text, View } from "react-native";

const ProjectCard = () => {
  return (
    <View>
      <Image
        source={require("./assets/projects/project1.jpeg")}
        style={{ height: 150, aspectRatio: 16 / 9, borderRadius: 10 }}
      />
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          color: "dimgray",
          marginTop: 10,
        }}
      >
        My Project
      </Text>
    </View>
  );
};

export default ProjectCard;
