import { useForm } from '../hooks/UseForm'
import { FormContainer, InputContainer } from '../components/FormContainer'

const RegistroAsimilados = () => {

    const estadoInicialForma = {
        coparte: '',
        colaborador: '',
        rfc: '',
        curp: '',
        domicilio: '',
        servicio: '',
        descripcion: '',
        salario: '',
        retencion: '',
        retencion: '',
        retencion: '',
        retencion: '',
        retencion: '',
    }

    const [ estadoForma, handleInputChange ] = useForm(estadoInicialForma)
    

    const optionsFrecuencia = [
        { value: 1, label: 'Semanal' },
        { value: 2, label: 'Quincenal' },
        { value: 3, label: 'Mensual' },
    ]

    const inputsForma = [
        { type: "text", name: "coparte", label: "Nombre de la coparte" },
        { type: "text", name: "colaborador", label: "Nombre completo del colaborador" },
        { type: "text", name: "rfc", label: "RFC del colaborador" },
        { type: "text", name: "curp", label: "CURP del colaborador" },
        { type: "text", name: "domicilio", label: "Domicilio del colaborador" },
        { type: "text", name: "servicio", label: "Nombre de servicio o actividad realizada" },
        { type: "textarea", name: "descripcion", label: "Descripción del servicio" },
        { type: "number", name: "salario", label: "Salario bruto del colaborador" },
        { type: "number", name: "retencion", label: "Retenciones ISR salario" },
        { type: "select", name: "frecuencia", label: "Frecuencia de pago", options: optionsFrecuencia },
        { type: "text", name: "vigencia", label: "Vigencia" },
        { type: "text", name: "encargado", label: "Encargado del proyecto" },
    ]

    const onSubmit = () => {
        console.log(estadoForma)
    }

    // if(!user) return null

    return(
        <FormContainer
            textoBoton="Registrar"
            onSubmit={onSubmit}
        >
        {inputsForma.map((input) => (
            <InputContainer
                key={`input_${input.name}`}
                onChange={handleInputChange}
                value={estadoForma[input.name]}
                {...input}
            />
        ))}
        </FormContainer>
    )
}

export { RegistroAsimilados }