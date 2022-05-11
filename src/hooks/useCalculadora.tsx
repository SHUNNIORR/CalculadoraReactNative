import {useRef, useState} from 'react';

enum Operaciones {
  sumar,
  restar,
  multiplicar,
  dividir,
}

const useCalculadora = () => {
  const [numero, setNumero] = useState('0');
  const [numeroAnterior, setNumeroAnterior] = useState('0');
  const ultimaOperacion = useRef<Operaciones>();

  const borrar = () => {
    setNumero('0');
    setNumeroAnterior('0');
  };

  const delFunction = () => {
    let negativo: string;
    let numeroTemp = numero;
    if (numero.includes('-')) {
      negativo = '-';
      numeroTemp = numero.substring(1);
    }

    if (numeroTemp.length > 1) {
      setNumero(numero.slice(0, -1));
    } else {
      setNumero('0');
    }
  };

  const handleChangeNumero = (numeroTexto: string) => {
    if (numero.includes('.') && numeroTexto === '.') return;
    if (numero.startsWith('0') || numero.startsWith('-0')) {
      if (numeroTexto === '.') {
        setNumero(numero + numeroTexto);
      } else if (numeroTexto === '0' && numero.includes('.')) {
        setNumero(numero + numeroTexto);
      } else if (numeroTexto !== '0' && !numero.includes('.')) {
        setNumero(numeroTexto);
      } else if (numeroTexto === '0' && !numero.includes('.')) {
        setNumero(numero);
      } else {
        setNumero(numero + numeroTexto);
      }
    } else {
      setNumero(numero + numeroTexto);
    }
  };

  const positivoNegativo = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };

  const cambiarNumPorAnterior = () => {
    if (numero.endsWith('.')) {
      setNumeroAnterior(numero.slice(0, -1));
    } else {
      setNumeroAnterior(numero);
    }
    setNumero('0');
  };

  const btndividir = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operaciones.dividir;
  };
  const btnmultiplicar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operaciones.multiplicar;
  };
  const btnsumar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operaciones.sumar;
  };
  const btnrestar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operaciones.restar;
  };

  const calcular = () => {
    const num1 = Number(numero);
    const num2 = Number(numeroAnterior);
    if (numeroAnterior === '0') {
      return;
    }
    switch (ultimaOperacion.current) {
      case Operaciones.sumar:
        setNumero(`${num1 + num2}`);
        break;
      case Operaciones.restar:
        setNumero(`${num2 - num1}`);
        break;
      case Operaciones.multiplicar:
        setNumero(`${num1 * num2}`);
        break;
      case Operaciones.dividir:
        if (num1 === 0 || num2 === 0) {
          setNumero('Error :C no se puede dividir entre 0.');
        } else {
          setNumero(`${num2 / num1}`);
        }
        break;
    }
    setNumeroAnterior('0');
  };
  return {
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
}
};

export default useCalculadora;
