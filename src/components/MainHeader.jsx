import { memo } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/auth'
import logo from '../assets/img/logo.jpeg'

const MainHeader = memo(() => {

    const { user, logOut } = useAuth()

    if(!user){
        return(
            <header className="p-3 mb-5 colorHeader">
                <img src={logo} width="150" alt="logo dakshina" />
            </header>
        )
    }

    return(
        <header className="container-fluid py-3 mb-5 colorHeader">
            <div className="row">
                <div className="col-6 d-flex align-items-center">
                    <img src={logo} width="150" alt="logo dakshina" />
                    <Link to="/">
                        <i className="bi bi-house-check text-white mx-3" style={{fontSize: '35px'}}></i>
                    </Link>
                </div>
                <div className="col-6 justify-content-end d-flex align-items-center">
                    <button
                        type="button"
                        style={{border: 'none', background:'none', color: 'white'}}
                        onClick={logOut}
                    >
                        Log Out
                    </button>
                    <span className="ms-2 color3">{user.nombre} {user.apellidos}</span>
                </div>
            </div>
        </header>
    )
})

export { MainHeader }