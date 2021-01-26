import React, {useEffect, useState} from 'react';
import Publicacion from './publicacion';

const apiUrl = 'https://servidorpainthub.herokuapp.com/api/publicacion/lista/'; //NO OLVIDAR LA ULTIMA "/", lista/!!

function Home() {

  const [publicacion, setPublicacion] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setPublicacion(data) ) //Meto en el array los datos parseados
    }, [])
    
  return <div>{publicacion.map(p=><Publicacion pub={p}></Publicacion>)}</div>; //Carga texto con las publicaciones MIRAR
                                                                                                //hacer <Publicacion p> p seria un hook //pub es el de los props
}

export default Home;