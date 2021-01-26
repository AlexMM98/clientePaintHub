import React from 'react';

export default function parkingBicis(props) {
    
    return (
        <div>
            <h1> Informacion: {props.parking.ubicacion_plazas.split('</b>')[1].split('<br /> <b>')[0] + ' // ' +
                props.parking.ubicacion_plazas.split('</b>')[1].split('<br /> <b>')[1]
                 + props.parking.ubicacion_plazas.split('</b>')[2].split('<br/> <b>')[0] + ' // ' 
                 + props.parking.ubicacion_plazas.split('</b>')[2].split('<br/> <b>')[1] +
                props.parking.ubicacion_plazas.split('</b>')[3]}</h1>
            <ul>
                <li>Latitud: {props.parking.lat}</li>
                <li>Longitud: {props.parking.lon}</li>
            </ul>
        </div>
    )
}