/* eslint-disable react/prop-types */

import { Card } from "./Card"
import './Movie.css'
// eslint-disable-next-line react/prop-types
export const Movie = ({movie}) => {
    console.log({movie})
    return (
        <Card>
            <div className="movieContainer" data-hover-text={`${movie['descripción']}`}>
                    <h2 className="movieTitle">{movie['título']}</h2>
                    <p>Año: {movie['Año']}</p>
                    <p>Clasificación: {movie['clasificación']}</p>
                    <p>Género: {movie['género']}</p>
            </div>
        </Card>
    )
}