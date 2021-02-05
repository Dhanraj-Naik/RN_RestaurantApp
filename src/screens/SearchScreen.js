import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import ResultsList from '../components/ResultsList';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = ({
    navigation,
    route,
}) => {
    const [term, setTerm] = useState('');
    const [searchAPI, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => { //$ || $$ || $$$ || $$$$
        // const filteredResults = results.filter(result => result.price === price);
        // return filteredResults;

        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        // <View style={styles.containerstyle}> //or
        <>
            <SearchBar
                term={term}
                // onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => searchAPI(term)}
                onTermChange={setTerm}
            />
            {/* <Text>We have found {results.length} results</Text> */}
            {errorMessage ? <Text>{errorMessage}</Text> : null}

            <ScrollView>
                <ResultsList
                    title={'Cost Effective'}
                    results={filterResultsByPrice('$')}
                    // onItemPress={(res) => {
                    //     console.log('ResultsList:', res);
                    //     navigation.navigate('resultsShowScreen', { id: res.id });
                    // }}
                    // navigation={navigation}
                />
                <ResultsList
                    title={'Bit Pricer'}
                    results={filterResultsByPrice('$$')}
                    // navigation={navigation}
                />
                <ResultsList
                    title={'Big Splendid!'}
                    results={filterResultsByPrice('$$$$')}
                    // navigation={navigation}
                />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    containerstyle: {
        flex: 1,
    },
});

export default SearchScreen;
