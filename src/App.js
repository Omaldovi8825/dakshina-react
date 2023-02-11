import { useState } from "react"
import { Form } from './components/Form'
import { Header } from './components/Header'
import { Modal } from './components/Modal'
import { Solicitudes } from './components/Solicitudes.jsx'
import './assets/styles/main.css'

function App() {

  const [solicitudes, setSolicitudes] = useState([])
  const [showForm, setShowForm] = useState(true)

  const agregarSolcitiud = (nuevaSolicitud) => {

    setSolicitudes([...solicitudes, nuevaSolicitud])
    setShowForm(false)

  }

  return (
    <>
      <Header />
      {solicitudes.length > 0 &&
      <Solicitudes lista={solicitudes} setShowForm={setShowForm} />
      }
      {showForm &&
      <Form agregarSolcitiud={agregarSolcitiud} />
      }
    </>
  );
}

export default App;
