import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Character } from "./characterType";

type Props = {
	character: Character;
}

export function CharacterCard({character} : Props) {

    const getStatusColor = () => {
        switch (character.status) {
            case "Alive":
                return style.alive;
            break;
            case "Dead":
                return style.dead;
            break;
            case "unknown":
                return style.unknown;
            break;
            default:
                return style.unknown;
            break;
        }
    }

	return(
        <View style={style.card}>
            <Image
                style={style.image}
                source={{uri: character.image}}
            />
            <View style={style.info}>
                <Text style={style.text2}>Nombre: </Text>
                <Text style={style.text}>{character.name}</Text>
                <Text style={style.text2}>Estado y especie: </Text>
                <Text style={style.text}><View style={[style.status, getStatusColor()/*OTRA MANERA PERO HAY ERROR DE SINTAXIS:style[character.status.toLowerCase()]*/]} ></View> {character.status} - {character.species}</Text>
                <Text style={style.text2}>Ubicacion: </Text>
                <Text style={style.text}>{character.location.name}</Text>
            </View>
        </View>
	);
}

const style = StyleSheet.create({
    card:{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: 'auto',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ffffff',
        borderRadius: 15,
        backgroundColor: '#111a23',
        marginBottom: 15,
    },
    image:{
        width: '45%',
        height: '100%',
        borderRadius: 10,
        objectFit:'cover',
    },
    info:{
        gap: 3,
        paddingLeft: 10,
        width: '50%',
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
    status: {
        width: 10,
        height: 10,
        borderRadius: 5,
      },
      alive: {
        backgroundColor: "green",
      },
      dead: {
        backgroundColor: "red",
      },
      unknown: {
        backgroundColor: "gray",
      },
})