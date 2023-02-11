import { Button, StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../App';

interface Props extends NativeStackScreenProps<RootStackParams, 'Nosotros'> { }

const Nosotros: FC<Props> = ({ navigation, route }) => {

  const { clienteId, totalPagar } = route.params;

  const volver = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.contenedor}>
      <Text>Nosotros {clienteId}</Text>
      <Button
        title="Volver"
        onPress={() => volver()}
      />
    </View>
  );
};

export default Nosotros;

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
