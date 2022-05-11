import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fondo:{
        flex:1,
        backgroundColor: 'black'
    },
    resultado:{
        color: 'white',
        fontSize: 60,
        textAlign: 'right'
    },
    calculadoraContainer:{
        flex:1,
        justifyContent:'flex-end',
        paddingHorizontal: 20
    },
    resultadoPequeno:{
        color: 'rgba(255,255,255,0.5)',
        fontSize: 30,
        textAlign: 'right'
    },
    boton:{
        justifyContent:"center",
        alignItems:'center',
        height: 80,
        width:80,
        backgroundColor:'#2D2D2D',
        borderRadius: 100
    },
    botonTexto:{
        padding: 10,
        fontSize:30,
        color: 'white'
    },
    fila:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5
    }
})