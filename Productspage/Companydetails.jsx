import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import Colors from "../Utils/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export default function Companydetails() {
  return (
    <View style={styles.maindiv}>
      <View style={styles.info}>
        <Image source={require("../Utils/Images/cat.png")} />
        <View style={styles.compinfo}>
          <Text
            style={{
              fontFamily: "Roboto-Medium",
              fontSize: 10,
              fontWeight: "500",
              lineHeight: 10,
            }}
          >
            Caterpillar India Private Limited
          </Text>
          <Text style={styles.subtext}>
            IITM RESEARCH PARK, CSIR Rd {"\n"} {"\n"}
            044 4386 9001 {"\n"} {"\n"}
            GST 190ADALSKNDAOSWIE
          </Text>
        </View>
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.button}>
            <View style={styles.activeshow} />
            <Text style={styles.buttonText}>Store Active</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <FontAwesome name="phone" size={width * 0.03} color="black" />
            <Text style={styles.buttonText}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Ionicons
              name="chatbubbles-sharp"
              size={width * 0.03}
              color="black"
            />
            <Text style={styles.buttonText}>Chat</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  maindiv: {
    backgroundColor: Colors.divbg,
    width: width * 0.95,
    height: width * 0.26,
    marginTop: width * 0.025,
    padding: width * 0.04,
  },
  info: {
    flexDirection: "row",
    gap: width * 0.05,
  },
  compinfo: {
    gap: width * 0.01,
  },
  subtext: {
    fontSize: width * 0.02,
    fontFamily: "Roboto-Medium",
  },
  button: {
    backgroundColor: Colors.divbg,
    flexDirection: "row",
    gap: width * 0.025,
    borderWidth: 0.2,
    borderColor: Colors.Black,
    borderRadius: 2,
    width: width * 0.2,
    height: width * 0.034,
    alignItems: "center",
    paddingLeft: width * 0.02,
  },
  buttonText: {
    fontSize: width * 0.02,
  },
  activeshow: {
    backgroundColor: Colors.green,
    width: width * 0.02,
    height: width * 0.02,
    borderRadius: width * 0.01,
    marginTop: 2,
  },
  buttonGroup: {
    marginLeft: width * 0.04,
    flexDirection: "column",
    gap: width * 0.025,
    marginTop: 4,
  },
});
