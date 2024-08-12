// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CustomThemeProvider } from './src/theme/themeProvider';
import ProductList from './src/components/ProductList';
import ProductDetails from './src/components/ProductDetails';
import Cart from './src/components/Cart';
import {RouteParamList} from './types';

const Stack = createStackNavigator<RouteParamList>();

const App: React.FC = () => {
  return (
    <CustomThemeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ProductList">
          <Stack.Screen name="ProductList" component={ProductList} options={{ title: 'Products' }} />
          <Stack.Screen name="ProductDetails" component={ProductDetails} options={{ title: 'Product Details' }} />
          <Stack.Screen name="Cart" component={Cart} options={{ title: 'Cart' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </CustomThemeProvider>
  );
};

export default App;
