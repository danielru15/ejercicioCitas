import React, { Fragment, useState } from 'react';
import {v4 as uuidv4} from 'uuid'
import propTypes from 'prop-types'

const Formulario = ({crearCita}) => {
// crear state de citas
const [Cita, setCita] = useState({
  Dueño:'',
  Mascota:'',
  Fecha:'',
  Hora:'',
  Sintomas:''
})
const [error, setError] = useState(false)
// funcion que se ejecuta cada que el usuario escribe en un input
  const handleChange = (e) => {
    setCita({
      ...Cita,
      [e.target.name]: e.target.value
    })
  }
// extraer valores
  const {Dueño,Mascota,Fecha,Hora,Sintomas} = Cita

// cuando el usuario presiona agregar cita
  const enviarCita = (e) => {
    e.preventDefault()
    // validar
    if(Dueño.trim() === "" || Fecha.trim() === "" || Hora.trim() === "" || Sintomas.trim() === ""){
      setError(true)
      return
    }
    //eliminar error 
    setError(false)
    //asignar id
    Cita.id=uuidv4()
    // crear cita
    crearCita(Cita)
    // reiniciar form
    setCita({
      Dueño:'',
      Mascota:'',
      Fecha:'',
      Hora:'',
      Sintomas:''
    })
  }
    return ( 
      <Fragment>
        <h2>Crear cita</h2>
        {error ? <p className="alerta-error">Todos los campos son obligatorios</p> 
        : null}
        <form
         onSubmit={enviarCita}
        >
          <label>Dueño</label>
          <input 
          type="text"
          name="Dueño"
          className="u-full-width"
          placeholder="Nombre Dueño"
          onChange={handleChange}
          value={Dueño}
          />
          <label>Mascota</label>
          <input 
          type="text"
          name="Mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={handleChange}
          value={Mascota}
          />
          <label>Fecha</label>
          <input 
          type="date"
          name="Fecha"
          className="u-full-width"
          onChange={handleChange}
          value={Fecha}
          />
          <label>Hora</label>
          <input 
          type="time"
          name="Hora"
          className="u-full-width"
          onChange={handleChange}
          value={Hora}
          />  
          <label>sintomas</label>
          <textarea 
          className="u-full-width"
          name="Sintomas"
          onChange={handleChange}
          value={Sintomas}
          ></textarea>  
          <button
          type="submit"
          className="u-full-width button-primary"
          >agregar cita</button>    
        </form>
      </Fragment>
     );
}
 Formulario.propTypes = {
   crearCita:propTypes.func.isRequired
 }
export default Formulario;