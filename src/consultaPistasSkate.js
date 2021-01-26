import React, {useEffect, useState} from 'react';
import PistasSkate from './pistasSkate'

const apiUrl = 'https://servidorpainthub.herokuapp.com/api/pistasSkate/'; //NO OLVIDAR LA ULTIMA "/", lista/!!

function ConsultaPistasSkate() {

  const [pistas, setPistas] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setPistas(data) ) //Meto en el array los datos parseados
    }, [])

  return <div>{pistas.map(ps=><PistasSkate pista={ps}></PistasSkate>)}</div>; //Carga texto con las publicaciones MIRAR
                                                                                                //hacer <Publicacion p> p seria un hook //pub es el de los props
}

export default ConsultaPistasSkate;