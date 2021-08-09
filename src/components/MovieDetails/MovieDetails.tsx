import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { Cast } from '../../interfaces/credits'
import { MovieDetails } from '../../interfaces/MovieDetails'
import Icon from 'react-native-vector-icons/Ionicons'
import * as currencyFormatter from 'currency-formatter'
import CastItem from '../CastItem/CastItem'

type MovieDetailsComponentProps = {
    movieDetails: MovieDetails,
    cast: Cast[]
}

export default function MovieDetailsComponent({ movieDetails, cast }: MovieDetailsComponentProps) {
    return (
        <>
            <View style={{ marginHorizontal: 20, paddingBottom: 15 }}>
                {/* Details */}
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="star-outline" color="grey" size={16} />
                    <Text style={{ marginLeft: 5 }}>{movieDetails?.vote_average}</Text>
                    <Text style={{ marginLeft: 5 }}>
                        - {movieDetails?.genres.map(genre => genre.name).join(', ')}
                    </Text>
                </View>

                {/* Story */}
                <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold' }}>
                    Story
                </Text>

                <Text style={{ fontSize: 16 }}>
                    {movieDetails?.overview}
                </Text>

                {/* Budget */}
                <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold' }}>
                    Budget
                </Text>

                <Text style={{ fontSize: 18 }}>
                    {
                        movieDetails &&
                        currencyFormatter.format(movieDetails.budget, { code: 'USD' })
                    }
                </Text>


            </View>
            {/* Budget */}
            <View style={{ marginTop: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>
                    Budget
                </Text>
                <FlatList
                    data={cast}
                    keyExtractor={item => item.id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => <CastItem cast={item} index={index} />}
                    contentContainerStyle={{ paddingTop: 10, paddingBottom: 15, paddingLeft: 10 }}
                />

            </View>
        </>
    )
}
