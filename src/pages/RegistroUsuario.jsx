import { useState } from "react"
import { FormContainer, InputContainer } from '../components/FormContainer'

const RegistroUsuario = () => {

    const estadoInicialForma = {
        nombre: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
    }

    const [ estadoForma, setEstadoForma ]  = useState(estadoInicialForma)

    const handleInputChange = ({target}) => {

        const { name, value } = target
        setEstadoForma({
            ...estadoForma,
            [name]: value
        })
    }

    const onSubmit = (ev) => {

        ev.preventDefault()
        console.log(estadoForma)
    }

    const inputsForma = [
        { type: "text", name: "nombre", label: "Nombre" },
        { type: "text", name: "apellidoPaterno", label: "Apellido paterno" },
        { type: "text", name: "apellidoMaterno", label: "Apellido materno" },
    ]

    return(
        <FormContainer
            textoBoton="Registrar"
            onSubmit={onSubmit}
        >
        {inputsForma.map( ( input ) => (
            <InputContainer
                key={`input_${input.name}`}
                onChange={handleInputChange}
                {...input}
            />
        ))}
        </FormContainer>
    )
}

export { RegistroUsuario }