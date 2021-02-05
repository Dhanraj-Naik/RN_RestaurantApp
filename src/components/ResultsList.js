import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ResultsDetail from './ResultsDetail';

const renderRestaurentItem = ({ item, index }) => {
    return (
        <View style={{ padding: 20 }}>
            <Text>{item.name}</Text>
        </View>
    );
};

const ResultsList = ({
    title,
    results,
    // onItemPress,
    // navigation,
}) => {

    const navigation = useNavigation();

    if (results.length === 0) return null;

    return (
        <View style={styles.containerStyle}>
            <Text style={styles.titleStyle}>{title}</Text>
            {/* <Text style={styles.titleStyle}>{results.length}</Text> */}

            <FlatList
                data={results}
                horizontal
                // renderItem={renderRestaurentItem}
                // renderItem={ResultsDetail}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('resultsShowScreen', { id: item.id })}>
                            <ResultsDetail
                                item={item}
                                // onItemPress={() => onItemPress(item)}
                                navigation={navigation}
                            />
                        </TouchableOpacity>
                    );
                }}
                keyExtractor={item => `${item.id}`}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        // 
    },
    titleStyle: {
        marginLeft: 15,
        marginBottom: 8,
        fontSize: 18,
        fontWeight: '800',
    },
});

export default ResultsList;
