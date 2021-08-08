
import React from 'react'
import { Text, Pressable, Image, StyleSheet, Dimensions, View, ScrollView } from 'react-native';
import { RootStackNavigator } from '../../types/types';
import { StackScreenProps } from '@react-navigation/stack';
import { Movie } from '../../interfaces/movie';
import { SafeAreaView } from 'react-native-safe-area-context';
import { imageUrl } from '../../constants';
import Icon from 'react-native-vector-icons/Ionicons';


const { height } = Dimensions.get('window')

interface DetailsScreenProps extends StackScreenProps<RootStackNavigator, 'DetailsScreen'> { }

export default function DetailsScreen({ route, navigation }: DetailsScreenProps) {
    const [movie, setMovie] = React.useState<Movie>();
    const uri = `${imageUrl}${movie?.poster_path}`;

    
    React.useEffect(() => {
        setMovie(route.params.movie);
        console.log(route.params.movie.id)
    }, [])

    return (
        <ScrollView style={{ flex: 1 }}>
            <Pressable onPress={() => navigation.goBack()} style={styles.imageWrapper}>
                <Image
                    source={{ uri }}
                    style={styles.image}
                />

            </Pressable>

            <View style={styles.marginWrapper}>
                <Text style={styles.subTitle}>{movie?.original_title}</Text>
                <Text style={styles.title}>{movie?.title}</Text>
            </View>

            <View style={styles.marginWrapper}>
                <Icon
                    name="star-outline"
                    color="grey"
                    size={20}
                />
            </View>
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
        borderBottomRightRadius: 50
    },
    image: {
        flex: 1,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50
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