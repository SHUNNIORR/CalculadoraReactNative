import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../Themes/appTheme';

interface botonCalcProps {
  texto: string;
  color?: string;
  fontColor?: string;
  ancho?: boolean;
  action: (numeroTexto: string)=> void ;
}

const BotonCalc = ({
  texto,
  color = '#2D2D2D',
  fontColor = 'white',
  ancho = false,
  action
}: botonCalcProps) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={()=>action(texto)}>
      <View
        style={{
          ...styles.boton,
          backgroundColor: color,
          width: ancho ? 165 : 80,
        }}>
        <Text style={{...styles.botonTexto, color: fontColor}}>{texto}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BotonCalc;
