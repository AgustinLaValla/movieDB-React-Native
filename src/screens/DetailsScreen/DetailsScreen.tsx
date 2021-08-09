
import React from 'react'
import { Text, Pressable, Image, StyleSheet, Dimensions, View, ScrollView, ActivityIndicator, TouchableOpacity, ImageBackground } from 'react-native';
import { RootStackNavigator } from '../../types/types';
import { StackScreenProps } from '@react-navigation/stack';
import { Movie } from '../../interfaces/movie';
import { imageUrl } from '../../constants';
import { useMovieDetails } from '../../hooks/useMovieDetails';
import { MovieDetails } from '../../interfaces/MovieDetails';
import MovieDetailsComponent from '../../components/MovieDetails/MovieDetails';
import Icon from 'react-native-vector-icons/Ionicons';


const { height } = Dimensions.get('window')

interface DetailsScreenProps extends StackScreenProps<RootStackNavigator, 'DetailsScreen'> { }

export default function DetailsScreen({ route, navigation }: DetailsScreenProps) {
    const [movie, setMovie] = React.useState<Movie>();
    const uri = `${imageUrl}/w500/${movie?.poster_path}`;
    const { movieDetails, cast, isLoading } = useMovieDetails(movie?.id);


    React.useEffect(() => {
        setMovie(route.params.movie);
    }, [])

    return (
        <ScrollView style={{ flex: 1, position: 'relative' }}>
            <View style={styles.imageWrapper}>
                <ImageBackground
                    source={{ uri }}
                    style={{flex: 1}}
                    imageStyle={styles.image}
                >
                    <TouchableOpacity onPress={() => navigation.pop()} activeOpacity={0.6}>
                        <Icon
                            size={40}
                            color="#ffffff"
                            name="arrow-back"
                            style={{marginTop: 10, marginLeft: 5}}
                        />
                    </TouchableOpacity>
                </ImageBackground>

            </View>

            <View style={styles.marginWrapper}>
                <Text style={styles.subTitle}>{movie?.original_title}</Text>
                <Text style={styles.title}>{movie?.title}</Text>
            </View>


            {
                isLoading
                    ? <ActivityIndicator size={35} color="grey" style={{ marginTop: 20 }} />
                    : <MovieDetailsComponent movieDetails={movieDetails as MovieDetails} cast={cast} />
            }
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    imageWrapper: {
        height: height * 0.7,
        width: '100%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,

        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    backIcons: {
        position: 'absolute',
        top: 300,
        zIndex: 5
        // left: 10
    },
    image: {
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    subTitle: {
        fontSize: 18,
        opacity: 0.6
    },

    marginWrapper: {
        marginHorizontal: 20, marginTop: 20
    }
});