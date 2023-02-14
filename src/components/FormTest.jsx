import { useState } from "react"
import '../assets/styles/Form.css'

const Form = ({estadoForma, setEstadoForma, onSumbit, showForm, modo, determinarNombreArchivo}) => {


    const onInputChange = ({target}) => {

        const {name, value} = target

        setEstadoForma({
            ...estadoForma,
            [name]: value 
        })
    }

    const onFileUpload = ({target}) => {
        // console.log(target)
        const [file] = target.files
        setEstadoForma({
            ...estadoForma,
            archivo: file
        })
    }

    const eliminarArchivo = () => {
        setEstadoForma({
            ...estadoForma,
            archivo: null
        })
    }


    if(!showForm){
        return null
    }

    return(
        <div className="container py-4 my-5 formaSolicitud">
            <form className="row" onSubmit={onSumbit}>
                <div className="col-12 col-md-6 mb-3">
                    <label className="form-label">Tipo de gasto</label>
                    <select
                        className="form-control"
                        name="tipoGasto"
                        value={estadoForma.tipoGasto}
                        onChange={onInputChange}
                    >
                        <option value="1">Programación</option>
                        <option value="2">Reembolso</option>
                        <option value="3">Asimilados</option>
                    </select>
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <label className="form-label">Proveedor</label>
                    <input
                        type="text"
                        className="form-control"
                        name="proveedor"
                        value={estadoForma.proveedor}
                        onChange={onInputChange}
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
                        value={estadoForma.clabe}
                        onChange={onInputChange}
                    />
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <label className="form-label">Nombre del banco</label>
                    <input
                        type="text"
                        className="form-control" 
                        name="banco"
                        value={estadoForma.banco}
                        onChange={onInputChange}
                    />
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <label className="form-label">Titular de la cuenta</label>
                    <input
                        type="text"
                        className="form-control"
                        name="titular"
                        value={estadoForma.titular}
                        onChange={onInputChange}
                    />
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <label className="form-label">RFC del proveedor</label>
                    <input
                        type="text"
                        className="form-control"
                        name="rfc"
                        value={estadoForma.rfc}
                        onChange={onInputChange}
                    />
                </div>
                <div className="col-12 col-md-6 mb-3">
                    {/* 1 o 2 */}
                    <label className="form-label">Correo electrónico</label>
                    <input
                        type="text"
                        className="form-control"
                        name="email1"
                        value={estadoForma.email1}
                        onChange={onInputChange}
                    />
                </div>
                <div className="col-12 col-md-6 mb-3">
                    {/* 1 o 2 */}
                    <label className="form-label">Correo electrónico alterno</label>
                    <input
                        type="text"
                        className="form-control"
                        name="email2"
                        value={estadoForma.email2}
                        onChange={onInputChange}
                    />
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <label className="form-label">Descripción del gasto</label>
                    <textarea
                        className="form-control"
                        name="descripcion"
                        value={estadoForma.descripcion}
                        onChange={onInputChange}
                        // placeholder="Indicar el mes al que corresponde el pago"
                    >
                    </textarea>
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <label className="form-label">Partida presupuestal</label>
                    <select
                        className="form-control"
                        name="partida"
                        value={estadoForma.partida}
                        onChange={onInputChange}
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
                        value={estadoForma.importe}
                        onChange={onInputChange}
                    />
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <label className="form-label">Comprobante</label>
                    <select
                        className="form-control"
                        name="comprobante"
                        value={estadoForma.comprobante}
                        onChange={onInputChange}
                    >
                        <option value="1">Factura</option>
                        <option value="2">Recibo de asimilados</option>
                        <option value="3">Recibo de honorarios</option>
                        <option value="4">Invoice</option>
                        <option value="5">Recibo no deducible</option>
                    </select>
                </div>
                <div className="col-12 col-md-6 mb-3">
                    {estadoForma.archivo === null &&
                    <label className="form-label w-100">
                        Comporbaciones
                        <i className="bi bi-file-earmark-text text-center d-block" style={{fontSize: '80px', cursor: 'pointer'}}></i>
                        <input
                            type="file"
                            className="d-none"
                            name="file"
                            accept="image/*,.pdf"
                            onChange={onFileUpload}
                        />
                    </label>
                    }
                    {estadoForma.archivo &&
                    <>
                    <label className="form-label">Archivo adjunto</label>
                    <div className="d-flex justify-content-center">
                        <div className="border border-info rounded p-2 text-center" style={{position: 'relative'}}>
                            <i
                                className={`bi ${determinarNombreArchivo(estadoForma.archivo).icono} d-block`}
                                style={{fontSize: '80px'}}
                            >
                            </i>
                            <p className="mb-0">{determinarNombreArchivo(estadoForma.archivo).nombre}</p>
                            <i className="bi bi-x-circle cancelFile" onClick={eliminarArchivo}></i>
                        </div>
                    </div> 
                    </>
                    }
                </div>
                <div className="col-12 text-end py-2">
                    <button
                        type="submit"
                        className="btn btn-secondary px-4"
                    >
                        {modo === 'crear' ? 'Agregar' : 'Guardar'}
                    </button>
                </div>
            </form>
        </div>
    )
}

export {Form}