import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import Comdiv from '../Components/Commondiv';

const DATA = [
    {
      id: '1',
      title: 'Latest Products 1',
      images: [
        require('../Utils/Images/sampleimage.png'),
        require('../Utils/Images/sampleimage1.png'),
      ],
    },
    {
      id: '2',
      title: 'Latest Products 2',
      images: [
        require('../Utils/Images/sampleimage.png'),
        require('../Utils/Images/sampleimage1.png'),
        require('../Utils/Images/sampleimage2.png'),
      ],
    },
    {
      id: '3',
      title: 'Latest Products 3',
      images: [
        require('../Utils/Images/sampleimage.png'),
        require('../Utils/Images/sampleimage1.png'),
        require('../Utils/Images/sampleimage2.png'),
      ],
    },
    {
      id: '4',
      title: 'Latest Products 4',
      images: [
        require('../Utils/Images/sampleimage.png'),
        require('../Utils/Images/sampleimage1.png'),
        require('../Utils/Images/sampleimage2.png'),
      ],
    },
    // Add more data items as needed
  ];

export default function Recomproducts() {
    return (
        <View style={styles.maincontainer}>
          <Text style={styles.Text}>Recommended Products</Text>
          <FlatList
            data={DATA}
            renderItem={({ item }) => <Comdiv data={item} />}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{ width: 30 }} />}
            contentContainerStyle={styles.flatListContentContainer}
          />
        </View>
      );
}

const styles = StyleSheet.create({
    maincontainer: {
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: 15,
      paddingTop: 10,
      height: 260,
      marginTop:10
    },
    Text: {
      color: '#000',
      fontSize: 15,
      fontStyle: 'normal',
      fontWeight: '500',
      marginBottom: 10, // Adjust this value to increase the gap
    },
    flatListContentContainer: {
      paddingHorizontal: 10, // Adjust as needed
      justifyContent: 'space-between',
    },
  });