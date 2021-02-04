import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = ({
    params,
}) => {
    const [term, setTerm] = useState('');
    console.log('searchScreen: ', term);

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => {
                    console.log('onEndEditing');
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SearchScreen;
