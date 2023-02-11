import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
  StyleSheet
} from 'react-native';
import Inicio from './src/views/Inicio';
import Nosotros from './src/views/Nosotros';

export type RootStackParams = {
  Inicio: undefined,
  Nosotros: { clienteId: number, totalPagar: number; };
};

const Stack = createNativeStackNavigator<RootStackParams>();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Inicio"
        screenOptions={{
          title: 'Principal',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Inicio"
          component={Inicio}
          // options={{
          //   title: 'Principal',
          //   headerTitleAlign: 'center',
          //   headerStyle: {
          //     backgroundColor: '#f4511e',
          //   },
          //   headerTintColor: '#fff',
          //   headerTitleStyle: {
          //     fontWeight: 'bold',
          //   },
          // }}
        />

        <Stack.Screen
          name="Nosotros"
          component={Nosotros}
          options={({ route }: NativeStackScreenProps<RootStackParams, 'Nosotros'>) => ({
            title: route.params.clienteId.toString()
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );

};

const styles = StyleSheet.create({

});

export default App;
