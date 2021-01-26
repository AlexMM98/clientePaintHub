import React from 'react';

export default function Usuario(props) {
    
    return (
        <div>
            <h1>Nick: {props.usuario.nick}</h1>
            <ul>
                Nick: <input type="text" value={props.usuario.nick}/><br/>
                Correo: <input type="text" value={props.usuario.correo}/><br/>
                Contraseña: <input type="text" value={props.usuario.pwd}/><br/>
            </ul>
        </div>
    )
}
