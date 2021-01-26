import React, {Fragment, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import DropboxChooser from 'react-dropbox-chooser'
const APP_KEY="1u5ng1d1a2z8v3e"

const apiURLPosteador = 'https://servidorpainthub.herokuapp.com/api/usuario/usuarioPorNick/?nick=';

function NuevaPubli () {

let {usuarioLogeado} = useParams();

const [descripcion, setDescripcion]=useState('');
const [lat, setLat]=useState();
const [lon, setLon]=useState();
const [autorPost, setAutorPost]=useState(usuarioLogeado);
const [url, setUrl] = useState("");

const [usuarioPosteador, setUsuarioPosteador] = useState()

useEffect(() => {
  fetch(apiURLPosteador + usuarioLogeado)
    .then((response) => response.json())
    .then((data) => setUsuarioPosteador(data[0]['id']) ) //Meto en el array los datos parseados
  }, [])

function handleSuccess(files){
  setUrl(files[0].thumbnailLink)
}

function EnviarDatos(){
  //event.preventDefault();
  //console.log(url);
  fetch("https://servidorpainthub.herokuapp.com/api/publicacion/crear/", {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    autor: autorPost,
    lat: lat,
    lon: lon,
    descripcion: descripcion,
    imagen: url,
    usuarioPosteador: usuarioPosteador
  })
});
//console.log("FINpatata");
}

return (
  <form>
  <label>Descripcion
    <input type="text" onChange={event=>setDescripcion(event.target.value)}></input>
  </label><br/>
  <label>Latitud
    <input type="number" step="any" onChange={event=>setLat(event.target.value)}></input>
  </label><br/>
  <label>Longitud
    <input type="number" step="any" onChange={event=>setLon(event.target.value)}></input>
  </label><br/>

  <div className="container">
    <DropboxChooser appKey={APP_KEY}
                    success={handleSuccess}
                    cancel={() => console.log('closed')}
                    multiselect={true}
                    >
      <label>Upload or Choose Files</label>
      <div className="dropbox"></div>
      <br/><br/>
      <img src={url} width="200" height="200" alt=""/>
    </DropboxChooser>
  </div>
  <button onClick={EnviarDatos}>CrearPubli</button>
</form>
);
}

export default NuevaPubli;
