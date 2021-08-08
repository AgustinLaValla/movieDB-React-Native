import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack';
import { View, ActivityIndicator, useWindowDimensions, ScrollView } from 'react-native'
import { RootStackNavigator } from '../../types/types';
import Poster from '../../components/Poster/Poster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import MovieList from '../../components/MovieList/MovieList';
import { useGetMovies } from '../../hooks/useGetMovies';

type HomeScreenNavigationProp = StackNavigationProp<RootStackNavigator, 'HomeScreen'>;

type HomeScreenProps = {
    navigation: HomeScreenNavigationProp
}

export default function HomeScreen({ navigation }: HomeScreenProps) {

    const { playingNow, popular, topRated, upcoming, isLoading } = useGetMovies();

    const { top } = useSafeAreaInsets();
    const window = useWindowDimensions();

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator color="red" size={100} />
            </View>
        )
    }

    return (
        <ScrollView style={{ marginTop: top + 20 }} showsVerticalScrollIndicator={false}>
            <View style={{ height: 440 }}>
                <Carousel
                    data={playingNow}
                    renderItem={({ item }) => <Poster movie={item} navigation={navigation} />}
                    sliderWidth={window.width}
                    itemWidth={300}
                />
            </View>

            <MovieList movies={playingNow} title="Playing Now" navigation={navigation} />
            <MovieList movies={topRated} title="Top Rated" navigation={navigation} />
            <MovieList movies={popular} title="Popular" navigation={navigation} />
            <MovieList movies={upcoming} title="Upcoming" navigation={navigation} />
        </ScrollView>
    )
}
