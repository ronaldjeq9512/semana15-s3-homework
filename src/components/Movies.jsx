/* eslint-disable react/prop-types */
import { Movie } from "./Movie"
import './Movies.css'
// eslint-disable-next-line react/prop-types
export const Movies = ({movies}) => {
    console.log({movies})
    return (
        <details>
            <summary className="moviesTitle">Películas</summary>
            <div className="moviesContainer">
                {movies.map((item)=> <Movie movie={item} key={item.identificador} />)}
            </div>
        </details>
    )
}