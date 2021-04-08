import React from 'react';

const MostrarCita = ({Cita,eliminarCita}) => {
    return (
        <div className="cita">
            <p>Dueño: <span>{Cita.Dueño}</span></p>
            <p>Mascota: <span>{Cita.Mascota}</span></p>
            <p>Fecha: <span>{Cita.Fecha}</span></p>
            <p>Hora: <span>{Cita.Hora}</span></p>
            <p>Sintomas: <span>{Cita.Sintomas}</span></p>
            <button
              className="button eliminar u-full-width"
              onClick={() => eliminarCita(Cita.id)}
            >Eliminar</button>
        </div>
    )
}

export default MostrarCita
