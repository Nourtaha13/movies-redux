import {ALLMOVIES} from '../type'


const initalValu = {movies: [], pageCount: 0}

export const reducerAllMovies = (state= initalValu , action ) =>{
    switch (action.type) {
        case ALLMOVIES:
            return { movies: action.data, pageCount: action.pages }
        default:
            return state
    }
}