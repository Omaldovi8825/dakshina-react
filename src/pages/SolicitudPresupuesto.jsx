import { useState } from "react"
import { FormContainer, InputContainer } from '../components/FormContainer'
import '../assets/styles/Form.css'

const FileUpload = ({ onFileUpload, eliminarArchivo, archivo }) => {

    const determinarNombreArchivo = (archivo) => {
        if(!archivo){
          return { nombre: ''}
        }
    
        const {name, type} = archivo
        const [tipo, extension] = type.split('/')
        const nombreArchivo = name.length > 10 ? `${name.substring(0,10)}...${extension}` : name
        const icono = tipo === 'image' ? 'bi-file-image' : 'bi-filetype-pdf'
        
        return {
            nombre: nombreArchivo,
            icono
        }
    }

    return(
        <div className="col-12 col-md-4">
            {archivo === null
            ?
            (<label className="form-label w-100">
                Comporbaciones
                <i className="bi bi-file-earmark-text text-center d-block" style={{fontSize: '80px', cursor: 'pointer'}}></i>
                <input
                    type="file"
                    className="d-none"
                    name="file"
                    accept="image/*,.pdf"
                    onChange={onFileUpload}
                />
            </label>)
            :
            (<>
            <label className="form-label">Archivo adjunto</label>
            <div className="d-flex justify-content-center">
                <div className="border border-info rounded p-2 text-center" style={{position: 'relative'}}>
                    <i
                        className={`bi ${determinarNombreArchivo(archivo).icono} d-block`}
                        style={{fontSize: '80px'}}
                    >
                    </i>
                    <p className="mb-0">{determinarNombreArchivo(archivo).nombre}</p>
                    <i className="bi bi-x-circle cancelFile" onClick={eliminarArchivo}></i>
                </div>
            </div> 
            </>)
            }
        </div>
    )
}

const SolicitudPresupuesto = () => {

    const estadoInicialForma = {
        proveedor: '',
        clabe: '',
        banco: '',
        titular: '',
        rfc: '',
        email1: '',
        email2: '',
        tipoGasto: 1,
        descripcion: '',
        partida: 1,
        importe: '',
        comprobante: 1,
        archivo: null
    }

    const [ estadoForma, setEstadoForma ]  = useState(estadoInicialForma)

    const handleInputChange = ({target}) => {

        const { name, value } = target
        setEstadoForma({
            ...estadoForma,
            [name]: value
        })
    }

    const eliminarArchivo = () => {
        setEstadoForma({
            ...estadoForma,
            archivo: null
        })
    }

    const onFileUpload = ({target}) => {
       
        const [file] = target.files
        setEstadoForma({
            ...estadoForma,
            archivo: file
        })
    }

    const onSubmit = (ev) => {

        ev.preventDefault()
        console.log(estadoForma)
    }

    const optionsTipoGasto = [
        { value: 1, label: 'Programación' },
        { value: 2, label: 'Reembolso' },
        { value: 3, label: 'Asimilados' },
    ]

    const optionsPartida = [
        { value: 1, label: 'Algo' },
        { value: 2, label: 'Reembolso' },
    ]

    const optionsComprobante = [
        { value: 1, label: 'Factura' },
        { value: 2, label: 'Recibo de asimilados' },
        { value: 3, label: 'Recibo de honorarios' },
        { value: 4, label: 'Invoice' },
        { value: 5, label: 'Recibo no deducible' },
    ]

    const inputsForma = [
        { type: "select", name: "tipoGasto", label: "Tipo de gasto", options: optionsTipoGasto },
        { type: "text", name: "proveedor", label: "Proveedor" },
        { type: "number", name: "clabe", label: "CLABE interbancaria" },
        { type: "text", name: "banco", label: "Nombre del banco" },
        { type: "text", name: "titular", label: "Titular de la cuenta" },
        { type: "text", name: "rfc", label: "RFC del proveedor" },
        { type: "text", name: "email1", label: "Correo electrónico" },
        { type: "text", name: "email2", label: "Correo electrónico alterno" },
        { type: "select", name: "partida", label: "Partida presupuestal", options: optionsPartida },
        { type: "textarea", name: "descripcion", label: "Descripción del gasto" },
        { type: "number", name: "importe", label: "Importe" },
        { type: "select", name: "comprobante", label: "Comprobante", options: optionsComprobante },
    ]

    return(
        <FormContainer
            textoBoton="Guardar"
            onSubmit={onSubmit}
        >
        {inputsForma.map(( input ) => (
            <InputContainer
                key={`input_${input.name}`}
                onChange={handleInputChange}
                {...input}
            />
        ))}
            <FileUpload
                onFileUpload={onFileUpload}
                eliminarArchivo={eliminarArchivo}
                archivo={estadoForma.archivo}
            />
        </FormContainer>
    )
}

export { SolicitudPresupuesto }