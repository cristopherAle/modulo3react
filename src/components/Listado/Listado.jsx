import React from 'react'
import ListadoRow from './ListadoRow'


const Listado = ({jugadores, palabra}) => {
  let results = [];
  if (!palabra) {
    results = jugadores;
  } else {
    results = jugadores.filter(
      (user) =>
        user.name.toLowerCase().includes(palabra.toLowerCase()) ||
        user.email.toLowerCase().includes(palabra.toLowerCase())
    );}

  return (
    <div>
      <h2>Jugadores Torneo</h2>
      <table className='table table-striped table-hover mt-5 shadow-lg'>
            <thead className='bg-primary text-white'>
                <tr>
                    <td>Nombre</td>
                    <td>Email</td>
                </tr>
            </thead>
            <tbody>
              {results.length > 0 ? (

                  results.map(user => <ListadoRow key={user.id} user={user} />)
                
                ) : (
              <tr>
                <td>No hay resultados</td>
              </tr>
            )}
           
            </tbody>
        </table>
    </div>
  )
}

export default Listado
