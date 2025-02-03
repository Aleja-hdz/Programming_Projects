import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
import { Link } from "expo-router";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function About(){
    return(
        <View style={styles.body}>
            <Image source={require("../../assets/images/foto.jpeg")} style={styles.img}></Image>
            <Text style={styles.name}>Alejandro Hernandez Hernandez</Text>
            <Text style={styles.text}>~ Programming Technician ~</Text>
            <Text style={styles.text2}><Entypo name="location-pin" size={24} color="white" /> Tehuitzingo, Puebla</Text>
            <Text style={styles.text}>Student at the Technological University of Izucar de Matamoros in the TSU career in Multiplatform Software Development</Text>
            <View style={styles.box}>
                <Link href={"https://www.facebook.com/profile.php?id=100084219824214&mibextid=ZbWKwL"}><FontAwesome6 name="facebook" size={30} color="white" /></Link>
                <Link href={"https://www.linkedin.com/in/alejandro-hernandez-a8a72a2b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}><AntDesign name="linkedin-square" size={32} color="white" /></Link>
                <Link href={"https://github.com/Aleja-hdz/Programming_Projects.git"}><AntDesign name="github" size={30} color="white" /></Link>
                <Link href={"https://wa.link/6rxc1v"}><FontAwesome5 name="whatsapp-square" size={30} color="white" /></Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    body:{
        backgroundColor: '#303244',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    },
    img:{
        height: 200,
        width: 200,
        borderRadius: 100,
    },
    name:{
        fontSize: 20,
        marginTop: 20,
        color: 'white',
        marginBottom: 5,
    },
    text:{
        fontSize: 15,
        color: 'white',
        textAlign: 'center',
        lineHeight: 25,
    },
    text2:{
        fontSize: 17,
        color: 'white',
        marginTop: 10,
        marginBottom: 5,
    },
    box:{
        flexDirection: 'row',
        marginTop: 15,
        gap: 15,
    },
    icons:{
        marginTop: 10,

    },
})