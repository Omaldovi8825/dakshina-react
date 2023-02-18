
import { useForm } from '../hooks/UseForm'
import { FormContainer, InputContainer } from '../components/FormContainer'
import { Heading } from "../components/Heading"

const RegistroUsuario = () => {

    const estadoInicialForma = {
        nombre: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
    }

    const [ estadoForma, handleInputChange ] = useForm(estadoInicialForma)

    const onSubmit = () => {
        console.log(estadoForma)
    }

    const inputsForma = [
        {
            type: "text",
            name: "nombre",
            label: "Nombre"
        },
        { 
            type: "text", 
            name: "apellidoPaterno",
            label: "Apellido paterno"
        },
        { 
            type: "text",
            name: "apellidoMaterno",
            label: "Apellido materno"
        },
    ]

    return(
        <>
        <Heading titulo="Registrar nuevo usuario" />
        <FormContainer
            textoBoton="Registrar"
            onSubmit={onSubmit}
        >
        {inputsForma.map( ( input ) => (
            <InputContainer
                key={`input_${input.name}`}
                onChange={handleInputChange}
                clase="col-md-6 col-lg-4"
                {...input}
            />
        ))}
        </FormContainer>
        </>
    )
}

export { RegistroUsuario }