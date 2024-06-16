import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import Colors from "../Utils/Colors";


const PaginationIndicator = ({ currentIndex, totalImages }) => {
  return (
    <View style={styles.paginationContainer}>
      {Array.from({ length: totalImages }).map((_, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.paginationDot,
            currentIndex === index ? styles.activeDot : styles.inactiveDot,
          ]}
        />
      ))}
    </View>
  );
};

export default function Comdiv({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef(null);
  const imageWidth = 135; // Adjusted width of the image
  const imageMargin = 10; // Adjusted margin between images

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / (135 + 6)); // Hard-coded width and margin
    setCurrentIndex(index);
  };

  return (
    <View style={styles.maindiv}>
      <ScrollView
        horizontal
        nestedScrollEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        ref={scrollViewRef}
        pagingEnabled
        snapToInterval={imageWidth + 30}//ADJUST THIS MANUALLY TO SNAP IN CORRECT POSITION OF NEXT IMAGE
        decelerationRate="fast"
      >
        {data.images.map((image, index) => (
          <View key={index} style={styles.carouselItem}>
            <Image source={image} style={styles.imgContainer} />
          </View>
        ))}
      </ScrollView>
      <View style={styles.info}>
        <Text style={styles.textstyle}>
            {data.title}
        </Text>   
        <Image source={require('../Utils/Images/caterpillar.png')} style={styles.logoimage}/> 
      </View>
      
      <PaginationIndicator currentIndex={currentIndex} totalImages={data.images.length} />
    </View>
  );
}

const styles = StyleSheet.create({
  maindiv: {
    width: 160, // Adjusted width to accommodate images and padding
    height: 169, // Adjusted height to accommodate images and padding
    borderRadius: 8,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 2, // For Android shadow
    padding: 10,
    paddingRight: 3, // Adjusted padding to align with image width
    paddingLeft: 0,
    alignItems: 'flex-start',
    position: 'relative',
    top: 12,
  },
  logoimage:{
    position:'absolute',
    top:-15 ,
    left:130
  },
  textstyle: {
    color: "#000",
    fontSize: 9,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 8,
    paddingTop: 6,
    position: 'absolute',
    top: -20,
    left: 4,
    backgroundColor: Colors.divbg,
    width: 144,
    height: 22,
    padding: 5,
    
  },
  info: {
    width: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center',
  },
  imgContainer: {
    width: 135, // Adjusted width of the image
    height: 115, // Adjusted height of the image
    borderRadius: 8,
    borderColor: Colors.grey,
    borderWidth: 1,
    alignItems: 'center',
    marginLeft:14
  },
  carouselItem: {
    marginRight: 10,
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    position: 'absolute',
    bottom: 30, // Adjusted position to align with the bottom of the maindiv
    left: 0,
    right: 0,
    marginBottom: 10, // Adjusted margin to give space between pagination and images
  },
  paginationDot: {
    width: 3, // Adjusted size of the pagination dot
    height: 3, // Adjusted size of the pagination dot
    borderRadius: 3, // Adjusted border radius to make it round
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: Colors.Black,
  },
  inactiveDot: {
    backgroundColor: Colors.grey,
  },
});