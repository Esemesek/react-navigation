import React from 'react';
import {
  NavigationRouteContext,
  NavigationContext,
  StackRouter,
  CommonActions,
} from '@react-navigation/native';

export function createStackNavigationObject() {
  const router = StackRouter({ state: { routes: {}}});

  return [...Object.keys(router), ...Object.keys(CommonActions)].reduce(
    (acc, e) => ({ ...acc, [e]: jest.fn() }),
    {}
  );
}

export function createScreen(
  Component: React.ComponentType<any>,
  { navigation, route = {} }: { navigation?: any; route?: any }
) {
  return (
    <NavigationRouteContext.Provider value={route}>
      <NavigationContext.Provider value={navigation}>
        <Component route={route} navigation={navigation} />
      </NavigationContext.Provider>
    </NavigationRouteContext.Provider>
  );
}
