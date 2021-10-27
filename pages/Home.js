import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { StyledView, StyledText } from "../styles/StyledComp";


export default function Home() {
    const [counter, setCounter] = useState(0);
    const [name] = useState("Rafael Adrian Avendaño Ramírez");
    const [showName, setShowName] = useState(false);

    const increaseCounter = () => {
        if (counter < 1000) {
        setCounter((current) => current + 1);
      }
    };
    const decreaseCounter = () => {
      if (counter > 0) {
        setCounter((current) => current - 1);
      }
    };
    const increaseCounterToThousand = () => {
      for (var i = counter; i < 1000; i++) {
        setTimeout(function() {
          setCounter((current) => current + 1);
        },500)
      }
    };
    const decreaseCounterToZero = () => {
      for (var i = counter; i > 0; i--) {
        setTimeout(function() {
          setCounter((current) => current - 1);
        },500)
      }
    };

    const handleShowName = () => {
      setShowName((current) => !current)
      setTimeout(function() {
        setShowName((current) => !current)
      },5000)
    };

    return (
        <StyledView style={styles.container}>

            <StyledText style={styles.countText}>
            {showName?
              "Name"
              :
              "Counter"
            }
            </StyledText>
            <StyledText style={showName?styles.countTextName:styles.countText}>{showName?name:counter}</StyledText>
            <TouchableOpacity
                onPress={increaseCounter}
                style={styles.buttonStyles}
            >
                <StyledText style={styles.buttonText}>+</StyledText>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={decreaseCounter}
                style={styles.buttonStyles}
            >
                <StyledText style={styles.buttonText}>-</StyledText>
            </TouchableOpacity>


            <StatusBar style="auto" />

            <TouchableOpacity
                onPress={increaseCounterToThousand}
                style={styles.buttonStyles}
            >
                <StyledText style={styles.buttonText}>1000</StyledText>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={decreaseCounterToZero}
                style={styles.buttonStyles}
            >
                <StyledText style={styles.buttonText}>0</StyledText>
            </TouchableOpacity>


            <TouchableOpacity
                onPress={handleShowName}
                style={styles.buttonStyles}
            >
                <StyledText style={styles.buttonText}>Name</StyledText>
            </TouchableOpacity>


            {showName && <StyledText tyle={styles.normalText}></StyledText>}



        </StyledView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fd5b4b",
        alignItems: "center",
        justifyContent: "center",
    },
    notValid: {
        color: "red",
    },
    valid: {
        color: "green",
    },
    normalText: {
        fontSize: 36,
        color: "#ffff",
    },
    buttonText: {
        fontSize: 40,
        color: "#fd5b4b",
    },
    boldText: {
        fontWeight: "bold",
    },
    countText: {
      color:"#ffff",
      fontWeight: "bold",
      fontSize: "123px",
    },
    countTextName: {
      color:"#ffff",
      fontWeight: "bold",
      fontSize: "69px",
    },
    buttonStyles: {
        borderRadius: 50,
        padding: 5,
        margin: 10,
        backgroundColor: "#ffff",
        width: 200,
        alignItems: "center",
    },

});
