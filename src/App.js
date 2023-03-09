import { useState } from 'react';
import './App.css';
import Listado from "./components/Listado/Listado";
import Formulario from './components/Formulario/Formulario';
import Buscador from './components/Buscador/Buscador';

import { dbJugadores } from "./db";

function App() {
const [jugadores, setJugadores] = useState(dbJugadores)
const [palabra, setPalabra] = useState('')

  return (
    <div className='container '>

       <Buscador jugadores={jugadores} setJugadores={setJugadores} palabra={palabra} setPalabra={setPalabra}/>
  
       <hr />
       <Formulario jugadores={jugadores} setJugadores={setJugadores} />
        <hr />
        <Listado jugadores={jugadores} palabra={palabra} />
        <hr/>
    
    </div>
  );
}

export default App;
