import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text, Image } from 'react-native'
import { imageUrl } from '../../constants'
import { Cast } from '../../interfaces/credits'

type CastItemProps = {
    cast: Cast,
    index: number
}

const noImage = 'https://www.eduprizeschools.net/wp-content/uploads/2016/06/No_Image_Available.jpg'

export default function CastItem({ cast, index }: CastItemProps) {
    return (
        <View style={[styles.container, { marginLeft: index !== 0 ? 10 : 0 }]}>
            <Image
                source={{ uri: cast.profile_path ? `${imageUrl}/w200/${cast.profile_path}` : noImage }}
                style={styles.image}
            />
            <View style={styles.textWrapper}>
                <Text style={styles.name}>
                    {cast.name}
                </Text>
                <Text style={styles.character}>
                    {cast.character}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
        backgroundColor: 'white',
        paddingRight: 10,
        borderRadius: 5
    },

    image: {
        width: 75,
        height: 75,
        resizeMode: 'cover',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },

    textWrapper: {
        marginLeft: 10
    },

    name: {
        fontWeight: 'bold',
        fontSize: 14,
        color: 'black'
    },

    character: {
        fontSize: 12,
        color: 'grey'
    }
});
