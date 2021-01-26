import React, {useEffect, useState} from 'react';

import { useParams } from 'react-router-dom';
import Publicacion from './publicacion';
import Usuario from './usuario';

const apiUrlUsuario = 'https://servidorpainthub.herokuapp.com/api/usuario/usuarioPorNick/?nick='; //NO OLVIDAR LA ULTIMA "/", lista/!!
const apiUrlPublicaciones = 'https://servidorpainthub.herokuapp.com/api/publicacion/buscarPublicacionPorNickPosteador/?nick=';


function PerfilUsuario (){

  const [usuario, setUsuario] = useState([]);
  const [publicaciones, setPublicaciones] = useState([]);
    
  let {prueba} = useParams();

  useEffect(() => {
    fetch(apiUrlUsuario + prueba)
      .then((response) => response.json())
      .then((data) => setUsuario(data) ) //Meto en el array los datos parseados
    }, [])

  useEffect(() => {
    fetch(apiUrlPublicaciones + prueba)
      .then((response) => response.json())
      .then((data) => setPublicaciones(data) ) //Meto en el array los datos parseados
    }, [])



  return <div>{usuario.map(u=><Usuario usuario={u}></Usuario>)}
              <h1>Publicaciones</h1>
              {console.log(publicaciones.length)}
              {publicaciones.map(pub=><Publicacion pub={pub}></Publicacion>)}
         </div>; //Carga texto con las publicaciones MIRAR
                                                                                                //hacer <Publicacion p> p seria un hook //pub es el de los props
}

export default PerfilUsuario;