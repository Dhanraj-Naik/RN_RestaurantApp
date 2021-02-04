import React from 'react';
import { Text, View, Image, TextInput, StyleSheet } from 'react-native';

const SearchBar = ({
    params,
}) => {
    return (
        <View style={styles.containerStyle}>
            <Image
                style={styles.searchImageStyle}
                source={require('../../assets/icons/search/search.png')}
            />
            <TextInput
                placeholder={'Search'}
                placeholderTextColor={'#393b44'}
                style={styles.textInputStyle}
                underlineColorAndroid={'transparent'}
                autoCapitalize={'none'}
                autoCorrect={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'row',
        backgroundColor: '#E0E0E0',
        borderRadius: 8,
        marginHorizontal: 10,
        marginVertical: 10,
        paddingVertical: 4,
        paddingHorizontal: 12,
    },
    searchImageStyle: {
        width: 28,
        height: 28,
        alignSelf: 'center',
    },
    textInputStyle: {
        height: 40,
        paddingHorizontal: 8,
        paddingVertical: 4,
        color: '#212121',
        // borderWidth: 1,
        flex: 1,
    },
});

export default SearchBar;
