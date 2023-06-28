import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { DarkTheme } from '@react-navigation/native';

import BarChartScreen from './src/screens/BarChartScreen';
import PieChartScreen from './src/screens/PieChartScreen';
import LineChartScreen from './src/screens/LineChartScreen';

import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <View style={styles.container}>
      <NavigationContainer theme={DarkTheme}>
        <Tab.Navigator initialRouteName="PieChart" screenOptions={{ tabBarActiveTintColor: 'magenta'}}>
          <Tab.Screen
            name="BarChart"
            component={BarChartScreen}
            options={() => ({
              tabBarLabel: 'Bar Chart',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="bar-chart" color={color} size={size} />
              ),
            })}
          />
          <Tab.Screen
            name="PieChart"
            component={PieChartScreen}
            options={() => ({
              tabBarLabel: 'Pie Chart',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="pie-chart" color={color} size={size} />
              ),
            })}
          />
          <Tab.Screen
            name="LineChart"
            component={LineChartScreen}
            options={() => ({
              tabBarLabel: 'Line Chart',
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="line-chart"color={color} size={size} />
              ),
            })}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
});
