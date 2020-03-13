import React from 'react';
import { FlatList, View, TouchableOpacity, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type StackParams = {
  WeatherList: { userId: number };
  WeatherDetails: { id: number };
  WeatherSettings: { userId: number };
};
type StackNavigation = StackNavigationProp<StackParams>;

const DATA = [
  {
    id: 1,
    name: 'Wroclaw',
    temp: 10,
  },
  {
    id: 2,
    name: 'Warszawa',
    temp: 8,
  },
];

function WeatherList({
  navigation,
  route,
}: {
  navigation: StackNavigation;
  route: RouteProp<StackParams, 'WeatherList'>;
}) {
  function goToSettings() {
    navigation.navigate('WeatherSettings', { userId: route.params.userId });
  }
  function goToDetails(id: number) {
    navigation.navigate('WeatherDetails', { id });
  }

  return (
    <View>
      <TouchableOpacity testID="settings" onPress={goToSettings}>
        <Text>Settings</Text>
      </TouchableOpacity>
      <FlatList
        data={DATA}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <TouchableOpacity testID="city" onPress={() => goToDetails(item.id)}>
            <Text>{item.name}</Text>
            <Text>{item.temp}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default WeatherList;
