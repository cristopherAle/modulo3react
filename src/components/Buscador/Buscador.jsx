import React, { } from "react";

const Buscador = ({palabra, setPalabra }) => {
  


  return (
    <div className="mb-5">

        <h2>Busqueda de Colaboradores</h2>
        <input
         className="form-control w-50" type="text"  placeholder="Ingrese jugador a buscar"
                    value={palabra} onChange={(e) => setPalabra(e.target.value)}/>
          <br />

    </div>
  );
};

export default Buscador;