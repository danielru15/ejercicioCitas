import { Fragment, useState, useEffect } from "react";
import MostrarCita from "./components/Cita";
import Formulario from "./components/Formulario";


function App() {
  // Citas en localStorage 
  let citasIniciales = JSON.parse(localStorage.getItem('Citas'))
  if(!citasIniciales){
    citasIniciales=[]
  }
  // arreglo citas
  const [Citas, setCitas] = useState(citasIniciales)

  // use efect para realizar ciertas operaciones cuando el state cambia
  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem('Citas'))
    if(citasIniciales){
      localStorage.setItem('Citas',JSON.stringify(Citas))
    }else {
      localStorage.setItem('Citas',JSON.stringify([]))
    }
  }, [Citas])
  // citas actuales y agregue la nueva
  const crearCita = (Cita) => {
    setCitas([
      ...Citas,
      Cita
    ])
  }  
  // Eliminar cita
  const eliminarCita =(id) => {
    const NuevasCitas = Citas.filter(Cita => Cita.id !== id)
    setCitas(NuevasCitas)
  }
  // mensaje no hay citas
  const titulo = Citas.length === 0 ? 'no hay citas' :  'Administra tus citas'


  return (
    <Fragment>
       <h2>Administrador de pacientes</h2>
       <div className="container">
          <div className="row">
              <div className="one-half column">
                <Formulario
                  crearCita={crearCita}
                />
              </div>
              <div className="one-half column">
                <h2>{titulo}</h2>
                {Citas.map(Cita => (
                  <MostrarCita
                    key={Cita.id}
                    Cita={Cita}
                    eliminarCita={eliminarCita}
                  />
                ))}
              </div>
          </div>
       </div>
    </Fragment>
  );
}

export default App;
