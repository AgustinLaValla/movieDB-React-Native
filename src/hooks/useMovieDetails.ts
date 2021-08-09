import React from 'react';
import { Cast, Credits } from '../interfaces/credits';
import movieDB from '../api/movieDB';
import { MovieDetails } from '../interfaces/MovieDetails';


interface MovieData {
    isLoading: boolean,
    movieDetails: MovieDetails | null | undefined, 
    cast: Cast[]
}

const initialState: MovieData = {
    isLoading: false,
    movieDetails: null,
    cast: []
}

export const useMovieDetails = (movieId: number | undefined) => {
    const [movieData, setMovieData] = React.useState<MovieData>(initialState);
    
    const getMovieData = async () => {
        const getMovieDetails = movieDB.get<MovieDetails>(`/${movieId}`);
        const getCredits = movieDB.get<Credits>(`/${movieId}/credits`);

        try {
            setMovieData(prev => ({...prev, isLoading: true}));
            const [movieDetailsResponse, creditsResponse] = await Promise.all([getMovieDetails, getCredits]);
            
            setMovieData({
                isLoading: false,
                movieDetails: movieDetailsResponse.data,
                cast: creditsResponse.data.cast
            })    
        } catch (error) {
            console.log(error);
        }
    }

    React.useEffect(() => {
        if(movieId) {
            getMovieData();
        }
    }, [movieId])

    return {...movieData}
}