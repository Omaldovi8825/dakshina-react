import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usuarios } from '../assets/utils/usuarios'

const AuthContext = createContext()

const AuthProvider = ({children}) => {

    // const [user, setUser] = useState(null)
    const [user, setUser] = useState(usuarios[0])
    const [error, setError] = useState(false)
    const navigate = useNavigate()

    const login = ({ email, password }) => {

        const usuarioEncontrado = usuarios.find( us => us.email === email && us.password === password )

        if(!usuarioEncontrado){
            setError(true)
        } else {
            setUser(usuarioEncontrado)
            setError(false)
            navigate('/')
        }
    }

    const logOut = () => {
        setUser(null)
        navigate('/login')
    }

    const auth = { user, login, logOut, error }

    return(
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => {
    const auth = useContext(AuthContext)
    return auth
}

export { AuthProvider, useAuth }