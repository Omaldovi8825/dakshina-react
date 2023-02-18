import { useEffect } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import { AccionCard } from '../components/AccionCard'
import { useAuth } from '../contexts/auth'

const Home = () => {

    const { user } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if(!user) navigate('/login')
    })
    
    if(!user) return null
    // console.log('us', user)

    return(
        <div className='container'>
            <div className="row">
            {user.rol.secciones.map( ({id, titulo, link, icon}) => (
                <NavLink to={link} key={id} className="col-12 col-sm-6 col-md-4 col-lg-3 py-2 text-decoration-none">
                    <AccionCard titulo={titulo} icon={icon} />
                </NavLink>
            ))}
            </div>
        </div>
    )
}

export { Home }