import { useState } from "react"

const useForm = (estadoInicial) => {

    const [ estadoForma, setEstadoForma ] = useState(estadoInicial)

    const updateForma = (name, value) => {
        setEstadoForma({
            ...estadoForma,
            [name]: value
        })
    }

    const handleInputChange = ({target}) => {
        const { name, value } = target
        updateForma( name, value)
    }

    return [ estadoForma, handleInputChange ]
}

export { useForm }