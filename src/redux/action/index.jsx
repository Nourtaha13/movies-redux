import { ALLMOVIES, MovieApi } from "../type";
import axios from "axios"
const APIKey = "aaad33cf7ec5affe1bad17260048f348"


export const getAllMovie =  _ =>{
    return async dispatch => {
        const res = await axios.get(MovieApi)
        dispatch({ type: ALLMOVIES , data: [...res.data.results], pages: res.data.total_pages })
    }
}
export const MovieSearch =  (word) =>{
    return async dispatch => {
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&language=ar&query=${word}`)
        dispatch({ type: ALLMOVIES , data: [...res.data.results], pages: res.data.total_pages })
    }
}

export const getPage =  page =>{
    return async dispatch => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=ar&page=${page}`)
        dispatch({ type: ALLMOVIES , data: [...res.data.results], pages: res.data.total_pages })
    }
}