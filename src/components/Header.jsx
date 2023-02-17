import { memo } from 'react'
import logo from '../assets/img/logo.jpeg'
import '../assets/styles/Header.css'

const Header = memo(({titulo}) => {

    return(
        <header className="container-fluid py-3 mb-5 header">
            <div className="row">
                <div className="col-12 col-md-3 text-center">
                    <img src={logo} alt="logo daxina" width="200" />
                </div>
                <div className="col-12 col-md-6">
                    <h1 className="text-center">{titulo}</h1>
                </div>
                <div className="col-12 col-md-3">
                </div>
            </div>
        </header>
    )
})

export {Header}