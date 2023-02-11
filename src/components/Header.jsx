import logo from '../assets/img/logo.jpeg'
import '../assets/styles/Header.css'

const Header = () => {
    return(
        <header className="py-5 container-fluid header">
            <div className="row">
                <div className="col-12 col-md-4 text-center">
                    <img src={logo} alt="logo daxina" width="200" />
                </div>
                <div className="col-12 col-md-4">
                    <h1 className="text-center">Solicitud de presupestos</h1>
                </div>
                <div className="col-12 col-md-4">
                </div>
            </div>
        </header>
    )
}

export {Header}