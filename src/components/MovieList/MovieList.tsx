import React from 'react'
import { View, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { Movie } from '../../interfaces/movie';
import Poster from '../Poster/Poster';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackNavigator } from '../../types/types';

type HomeScreenNavigationProp = StackNavigationProp<RootStackNavigator, 'HomeScreen'>;

type MovieListProps = {
    title?: string;
    movies: Movie[];
    navigation: HomeScreenNavigationProp;
}

export default function MovieList({ movies, title, navigation }: MovieListProps) {
    return (

        <View>
            {/* Popular Movies */}
            <View style={{ padding: 10, minHeight: 250 }}>
                {
                    title &&
                    <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 8 }}>
                        {title}
                    </Text>
                }
                <FlatList
                    style={{ marginTop: 20 }}
                    data={movies}
                    renderItem={({ item }) => (
                        <View style={{ paddingHorizontal: 8 }}>
                            <Poster movie={item} height={220} width={150} navigation={navigation}/>
                        </View>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToAlignment={'center'}
                    snapToInterval={160}
                    decelerationRate={0.75}
                />
            </View>
        </View>
    )
}
