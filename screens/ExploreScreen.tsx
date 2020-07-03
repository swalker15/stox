import * as React from 'react';
import { StyleSheet } from 'react-native';
import StockHeader from '../components/StockHeader';
import EditScreenInfo from '../components/EditScreenInfo';
import Chart from '../components/Chart';
import { Text, View } from '../components/Themed';
var selectedStock;
export default function ExploreScreen() {
  return (
    <View style={styles.container} >
       <Text style={styles.title}></Text>
      <StockHeader/>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Chart/>
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  //  justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
