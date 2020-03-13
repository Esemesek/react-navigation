import React from 'react';
import {
  NavigationRouteContext,
  NavigationContext,
  StackRouter,
  CommonActions,
  StackActions,
} from '@react-navigation/native';

export function createStackMock(params?: any) {
  const router = StackRouter({});
  const state = router.getInitialState({
    routeNames: [],
    routeParamList: {},
  });
  const mockParams = { ...params };

  function setParams(params: any) {
    Object.assign(mockParams, params);
  }

  const navigationMock = [
    ...Object.keys(StackActions),
    ...Object.keys(CommonActions),
  ].reduce((acc, e) => ({ ...acc, [e]: jest.fn() }), {
    dangerouslyGetState: () => state,
    dangerouslyGetParent: () => undefined,
  });

  return {
    navigation: { ...navigationMock, setParams },
    route: { params: mockParams },
  };
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
