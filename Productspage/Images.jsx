import { StyleSheet, Text, View, Image, SafeAreaView, Dimensions } from 'react-native';
import React from 'react';
import Colors from '../Utils/Colors';

// Get screen dimensions
const { width, height } = Dimensions.get('window');

export default function Images() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../Utils/Images/prod.png')} style={styles.img} />
      <View style={styles.activeview}>
        <View style={styles.activeshow}></View>
        <Text style={styles.activeText}>Active</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', // Center the content horizontally
    marginTop: 20, // Add margin at the top
  },
  img: {
    width: width * 0.7, // 80% of the screen width
    height: height * 0.3, // 30% of the screen height
    justifyContent: 'center',
  },
  activeshow: {
    backgroundColor: Colors.green,
    width: 13,
    height: 13,
    borderRadius: 50,
  },
  activeview: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    width: 76,
    height: 29,
    borderWidth: 0.2,
    borderColor: Colors.Black,
    borderRadius: 2,
    paddingLeft: 10,
    position: 'absolute',
    top: height * 0.3 - 7, // Positioning based on image height
    left: width * 0.8 - 60, // Positioning based on image width
  },
  activeText: {
    fontSize: 12, // Adjust font size if needed
  },
});
