import React from "react";
import { View } from "react-native";

import {
    VictoryChart,
    VictoryAxis,
    VictoryBar,
} from 'victory-native';


export default BarChartScreen = () => {

    const data = [
        { x: 'Sun', y: Math.floor(Math.random() * 200) },
        { x: 'Mon', y: Math.floor(Math.random() * 200) },
        { x: 'Tue', y: Math.floor(Math.random() * 200) },
        { x: 'Wed', y: Math.floor(Math.random() * 200) },
        { x: 'Thu', y: Math.floor(Math.random() * 200) },
        { x: 'Fri', y: Math.floor(Math.random() * 200) },
        { x: 'Sat', y: Math.floor(Math.random() * 200) },
    ];

    return (
        <View style={{ flex: 1, width: "100%", alignContent: "center", justifyContent: "center" }}>
            <VictoryChart>
                <VictoryAxis
                    style={{
                        axis: { stroke: 'white' },
                        grid: { stroke: 'transparent' },
                        tickLabels: { fill: 'white' },
                    }}
                />
                <VictoryAxis dependentAxis
                    style={{
                        axis: { stroke: 'white' },
                        grid: { stroke: 'transparent' },
                        tickLabels: { fill: 'white' },
                    }}
                />
                <VictoryBar style={{ data: { fill: 'magenta' } }} data={data} />
            </VictoryChart>
        </View>
    )
}