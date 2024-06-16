import { SafeAreaView, StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors'

const { width } = Dimensions.get('window');

export default function Insurance() {
  return (
    <SafeAreaView style={styles.maindiv}>
      <Text style={styles.title}>Insurance</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  maindiv: {
    backgroundColor: Colors.divbg,
    width: width * 0.95, // Adjusted to 95% of the screen width
    minHeight: width * 0.26, // Adjusted to 26% of the screen width
    marginTop: width * 0.025, // Adjusted to 2.5% of the screen width
    padding: width * 0.03, // Adjusted to 4% of the screen width
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    fontSize: width * 0.04, // Adjusted to 4% of the screen width
    fontWeight: 'bold',
    
  },
});
