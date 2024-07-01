/* eslint-disable react/prop-types */

import { Card } from "./Card"
import './Serie.css'
// eslint-disable-next-line react/prop-types
export const Serie = ({serie}) => {
    console.log({serie})
    return (
        <Card>
            <div className="serieContainer" data-hover-text={`${serie['descripción']}`}>
                    <h2 className="serieTitle">{serie['título']}</h2>
                    <p>Año: {serie['Año']}</p>
                    <p>Capítulos: {serie['Capítulos']}</p>
                    <p>Clasificación: {serie['clasificación']}</p>
                    <p>Género: {serie['género']}</p>
            </div>
        </Card>
    )
}