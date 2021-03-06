import React from "react";
import { View, StyleSheet, Image } from "react-native";
import PropTypes from "prop-types";
import Text from "../../components/Text";
import Button from "../../components/Button";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 25,
    paddingVertical: 60,
    backgroundColor: "white"
  },
  instructions: {
    fontSize: 18,
    textAlign: "center",
    marginVertical: 20,
  },
  headInstruction: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  nextButton: {
    marginTop: 20,
    width: 320,
    height: 55,
    borderRadius: 5,
    backgroundColor: "#005AA3",
  },
  imageContainer: {
    flex: 2,
    width: "100%",
    height: 200,
    borderRadius: 2,
    flexDirection: "column",
    padding: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    resizeMode: "contain",
  },
});

const image = require("../../assets/books.png");

function ReadingIntro({ navigation }) {
  return (
    <View style={styles.root}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.instructions}>
        <Text style={styles.headInstruction}>
          Read the following passage aloud
        </Text>
        <Text style={styles.instructions}>Total time: 10 minutes</Text>
      </View>
      <Button
        title="Start Reading"
        buttonStyle={styles.nextButton}
        onPress={() => navigation.navigate("ReadingMain")}
      />
    </View>
  );
}

ReadingIntro.propTypes = {
  navigation: PropTypes.object,
};

export default ReadingIntro;
