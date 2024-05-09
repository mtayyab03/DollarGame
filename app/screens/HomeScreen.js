import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Linking,
  Image,
  Modal,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
import {
  FontAwesome5,
  Octicons,
  AntDesign,
  Feather,
  MaterialCommunityIcons,
  Entypo,
  Ionicons,
} from "@expo/vector-icons";

//Components
import Screen from "../components/Screen";

export default function HomeScreen() {
  const [inputValue, setInputValue] = useState("");
  const [select, setSelect] = useState(true); // true for color, false for size
  const [result, setResult] = useState("null");
  const [modalVisible, setModalVisible] = useState(false);
  const handleInputChange = (text) => {
    // Check if the input is a number before updating the state
    if (/^\d+$/.test(text) || text === "") {
      setInputValue(text);
    }
  };

  const handleStartHack = () => {
    if (inputValue === "") {
      // If period number is not entered
      alert("Please enter the period number.");
      return;
    }

    const periodNumber = parseInt(inputValue);

    if (select) {
      // Color selected
      let colorResult = "null";
      if (periodNumber % 3 === 0) {
        colorResult = "White";
      } else {
        colorResult = "Red";
      }
      setResult(colorResult);
    } else {
      // Size selected
      const sizeResult = periodNumber % 2 === 0 ? "Big" : "Small";
      setResult(sizeResult);
    }
  };

  const handleTelegramLink = () => {
    const telegramLink = "https://t.me/+7U4I8m2QmG1hMzdl";
    Linking.openURL(telegramLink).catch((err) =>
      console.error("An error occurred", err)
    );
  };
  const handleRegister = () => {
    const gameLink =
      "https://55club03.com/#/register?invitationCode=16658796910";
    Linking.openURL(gameLink).catch((err) =>
      console.error("An error occurred", err)
    );
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    // Set modal visible after reaching HomeScreen
    setModalVisible(true);
  }, []);

  return (
    <Screen style={styles.screen}>
      <View
        style={{
          width: "90%",
          height: RFPercentage(22),
          borderRadius: RFPercentage(2),
          backgroundColor: Colors.lightWhite,
          padding: RFPercentage(1),
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{ width: "50%", height: "100%" }}
          source={require("../../assets/images/main.png")}
        />
        <View style={{ width: "45%", marginLeft: RFPercentage(2) }}>
          <Text
            style={{
              color: Colors.blacky,
              fontSize: RFPercentage(1.8),
              fontFamily: FontFamily.medium,
            }}
          >
            Earning Trick Hack
          </Text>
          <Text
            style={{
              marginTop: RFPercentage(1),
              color: Colors.blacky,
              fontSize: RFPercentage(1.5),
              fontFamily: FontFamily.light,
            }}
          >
            Welcome to Earning Trick Hack, enter your period number and result
            type and see result.
          </Text>
        </View>
      </View>

      {/* main */}
      <View
        style={{
          width: "90%",
          backgroundColor: Colors.lightWhite,
          borderRadius: RFPercentage(2),
          padding: RFPercentage(2),
          marginTop: RFPercentage(1),
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ width: RFPercentage(10) }}>
            <Text
              style={{
                color: Colors.blacky,
                fontSize: RFPercentage(2.2),
                fontFamily: FontFamily.medium,
              }}
            >
              Server :
            </Text>
          </View>
          <Text
            style={{
              color: Colors.green,
              fontSize: RFPercentage(2),
              fontFamily: FontFamily.regular,
            }}
          >
            Connected
          </Text>
        </View>

        {/* type */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: RFPercentage(2),
          }}
        >
          <View style={{ width: RFPercentage(10) }}>
            <Text
              style={{
                color: Colors.blacky,
                fontSize: RFPercentage(2.2),
                fontFamily: FontFamily.medium,
              }}
            >
              Type :
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setSelect(true)}
            style={{
              borderWidth: RFPercentage(0.1),
              borderColor: select == true ? Colors.green : Colors.purewhite,
              padding: RFPercentage(1),
              borderRadius: RFPercentage(1),
              backgroundColor: Colors.purewhite,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: Colors.blacky,
                fontSize: RFPercentage(1.5),
                fontFamily: FontFamily.regular,
              }}
            >
              Color
            </Text>
          </TouchableOpacity>

          {/* big/small */}
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setSelect(false)}
            style={{
              borderWidth: RFPercentage(0.1),
              borderColor: select == false ? Colors.green : Colors.purewhite,
              marginLeft: RFPercentage(3),
              padding: RFPercentage(1),
              borderRadius: RFPercentage(1),
              backgroundColor: Colors.purewhite,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: Colors.blacky,
                fontSize: RFPercentage(1.5),
                fontFamily: FontFamily.regular,
              }}
            >
              Big/Small
            </Text>
          </TouchableOpacity>
        </View>

        {/* period number */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: RFPercentage(2),
          }}
        >
          <View style={{ width: RFPercentage(10) }}>
            <Text
              style={{
                color: Colors.blacky,
                fontSize: RFPercentage(2.2),
                fontFamily: FontFamily.medium,
              }}
            >
              Period :
            </Text>
          </View>
          <View
            style={{
              width: RFPercentage(15),
              padding: RFPercentage(1),
              borderRadius: RFPercentage(1),
              backgroundColor: Colors.purewhite,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextInput
              keyboardType="numeric"
              maxLength={3}
              style={{
                height: RFPercentage(3),
                width: RFPercentage(15),
                paddingLeft: RFPercentage(1),
              }}
              onChangeText={handleInputChange}
              value={inputValue}
              placeholder="Period Number"
            />
          </View>
        </View>

        {/* result */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: RFPercentage(2),
          }}
        >
          <View style={{ width: RFPercentage(10) }}>
            <Text
              style={{
                color: Colors.blacky,
                fontSize: RFPercentage(2.2),
                fontFamily: FontFamily.medium,
              }}
            >
              Result :
            </Text>
          </View>
          <Text
            style={{
              marginLeft: RFPercentage(1),
              color: Colors.green,
              fontSize: RFPercentage(2),
              fontFamily: FontFamily.regular,
            }}
          >
            {result}
          </Text>
        </View>

        {/* button */}
        <View
          style={{
            width: "100%",
            alignItems: "center",
            marginTop: RFPercentage(3),
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleStartHack}
            style={{
              padding: RFPercentage(1),
              borderRadius: RFPercentage(1),
              backgroundColor: Colors.green,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: Colors.white,
                fontSize: RFPercentage(1.5),
                fontFamily: FontFamily.regular,
              }}
            >
              Start Hack
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* image */}
      <View
        style={{
          width: "90%",
          alignItems: "center",
          justifyContent: "center",
          marginTop: RFPercentage(1),
        }}
      >
        <Image
          style={{ width: RFPercentage(20), height: RFPercentage(20) }}
          source={require("../../assets/images/splash.png")}
        />
      </View>

      {/* telegram link */}
      <View
        style={{
          width: "90%",
          alignItems: "center",
          justifyContent: "center",
          marginTop: RFPercentage(1),
          backgroundColor: Colors.lightWhite,
          borderRadius: RFPercentage(2),
          padding: RFPercentage(2),
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: Colors.blacky,
            fontSize: RFPercentage(1.5),
            fontFamily: FontFamily.regular,
          }}
        >
          Join Telegram for more Details and here {"\n"} is its link click
          below.
        </Text>
        <View style={{ flexDirection: "row", marginTop: RFPercentage(2) }}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleTelegramLink}
            style={{
              paddingHorizontal: RFPercentage(2),
              paddingVertical: RFPercentage(1),
              borderRadius: RFPercentage(1),
              backgroundColor: "#4285F4",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: Colors.white,
                fontSize: RFPercentage(1.5),
                fontFamily: FontFamily.regular,
              }}
            >
              Telegram
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleRegister}
            style={{
              marginLeft: RFPercentage(1),
              paddingHorizontal: RFPercentage(2),
              paddingVertical: RFPercentage(1),
              borderRadius: RFPercentage(1),
              backgroundColor: Colors.green,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={styles.modalButtonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={{
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                right: 0,
                padding: RFPercentage(1.5),
              }}
              onPress={closeModal}
            >
              <Entypo name="cross" size={24} color={Colors.blacky} />
            </TouchableOpacity>
            <Text style={styles.modalText}>Welcome to the app!</Text>
            <View
              style={{
                width: "70%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: Colors.blacky,
                  fontSize: RFPercentage(1.5),
                  fontFamily: FontFamily.regular,
                }}
              >
                if you want to register in the Earning Trick Hack Please click
                on Register
              </Text>
            </View>
            <View style={{ width: "90%", flexDirection: "row" }}>
              <TouchableOpacity
                onPress={handleRegister}
                style={styles.modalButton}
              >
                <Text style={styles.modalButtonText}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    backgroundColor: Colors.lightWhite,
    borderRadius: RFPercentage(2),
    padding: RFPercentage(2),
    alignItems: "center",
  },
  modalText: {
    marginVertical: RFPercentage(2),
    color: Colors.blacky,
    fontSize: RFPercentage(2),
    fontFamily: FontFamily.medium,
  },
  modalButton: {
    width: "80%",
    height: RFPercentage(5),
    marginTop: RFPercentage(2),
    backgroundColor: Colors.green,
    borderRadius: RFPercentage(1),
    alignItems: "center",
    justifyContent: "center",
  },
  modalButtonText: {
    color: Colors.white,
    fontSize: RFPercentage(1.5),
    fontFamily: FontFamily.regular,
  },
});
