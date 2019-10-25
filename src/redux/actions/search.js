import { SEARCH_MOVIE_START } from '../../const/actionTypes';

export const searchMovie = payload => ({
    type: SEARCH_MOVIE_START,
    payload
});