import { useState } from "react"
import { HashRouter, Routes, Route } from 'react-router-dom'
// import { Form } from './components/Form'
import { Login } from './components/Login'
import { Home } from './components/Home'
import { NotFound } from './components/NotFound'
import { Form } from './components/FormTest'
import { Header } from './components/Header'
import { Modal } from './components/Modal'
import { Solicitudes } from './components/Solicitudes.jsx'
import './assets/styles/main.css'

function App() {

  const estadoInicialForma = {
    proveedor: '',
    clabe: '',
    banco: '',
    titular: '',
    rfc: '',
    email1: '',
    email2: '',
    tipoGasto: 1,
    descripcion: '',
    partida: 1,
    importe: '',
    comprobante: 1,
    archivo: null
  }

  const [estadoForma, setEstadoForma] = useState(estadoInicialForma)
  const [solicitudes, setSolicitudes] = useState([])
  const [showForm, setShowForm] = useState(true)
  const [modo, setModo] = useState('crear')

  const agregarSolcitiud = (nuevaSolicitud) => {

    setSolicitudes([...solicitudes, nuevaSolicitud])
    setEstadoForma(estadoInicialForma)
    setShowForm(false)

  }

  const borrarSolicitud = (id) => {
    const nuevaLista = solicitudes.filter( solic => solic.id !== id)
    setSolicitudes(nuevaLista)
  }

  const editarSolicitud = (id) => {
    setModo('modificar')
    const solicitudAeditar = solicitudes.find( sol => sol.id === id)
    setEstadoForma(solicitudAeditar)
    setShowForm(true)
  }

  const modificarSolicitud = () => {
    const elementosSinModificacion = solicitudes.filter( solic => solic.id !== estadoForma.id)
    setSolicitudes([...elementosSinModificacion, estadoForma])
    setEstadoForma(estadoInicialForma)
    setShowForm(false)
  }

  const onSumbit = (ev) => {
    // console.log(data)
    ev.preventDefault()
    modo === 'crear' 
        ? agregarSolcitiud({id: `${estadoForma.proveedor}_${estadoForma.clabe}` ,...estadoForma})
        : modificarSolicitud()
  }

  const determinarNombreArchivo = (archivo) => {
    if(!archivo){
      return { nombre: ''}
    }

    const {name, type} = archivo
    const [tipo, extension] = type.split('/')
    const nombreArchivo = name.length > 10 ? `${name.substring(0,10)}...${extension}` : name
    const icono = tipo === 'image' ? 'bi-file-image' : 'bi-filetype-pdf'
    
    return {
        nombre: nombreArchivo,
        icono
    }
  }

  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </HashRouter>
      {/* <Solicitudes
        lista={solicitudes}
        setShowForm={setShowForm}
        showForm={showForm}
        borrarSolicitud={borrarSolicitud}
        editarSolicitud={editarSolicitud}
        determinarNombreArchivo={determinarNombreArchivo}
      />
      <Form
        estadoForma={estadoForma}
        setEstadoForma={setEstadoForma}
        estadoInicialForma={estadoInicialForma}
        onSumbit={onSumbit}
        showForm={showForm}
        modo={modo}
        determinarNombreArchivo={determinarNombreArchivo}
      /> */}
    </>
  );
}

export default App;
