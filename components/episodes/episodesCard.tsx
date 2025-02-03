import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Episodes } from "./episodesType";

type Props = {
	episode: Episodes;
}

export function EpisodesCard({episode: episode} : Props) {
	return(
        <View style={style.card}>
            <View style={style.info}>
                <Text style={style.text2}>Nombre: </Text>
                <Text style={style.text}>{episode.name}</Text>
                <Text style={style.text2}>Fecha de estreno: </Text>
                <Text style={style.text}>{episode.air_date}</Text>
                <Text style={style.text2}>Episodio: </Text>
                <Text style={style.text}>{episode.episode}</Text>
                <Text style={style.text2}>Numero de personajes: </Text>
                <Text style={style.text}>{episode.characters.length}</Text>
            </View>
            <Image
                style={style.image}
                source={require("../../assets/images/portadaT1.jpg")}
            />
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
        width: '50%',
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
})