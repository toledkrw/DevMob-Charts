import React from "react";
import { View, Dimensions } from "react-native";

import { LineChart } from 'react-native-chart-kit';

export default LineChartScreen = () => {
    const screenWidth = Dimensions.get("window").width;

    const data = {
        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43],
                strokeWidth: 1,
            },
        ],
    }

    const chartConfig = {
        color: (opacity = 0) => `rgba(255, 0, 255, ${opacity})`,
        propsForBackgroundLines:{
            display:"none"
        },
        propsForLabels:{
            color: "cyan", // eu odeio essa biblioteca com todas as minhas forças
        }
      };

    return (
        <View style={{ flex: 1, width: "100%", alignContent: "center", justifyContent: "center" }}>
            <LineChart
                data={data}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
            />
        </View>
    )
}