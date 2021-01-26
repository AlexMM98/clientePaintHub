import React from 'react';

export default function Publicacion(props) {


    return (
        <div>
            <ul>
                <li>Autor: {props.pub.autor}</li>
                <li>Descripcion: {props.pub.descripcion}</li>
                <li>Fecha: {props.pub.fecha}</li>
                <li>Imagen: <br/>
                <img src={props.pub.imagen}/>
                </li>
            </ul>
        </div>
    )
}
//Lo primero es crear esta clase, sirve para darle formato a los elementos del json, debe incluir todos los campos que queramos mostrar de la clase
//tantos x.js como entidades de la bd vayamos a mostrar.
