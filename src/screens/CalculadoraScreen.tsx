import React, {useRef, useState} from 'react';
import {Text, View} from 'react-native';
import BotonCalc from '../components/BotonCalc';
import useCalculadora from '../hooks/useCalculadora';
import {styles} from '../Themes/appTheme';



const calculadoraScreen = () => {
  
  const {
    numeroAnterior,
    numero,
    borrar,
    positivoNegativo,
    delFunction,
    btndividir,
    handleChangeNumero,
    btnmultiplicar,
    btnrestar,
    btnsumar,
    calcular,
} = useCalculadora();    

  return (
    <View style={styles.calculadoraContainer}>
      {
        (numeroAnterior!=='0')&&<Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      }
      
      <Text numberOfLines={1} adjustsFontSizeToFit style={styles.resultado}>
        {numero}
      </Text>
      <View style={styles.fila}>
        <BotonCalc
          texto="C"
          color="#9B9B9B"
          fontColor="black"
          action={borrar}
        />
        <BotonCalc
          texto="+/-"
          color="#9B9B9B"
          fontColor="black"
          action={positivoNegativo}
        />
        <BotonCalc
          texto="del"
          color="#9B9B9B"
          fontColor="black"
          action={delFunction}
        />
        <BotonCalc texto="/" color="#FF9427" action={btndividir} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="7" action={handleChangeNumero} />
        <BotonCalc texto="8" action={handleChangeNumero} />
        <BotonCalc texto="9" action={handleChangeNumero} />
        <BotonCalc texto="X" color="#FF9427" action={btnmultiplicar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="4" action={handleChangeNumero} />
        <BotonCalc texto="5" action={handleChangeNumero} />
        <BotonCalc texto="6" action={handleChangeNumero} />
        <BotonCalc texto="-" color="#FF9427" action={btnrestar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="1" action={handleChangeNumero} />
        <BotonCalc texto="2" action={handleChangeNumero} />
        <BotonCalc texto="3" action={handleChangeNumero} />
        <BotonCalc texto="+" color="#FF9427" action={btnsumar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="0" ancho action={handleChangeNumero} />
        <BotonCalc texto="." action={handleChangeNumero} />
        <BotonCalc texto="=" color="#FF9427" action={calcular} />
      </View>
    </View>
  );
};

export default calculadoraScreen;
