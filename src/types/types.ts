import { Movie } from '../interfaces/movie';

export type RootStackNavigator = {
    HomeScreen: undefined;
    DetailsScreen: { movie: Movie };
}
