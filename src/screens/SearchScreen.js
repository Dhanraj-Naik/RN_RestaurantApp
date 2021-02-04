import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = ({
    params,
}) => {
    const [term, setTerm] = useState('');
    const [searchAPI, results, errorMessage] = useResults();

    return (
        <View>
            <SearchBar
                term={term}
                // onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => searchAPI(term)}
                onTermChange={setTerm}
            />
            <Text>{results.length}</Text>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SearchScreen;
