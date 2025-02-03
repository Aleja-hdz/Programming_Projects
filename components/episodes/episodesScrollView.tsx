import { ActivityIndicator, Alert, FlatList, StyleSheet, Text, View } from "react-native";
import { EpisodesCard } from "./episodesCard";
import { useEffect, useRef, useState } from "react";
import { EpisodesResult } from "./episodesResult";
import { DataSource } from "./datasource";

export function EpisodesScrollView(){
    const[loading, setLoading] = useState(false);
    const[page, setPage] = useState<number>(1);
    const[data, setData] = useState<EpisodesResult>({
        info:{
            pages: 0,
            count: 0,
            next: null,
            prev: null,
        },
        results: [],
    });
    
    const flatListRef = useRef(null);

    const dataSource = new DataSource();

    const handleEndRached = () => {
        if(data.info.next && !loading){
            setPage(page + 1);
        }
    }

    useEffect(() => {
        setLoading(true);
        dataSource.getEpisodes(page)
        .then((result) => {
            setData((prevData) => ({
                results: [...prevData.results, ...result.results],
                info:result.info,
            }));
        })
        .catch((error) => {
            Alert.alert(`ERROR: ${error.message}`)
        })
        .finally(() => {
            setLoading(false);
        })
    }, [page])

    return(
        <View style={styles.main}>
            <View style={styles.box1}>
                <Text style={styles.text3}>Personajes: </Text>
                <Text style={styles.text3_3}>{data.info.count}</Text>
            </View>

            <FlatList
                ref={flatListRef}
                data={data.results}
                renderItem={(item) => (
                    <EpisodesCard episode={item.item}/>
                )}
                keyExtractor={(item => item.id.toString())}
                onEndReached={handleEndRached}
                onEndReachedThreshold={0.5}
                refreshing={loading}
                ListFooterComponent={loading? <ActivityIndicator size="large"/>: undefined}
            ></FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    main:{
        alignItems: 'center',
        backgroundColor: '#000000',
        marginBottom: 150,
        height: '100%',
        padding: 10,
        justifyContent: 'center',
        alignContent: 'center',
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
})