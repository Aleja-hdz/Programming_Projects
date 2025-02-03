import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Locations } from "./locationsType";

type Props = {
	location: Locations;
}

export function LocationsCard({location: location} : Props) {
	return(
        <View style={style.card}>
            <Image
                style={style.image}
                source={require("../../assets/images/planetas.jpg")}
            />
            <View style={style.info}>
                <Text style={style.text2}>Ubicacion: </Text>
                <Text style={style.text}>{location.name}</Text>
                <Text style={style.text2}>Tipo de localizacion: </Text>
                <Text style={style.text}>{location.type}</Text>
                <Text style={style.text2}>Dimension: </Text>
                <Text style={style.text}>{location.dimension}</Text>
                <Text style={style.text2}>Numero de residentes: </Text>
                <Text style={style.text}>{location.name.length}</Text>
            </View>
        </View>
	);
}

const style = StyleSheet.create({
    card:{
        display: 'flex',
        width: '100%',
        height: 'auto',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ffffff',
        borderRadius: 15,
        backgroundColor: '#111a23',
        marginBottom: 15,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        resizeMode: 'cover',
        marginBottom: 10,
    },    
    info:{
        gap: 3,
        paddingLeft: 10,
        width: '100%',
    },
    text:{
        color: '#ffffff',
        fontSize: 15,
    },
    text2:{
        color: '#60d526',
        fontSize: 17,
        fontWeight: 'bold',
    },
})