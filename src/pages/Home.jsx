import { useEffect } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import { useAuth } from '../contexts/auth'

const Home = () => {

    const { user } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if(!user) navigate('/login')
    }, [])
    
    if(!user) return null
    // console.log('us', user)

    return(
        <div className='container'>
            <div className="row">
            {user.rol.secciones.map( ({id, titulo, link, icon}) => (
                <NavLink to={link} key={id} className="col-12 col-sm-6 col-md-4 col-lg-3 py-2 text-center">
                    <div className="border p-2">
                        <i className={`bi ${icon}`} style={{fontSize: '40px'}}></i>
                        <h6>{titulo}</h6>                    
                    </div>
                </NavLink>
            ))}
            </div>
        </div>
    )
}

export {Home}