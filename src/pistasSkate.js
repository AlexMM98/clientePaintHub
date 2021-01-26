import React from 'react';

export default function pistasSkate(props) {
    
    return (
        <div>
            <h1>Nombre: {props.pista.nombre_pista}</h1>
            <ul>
                <li>Latitud: {props.pista.lat}</li>
                <li>Longitud: {props.pista.lon}</li>
                <li>Ubicacion: {props.pista.ubicacion_pista}</li>
            </ul>
        </div>
    )
}