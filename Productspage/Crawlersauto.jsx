import { Image, StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import React from 'react';
import Colors from '../Utils/Colors';
import { Feather } from '@expo/vector-icons';

// Get screen dimensions
const { width, height } = Dimensions.get('window');

const Crawlersauto = () => {
  return (
    <SafeAreaView style={styles.maindiv}>
      <View style={styles.heading}>
        <Text style={styles.txt}>Crawlers automation</Text>
        <Image source={require('../Utils/Images/cat.png')} style={styles.image} />
      </View>

      <View style={styles.heading1}>
        <Text style={styles.txt1}>50,000$ /unit</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ask</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.heading2}>
        <View style={styles.bronchure}>
          <Feather name="book-open" size={13} color="black" />
          <Text style={styles.txt1}>Brochure</Text>
        </View>

        <TouchableOpacity style={styles.button1}>
          <Text style={styles.buttonText}>Make Request</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.description}>
        Post-emulsifiable ZL-27A is a level 3, high-sensitivity Type 1 penetrant designed for inspections which require maximum process control and reliability, such as safety-critical aerospace testing.
      </Text>
    </SafeAreaView>
  );
}

export default Crawlersauto;

const styles = StyleSheet.create({
  maindiv: {
    backgroundColor: Colors.divbg,
    width: width * 0.95, // 95% of the screen width
    height: height * 0.25, // 25% of the screen height
    marginTop: 40,
    padding: 15,
    display: 'flex',
    alignItems: 'center'
  },
  heading: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Distribute space evenly
    width: '100%',
  },
  heading1: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Distribute space evenly
    width: '100%',
    marginTop: 17
  },
  heading2: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Distribute space evenly
    width: '100%',
  },
  txt: {
    fontSize: 20,
    fontFamily:'Roboto-Medium',
    fontWeight: '700',
    lineHeight: 23.44,
  },
  txt1: {
    fontSize: 10,
    fontFamily:'Roboto-Regular',
    fontWeight: '500',
    lineHeight: 11.72,
  },
  button: {
    width: 78,
    height: 17,
    backgroundColor: Colors.green,
    alignItems: 'center',
    borderRadius: 2,
    justifyContent:'center'
  },
  button1: {
    backgroundColor: Colors.blue,
    width: 78,
    height: 17,
    alignItems: 'center',
    borderRadius: 2,
    justifyContent:'center'
  },
  buttonText: {
    color: Colors.white,
    fontSize: 8,
    fontFamily:'Roboto-Medium',
    fontWeight: '500',
    lineHeight: 9.38,
    
  },
  bronchure: {
    display: 'flex',
    flexDirection: 'row',
    gap: 3,
    alignItems: 'center',
    paddingLeft: 8,
    borderWidth: 0.2,
    borderColor: Colors.Black,
    borderRadius: 2,
    width: 80,
    height: 20
  },
  description: {
    fontFamily:'Roboto-Medium',
    fontSize: 10,
    marginTop: 20,
    marginLeft:-2,
    textAlign: 'left', // Center text horizontally
    fontSize: 8,
    fontWeight: '400', // React Native uses string values for fontWeight
    lineHeight: 9.38,
    letterSpacing: 0.02,
  },
  image: {
    width: 30, // Adjust as needed
    height: 30, // Adjust as needed
  },
});
