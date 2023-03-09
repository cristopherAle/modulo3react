import React, { useState } from 'react';
import Error from '../Error/Error';
import { getId } from '../../helpers/getId';

const Formulario = ({jugadores, setJugadores}) => {
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = (e)=>{ 
        e.preventDefault();
      
            if([name, email].includes("")){
                setError(true);
                return;
            }
            setError(false)

            const objetoJugador = {
                name,
                email,
                id: getId(),
            };
            //console.log(objetoJugador)
            setJugadores([...jugadores, objetoJugador])
        };
  return (
    <div>
         <h2>Ingreso de Jugadores</h2>
         <form onSubmit={handleSubmit}>
            {error && <Error message="Todos los datos son obligatorios" />} 
            <div className='mb-3'>
                <label htmlFor='name'>Nombre:</label>
                <input id="name" className='form-control w-50' type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            </div>
            <div className='mb-3'>
                <label htmlFor='email'>Email: </label>
                <input id="name" className='form-control w-50' type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div>
                <button className='btn btn-primary'>Agregar Jugador</button>
            </div>
         </form>
    </div>
  );
};

export default Formulario;
