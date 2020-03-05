import React from 'react';
import {
  createScreen,
  createStackNavigationObject,
} from '@react-navigation/test-utils';
import { render, fireEvent } from 'react-native-testing-library';
import { AlbumsScreen } from '../SimpleStack';

it('aaa', () => {
  const navigation = createStackNavigationObject();
  const { getByText } = render(createScreen(AlbumsScreen, { navigation }));

  const pushButton = getByText('Push article');

  fireEvent.press(pushButton);

  expect(navigation.push).toHaveBeenCalledWith('Article', {
    author: 'Babel fish',
  });
});
