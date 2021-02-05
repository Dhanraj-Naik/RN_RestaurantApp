import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({
    navigation,
    route,
}) => {

    const [result, setResult] = useState(null);

    const { id } = route.params;
    console.log('getResults: ', id);

    const getResults = async () => {
        const response = await yelp(`/${id}`);
        console.log('getResults: ', response.data);
        setResult(response.data);
    };


    useEffect(() => {
        getResults(id);
    }, []);

    if (!result) {
        return null;
    }

    const results = result.photos;

    return (
        <>
            <Text>{result.name}</Text>
            <ScrollView>
                {results.map(item => {
                    return <Image
                        style={styles.imageStyle}
                        source={{ uri: item }}
                    />;
                })}
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
    },
    imageStyle: {
        width: 300,
        height: 250,
        marginBottom: 8,
        alignSelf: 'center'
    },
});

export default ResultsShowScreen;
