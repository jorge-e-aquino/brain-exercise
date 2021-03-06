import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Button from "../../components/Button";
import PropTypes from "prop-types";
import ProgressBar from "../../components/ProgressBar";
import getProblem from "../../assets/prompts";
import Text from "../../components/Text";

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  instructionText: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  questionText: {
    fontSize: 24,
    textAlign: "center",
  },
  answerText: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  actualAnswerText: {
    fontSize: 28,
    textAlign: "center",
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 30,
  },
  container: {
    flex: 3,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "stretch",
    justifyContent: "space-around",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 50,
  },
  button: {
    alignSelf: "center",
    width: 300,
    height: 50,
    marginTop: 20,
    marginBottom: 50,
  },
  buttonTitle: {
    fontSize: 20,
    fontWeight: "100",
    textAlign: "center",
    color: "white",
  },
});

function PromptScreen({ navigation }) {
  const [problem, setProblem] = useState(getProblem());
  const [finished, setFinished] = useState(false);

  function getNewProblem() {
    setProblem(getProblem());
  }

  return (
    <View style={styles.root}>
      <ProgressBar seconds = {300} red = {60} func = {() => {setFinished(true)}} shouldNotRender/>
      <View style={styles.textContainer}>
        <Text style={styles.instructionText}>Write down both the question and answer to: </Text>
        <Text style = {styles.questionText}>{problem}</Text>
      </View>
      <View>
        <Button
          // eslint-disable-next-line no-nested-ternary
          title={finished ? "Finish Writing Section" : "Next" }
          titleStyle = {styles.buttonTitle}
          buttonStyle={styles.button}
          onPress={() => {
            if (!finished) {
              getNewProblem()
            } else {
              navigation.navigate("FinishedScreen")
            }
          }}
        />
      </View>
    </View>
  );
}

PromptScreen.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};
export default PromptScreen;
