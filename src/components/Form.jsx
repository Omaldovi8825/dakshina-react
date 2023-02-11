import { useState } from "react"


const Form = ({agregarSolcitiud}) => {

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
    }

    const [estadoFroma, setEstadoForma] = useState(estadoInicialForma)

    const onInputChange = ({target}) => {

        const {name, value} = target

        setEstadoForma({
            ...estadoFroma,
            [name]: value 
        })
    }

    const onFileUpload = ({target}) => {
        console.log(target)
    }

    const onSumbit = (ev) => {

        ev.preventDefault()
        agregarSolcitiud(estadoFroma)
        setEstadoForma(estadoInicialForma)
    }

    return(
        <div className="container py-4">
            <form className="row" onSubmit={onSumbit}>
                <div className="col-12 col-md-6 mb-3">
                    <label className="form-label">Proveedor</label>
                    <input
                        type="text"
                        className="form-control"
                        name="proveedor"
                        onChange={onInputChange}
                        value={estadoFroma.proveedor}
                    />
                </div>
                <div className="col-12 col-md-6 mb-3">
                    {/* 18 */}
                    <label className="form-label">Clabe interbancaria</label>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Introduce los 18 dígitos de la cuenta bancaria"
                        name="clabe"
                        onChange={onInputChange}
                        value={estadoFroma.clabe}
                    />
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <label className="form-label">Nombre del banco</label>
                    <input
                        type="text"
                        className="form-control" 
                        name="banco"
                        onChange={onInputChange}
                        value={estadoFroma.banco}
                    />
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <label className="form-label">Titular de la cuenta</label>
                    <input
                        type="text"
                        className="form-control"
                        name="titular"
                        onChange={onInputChange}
                        value={estadoFroma.titular}
                    />
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <label className="form-label">RFC del proveedor</label>
                    <input
                        type="text"
                        className="form-control"
                        name="rfc"
                        onChange={onInputChange}
                        value={estadoFroma.rfc}
                    />
                </div>
                <div className="col-12 col-md-6 mb-3">
                    {/* 1 o 2 */}
                    <label className="form-label">Correo electrónico</label>
                    <input
                        type="text"
                        className="form-control"
                        name="email1"
                        onChange={onInputChange}
                        value={estadoFroma.email1}
                    />
                </div>
                <div className="col-12 col-md-6 mb-3">
                    {/* 1 o 2 */}
                    <label className="form-label">Correo electrónico alterno</label>
                    <input
                        type="text"
                        className="form-control"
                        name="email2"
                        onChange={onInputChange}
                        value={estadoFroma.email2}
                    />
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <label className="form-label">Tipo de gasto</label>
                    <select
                        className="form-control"
                        name="tipoGasto"
                        onChange={onInputChange}
                        value={estadoFroma.tipoGasto}
                    >
                        <option value="1">Programación</option>
                        <option value="2">Reembolso</option>
                        <option value="3">Pago de salarios</option>
                    </select>
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <label className="form-label">Descripción del gasto</label>
                    <textarea
                        className="form-control"
                        name="descripcion"
                        onChange={onInputChange}
                        value={estadoFroma.descripcion}
                    >
                    </textarea>
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <label className="form-label">Partida presupuestal</label>
                    <select
                        className="form-control"
                        name="partida"
                        onChange={onInputChange}
                        value={estadoFroma.partida}
                    >
                        <option value="1">Algo</option>
                        <option value="2">Reembolso</option>
                    </select>
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <label className="form-label">Importe</label>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="importe neto a trasferir"
                        name="importe"
                        onChange={onInputChange}
                        value={estadoFroma.importe}
                    />
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <label className="form-label">Comprobante</label>
                    <select
                        className="form-control"
                        name="comprobante"
                        onChange={onInputChange}
                        value={estadoFroma.comprobante}
                    >
                        <option value="1">Factura</option>
                        <option value="2">Recibo de asimilados</option>
                        <option value="3">Recibo de honorarios</option>
                        <option value="4">Invoice</option>
                        <option value="5">Recibo no deducible</option>
                    </select>
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <label className="form-label">Comporbaciones</label>
                    <input
                        type="file"
                        className="form-control"
                        name="file"
                        onChange={onFileUpload}
                    />
                </div>
                <div className="col-12 text-center">
                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Agendar
                    </button>
                </div>
            </form>
        </div>
    )
}

export {Form}