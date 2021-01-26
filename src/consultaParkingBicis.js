import React, {useEffect, useState} from 'react';
import ParkingBicis from './parkingBicis'

const apiUrl = 'https://servidorpainthub.herokuapp.com/api/parkingBicis/'; //NO OLVIDAR LA ULTIMA "/", lista/!!

function ConsultaParkingBicis() {

  const [parkings, setParkings] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setParkings(data) ) //Meto en el array los datos parseados
    }, [])

  return <div>{parkings.map(pb=><ParkingBicis parking={pb}></ParkingBicis>)}</div>; //Carga texto con las publicaciones MIRAR
                                                                                                //hacer <Publicacion p> p seria un hook //pub es el de los props
}

export default ConsultaParkingBicis;