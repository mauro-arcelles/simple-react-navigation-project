import { Button, StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../App';

interface Props extends NativeStackScreenProps<RootStackParams, any> { }

const Inicio: FC<Props> = ({ navigation }) => {

  const informacion = {
    clienteId: 20,
    totalPagar: 500
  };

  const visitarNosotros = () => {
    navigation.navigate('Nosotros', informacion);
  };

  return (
    <View style={styles.contenedor}>
      <Text>Inicio</Text>
      <Button
        title="Ir a Nosotros"
        onPress={() => visitarNosotros()}
      />
    </View>
  );
};

export default Inicio;

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
