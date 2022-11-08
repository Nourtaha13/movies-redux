import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Row, Card, Col } from "react-bootstrap";
import CardMovie from "./CardMovie";
import PaginationComponent from "./Pagination"
import { getAllMovie } from "../redux/action";

const MoviesList = _ => {

    const [movies, setMovies] = useState([])
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getAllMovie())
    },[])
    const data = useSelector(state => state.movies)

    useEffect(() => {
        setMovies(data)
    }, [data])

    return (
        <Row className="mt-3">
            {
                movies.length >= 1? (
                    movies.map(mov => {
                        return (<CardMovie key={mov.id} mov={mov}/>)
                    })
                ): <h1 className="text-center p-5"> لا يوجد افلام ...</h1>
            }
            {
                movies.length >= 1? 
                <PaginationComponent/> : null
            }
        </Row>
    );
};

export default MoviesList;