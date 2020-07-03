import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
import { Text, View } from '../components/Themed';
import { Dimensions } from "react-native";

import * as React from 'react';
var sampleData = require('../assets/sampleData/sampleChart.json'); 
var convertedTime = sampleData.chart.result[0].timestamp;
var millisecondsSince;
for ( var x=0;x< sampleData.chart.result[0].timestamp.length;x++){
   convertedTime[x]=convertedTime[x].substring(0,4);
}
const screenWidth = Dimensions.get("window").width;

const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };
  
  export default function StockHeader() {
    return (
        <View>
        
        <LineChart
          data={{
            labels: convertedTime,
            datasets: [
              {
                data:sampleData.chart.result[0].indicators.quote[0].close
              }
            ]
          }}
          width={Dimensions.get("window").width-(Dimensions.get("window").width/20)} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix=""
          yAxisInterval={20} // optional, defaults to 
          chartConfig={{
            backgroundColor: "#77685D",//"",
            backgroundGradientFrom: "#F4EBD9",
            backgroundGradientTo: "#F4EBD9",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(72, 61, 63, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(72, 61, 63, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "0",
              strokeWidth: "2",
              stroke: "#483D3F"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
      </View>
    );
  }
 