import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors'

const { width } = Dimensions.get('window');

export default function Problemstats() {
  return (
    <View style={styles.maindiv}>
      <Text style={styles.title}>Problem statistics</Text>
      <View style={styles.info}>
        <Text style={styles.label}>Review</Text>
        <Text style={styles.label}>Viewed</Text>
        <Text style={styles.label}>Units sold</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  maindiv: {
    backgroundColor: Colors.divbg,
    width: width * 0.95,
    minHeight: width * 0.26,
    marginTop: width * 0.025,
    padding: width * 0.04,
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    marginBottom: width * 0.02,
  },
  info: {
    marginTop:width* 0.2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: width * 0.1,
  },
  label: {
    fontSize: width * 0.03,
    marginBottom: width * 0.02,
  },
});
