import React from 'react';
import { createScreen, createStackMock } from '@react-navigation/test-utils';
import { render, fireEvent } from 'react-native-testing-library';
import WeatherList from '../__fixtures__/WeatherList';

const USER_ID = '123';

it('should call navigate', () => {
  const { navigation, route } = createStackMock();
  const { getAllByTestId } = render(
    createScreen(WeatherList, { navigation, route })
  );

  const cityButtons = getAllByTestId('city');

  fireEvent.press(cityButtons[0]);

  expect(navigation.navigate).toHaveBeenCalledWith('WeatherDetails', { id: 1 });
});

it('should call navigate with correct route params', () => {
  const { navigation, route } = createStackMock({ userId: USER_ID });
  const { getByTestId } = render(
    createScreen(WeatherList, { navigation, route })
  );

  const settingsButton = getByTestId('settings');

  fireEvent.press(settingsButton);

  expect(navigation.navigate).toHaveBeenCalledWith('WeatherSettings', {
    userId: USER_ID,
  });
});
