import React, { useEffect, useState } from 'react';
import { TextInput } from 'react-native';
import './App.css';
import Map from "./Map";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Layers, TileLayer } from "./Layers";
import { osm } from "./Source";
import { fromLonLat } from 'ol/proj';
import Home from './home';
import PerfilUsuario from './perfilUsuario';
import consultaParkingBicis from './consultaParkingBicis';
import consultaPistasSkate from './consultaPistasSkate';
import NuevaPubli from './NuevaPubli';
import GoogleLogin from 'react-google-login';
import GoogleLogout from 'react-google-login';
import { TwitterShareButton } from 'react-twitter-embed';


function App() {

  const [nickBuscado, setNickBuscado] = useState('');

  const [usuarioLogeado, setUsuarioLogeado] = useState()


  const responseGoogle = (response) => {

    setUsuarioLogeado(response.profileObj.email)

    fetch('https://servidorpainthub.herokuapp.com/api/usuario/crear/', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              nick: response.profileObj.email,
              correo: response.profileObj.email,
              pwd: response.profileObj.email
            })
    });

}

  const logout = () => {
    const gapi = window.gapi;
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function(){
      console.log('logout')
      setUsuarioLogeado('')
    });
  }

  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/home'} className="nav-link"> Home </Link></li>
            <li><Link to={'/perfil/' + usuarioLogeado} className="nav-link"> Ver perfil </Link></li>
            <li>
              <TextInput
                placeholder="¡Busca un perfil!"
                onChangeText={text => setNickBuscado(text)}
                defaultValue={nickBuscado}
              />
              <Link to={'/perfil/' + nickBuscado}><button>Buscar</button></Link>
            </li>
            <li><Link to={'/verParkingBicis'} className="nav-link"> Ver parkings de bicis </Link></li>
            <li><Link to={'/verPistasSkate'} className="nav-link"> Ver pistas de skate </Link></li>
            <li><Link to={'/nuevaPubli/'+usuarioLogeado} className="nav-link"> Crear nueva Publicacion </Link></li>
        </ul>
        </nav>

        <hr />
        <div className="App" >
          <GoogleLogin
            clientId="1032281966573-ibe47a358hgjtusfn0dp8sdo6b9nnrha.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </div>

        <br />
        <div className="App" >
          <GoogleLogout
            buttonText="Logout"
            clientId="1032281966573-ibe47a358hgjtusfn0dp8sdo6b9nnrha.apps.googleusercontent.com"
            onSuccess={logout}
            onFailure={logout}
          >
          </GoogleLogout>
        </div>

        <br />
        <div className="selfCenter" align="center">
          <TwitterShareButton url="https://servidorpainthub.herokuapp.com/api/publicacion/lista/" options={{
            text: '#PaintHub #ReactJs Unete a PaintHub!',
            size: 'large',
          }} />
        </div>

        <h1>Bienvenido {usuarioLogeado}</h1>

        <Switch>
          <Route exact path='/home' component={Home} />
          <Route exact path='/perfil/:prueba' component={PerfilUsuario} />
          <Route exact path='/verParkingBicis' component={consultaParkingBicis} />
          <Route exact path='/verPistasSkate' component={consultaPistasSkate} />
          <Route exact path='/nuevaPubli/:usuarioLogeado' component={NuevaPubli} />
        </Switch>
      </div>
      <div>
        <Map center={fromLonLat([-4.42034, 36.72016])} zoom={15}>
          <Layers>
            <TileLayer
              source={osm()}
              zIndex={0}
            />
          </Layers>
        </Map>
      </div>
    </Router>
  )
}

export default App;
