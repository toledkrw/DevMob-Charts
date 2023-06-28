import React from "react";
import { View } from "react-native";

import { PieChart } from 'react-native-svg-charts';


export default PieChartScreen = () => {
    const pieData = [
        {
            key: 1,
            value: 30,
            svg: { fill: '#FF00FF' },
        },
        {
            key: 2,
            value: 20,
            svg: { fill: '#FF007F' },
        },
        {
            key: 3,
            value: 50,
            svg: { fill: '#FFAFFF' },
        },
    ];

    return (
        <View style={{ flex: 1, width: "100%", alignContent: "center", justifyContent: "center" }}>
            <PieChart style={{ height: "80%", marginTop: 50 }} data={pieData} outerRadius={'70%'} innerRadius={10} />
        </View>
    )
}