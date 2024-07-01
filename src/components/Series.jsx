/* eslint-disable react/prop-types */
import './Movies.css'
import { Serie } from './Serie'
// eslint-disable-next-line react/prop-types
export const Series = ({serie}) => {
    console.log({serie})
    return (
        <details>
            <summary className="moviesTitle">Series</summary>
            <div className="moviesContainer">
                {serie.map((item)=> <Serie serie={item} key={item.identificador} />)}
            </div>
        </details>
    )
}