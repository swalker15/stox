import * as WebBrowser from 'expo-web-browser';
import React from 'react';
//import * as React from 'react';//
import { StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import { Button } from 'react-native-elements';
var sampleStock = require('../assets/sampleData/sampleStock.json'); 

export default function StockHeader() {
  const [selectedStock, setSelectedStock] = React.useState(sampleStock);
  var stockData = {
                  'symbol': selectedStock.quoteType.symbol,
                  'price': selectedStock.price.regularMarketPrice.raw, 
                  'change': (selectedStock.price.regularMarketPrice.raw-selectedStock.price.regularMarketPreviousClose.raw).toFixed(2),
                  'percentChange': ((selectedStock.price.regularMarketPrice.raw-selectedStock.price.regularMarketPreviousClose.raw)*100/(selectedStock.price.regularMarketPreviousClose.raw)).toFixed(2),
                  'fullName': selectedStock.quoteType.shortName   
                }
/*
  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function getData()
    {
      fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?region=US&symbol=VOO", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
        "x-rapidapi-key": ""
      }
    })
    .then(res => res.json())
    .then(stockInfo => setSelectedStock(stockInfo))
    .catch(er => {
      console.log(er);
    });
    }
  getData();
}, []);
  */
  return (
    <View>
      <Text style={styles.title}>{stockData.symbol}</Text>
  <Text style={styles.description}>${stockData.price} | +{stockData.change}({stockData.percentChange}%) | {stockData.fullName} </Text>
    </View>
  );
}



const styles = StyleSheet.create({
    title: {
      fontSize: 60,
      fontWeight: 'bold',
      marginTop:'13%',
      color: "#483D3F",
      textAlign: 'center',
    },
    description: {
      fontSize: 20,
      color: "#483D3F",
      textAlign: 'center',
    
    },
    separator: {
      marginVertical: 30,
      height: 10,
      width: '80%',
    },
  });
  