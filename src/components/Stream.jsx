/* eslint-disable react/prop-types */
import { Movies } from "./Movies"
import { Series } from "./Series"
import './Stream.css'
// eslint-disable-next-line react/prop-types
export const Stream = ({name, info}) => {
    console.log(info.serie)
    return (
        <section>
            <h2 className="streamTitle">{name}</h2>
            <Movies movies={info['películas']} />
            <Series serie={info.serie} />
        </section>
    )
}