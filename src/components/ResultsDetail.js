import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ResultsDetail = ({
    item,
    onItemPress,
}) => {

    const { name, image_url, rating, review_count } = item;
    return (
        <View
            style={styles.containerStyle}
            // onPress={onItemPress}
        >
            <Image
                source={{ uri: image_url }}
                style={styles.imageStyle}
            />
            <Text style={styles.nameStyle}>{name}</Text>
            <Text style={styles.reviewStyle}>{rating} Stars, {review_count} Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        marginLeft: 15,
        marginBottom: 20,
    },
    imageStyle: {
        width: 250,
        height: 200,
        borderRadius: 4,
        marginBottom: 8,
    },
    nameStyle: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    reviewStyle: {
        // fontWeight: 'bold',
        fontSize: 14,
    },
    subTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});

export default ResultsDetail;
