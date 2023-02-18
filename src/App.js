
import { HashRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/auth'

import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { RegistroUsuario } from './pages/RegistroUsuario'
import { SolicitudPresupuesto } from './pages/SolicitudPresupuesto'
import { RegistroAsimilados } from './pages/RegistroAsimilados'

import { MainHeader } from "./components/MainHeader"
import './assets/styles/main.css'

function App() {

  return (
    <HashRouter>
      < AuthProvider >
        <MainHeader />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/usuarios/registro" element={<RegistroUsuario/>} />
          <Route path="/solicitudes/presupuestos/registro" element={<SolicitudPresupuesto/>} />
          <Route path="/asimilados/registro" element={<RegistroAsimilados/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </ AuthProvider >
    </HashRouter>
  );
}

export default App;
