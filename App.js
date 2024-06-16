import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View,ScrollView} from 'react-native';
import Images from './Productspage/Images';
import Colors from './Utils/Colors';
import Crawlersauto from './Productspage/Crawlersauto';
import Companydetails from './Productspage/Companydetails';
import Problemstats from './Productspage/Problemstats';
import Insurance from './Productspage/Insurance';
import Similarproducts from './Productspage/Similarproducts';
import RecommendedProducts from './Productspage/Recommendedproducts';
import { useFonts } from 'expo-font';

export default function App() {

    const [fontsLoaded, fontError] = useFonts({
      'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
      'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    });
  
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView  contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        >
        <Images />
        <Crawlersauto />
        <Companydetails />
        <Problemstats />
        <Insurance />
        <Similarproducts />
        <RecommendedProducts />
        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    scrollContainer: {
      alignItems: 'center',
      paddingVertical: 20, // Optional: Adds vertical padding for the scrollable content
    },
    marginTop:30
  },
  scrollContainer: {
    alignItems: 'center',
  },
});
