import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { imageUrl, url } from '../../constants';
import { Movie } from '../../interfaces/movie';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackNavigator } from '../../types/types';

type HomeScreenNavigationProp = StackNavigationProp<RootStackNavigator, 'HomeScreen'>;

type PosterProps = {
    movie: Movie,
    height?: number,
    width?: number
    navigation: HomeScreenNavigationProp
}

export default function Poster({ movie, navigation, height = 420, width = 300 }: PosterProps) {
    const uri = `${imageUrl}/w500/${movie?.poster_path}`;
    return (
        <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen', { movie })} activeOpacity={0.6}>
            <View style={{ width, height }}>
                <View style={styles.container}>
                    <Image
                        source={{ uri }}
                        style={styles.imageStyles}
                    />

                </View>
            </View>
        </TouchableOpacity>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,

        borderRadius: 18,
    },
    imageStyles: {
        flex: 1,
        borderRadius: 18,
    }
});