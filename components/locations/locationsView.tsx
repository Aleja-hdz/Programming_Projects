import { ActivityIndicator, Alert, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Locations } from "./locationsType";
import { LocationsCard } from "./locationCard";
import { useEffect, useState } from "react";
import { LocationsResult } from "./locationsResult";
import { DataSource } from "./datasource";

export function LocationsView(){
    const[color, setColor] = useState(styles.btnAnt);
    const[loading, setLoading] = useState(false);
    const[page, setPage] = useState<number>(1);
    const[data, setData] = useState<LocationsResult>({
        info:{
            pages: 0,
            count: 0,
            next: null,
            prev: null,
        },
        results: [],
    });
    
    const dataSource = new DataSource();

    useEffect(() => {
        setLoading(true);
        dataSource.getLocations(page)
        .then((result) => {
            setData(result);
        })
        .catch((error) => {
            Alert.alert(`ERROR: ${error.message}`)
        })
        .finally(() => {
            setLoading(false);
        })
    }, [page])

    return(
        <View>
            <View style={styles.nav}>
                <TouchableOpacity style={[styles.btnAnt, page == 1 && styles.btnDesa]} onPress={() => {setPage(page - 1)}} disabled={data.info.prev == null}>
                    <Text style={styles.text}> Anterior </Text>
                </TouchableOpacity>
                    <Text style={styles.text2}>Pagina {page} de {data.info.pages}</Text>
                <TouchableOpacity style={[styles.btnSig, page === 7 && styles.btnDesa]} onPress={() => {setPage(page + 1)}} disabled={data.info.next == null}>
                    <Text style={styles.text}> Siguiente</Text>
                </TouchableOpacity>
            </View>
                <View style={styles.main}>
                    <View style={styles.box1}>
                        <Text style={styles.text3}>Ubicaciones totales: </Text>
                        <Text style={styles.text3_3}>{data.info.count}</Text>
                    </View>
                    {loading ? (
                    <ActivityIndicator size="large"/>
                ): null}
                    {/*{loading ? null: data.results.map((item) => (
                    <CharacterCard
                        key={item.id}
                        character={item}
                    />  
                    ))}*/}

                    <FlatList
                        data={data.results}
                        renderItem={(item) => (
                            <LocationsCard location={item.item}/>
                        )}
                        keyExtractor={(item => item.id.toString())}
                        style={styles.list}
                    ></FlatList>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    nav:{
        width: '100%',
        height: 80,
        backgroundColor: '#60d526',
        alignItems:'flex-end',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 15,
        paddingBottom: 20,
    },
    btnAnt:{
        backgroundColor: '#4697a9',
        width: 95,
        height: 35,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnSig:{
        backgroundColor: '#006600',
        width: 95,
        height: 35,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnDesa:{
        backgroundColor: "gray",
    },
    main:{
        alignItems: 'center',
        backgroundColor: '#000000',
        marginBottom: 150,
        height: 'auto',
        justifyContent: 'center',
        alignContent: 'center',
    },
    text:{
        color: '#ffffff',
        fontSize: 15,
        fontWeight: 'bold',
    },
    text2:{
        color: '#ffffff',
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    box1:{
        display: 'flex',
        flexDirection: 'row',
        marginTop: 25,
        marginBottom: 25,
    },
    text3:{
        color: '#ffffff',
        fontSize: 22,
        fontWeight: 'bold',
    },
    text3_3:{
        color: '#ff0000',
        fontSize: 22,
        fontWeight: 'bold',
    },
    list:{
        marginBottom: 100, 
    }
})