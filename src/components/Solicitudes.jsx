
const Solicitudes = ({lista, setShowForm}) => {

    return(
        <div className="container my-3">
            <div className="row">
                <div className="col-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Proveedor</th>
                                <th>CLABE</th>
                                <th>Banco</th>
                                <th>Titular</th>
                                <th>RFC</th>
                                <th>Correo</th>
                                <th>Tipo gasto</th>
                                <th>Descripción</th>
                                <th>Partida</th>
                                <th>Importe</th>
                                <th>Comprobante</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lista.map( solicitud => {

                                const {proveedor, clabe, banco, titular, rfc, email1, tipoGasto, descripcion, partida, importe, comprobante } = solicitud

                                return(
                                    <tr>
                                        <td>{proveedor}</td>
                                        <td>{clabe}</td>
                                        <td>{banco}</td>
                                        <td>{titular}</td>
                                        <td>{rfc}</td>
                                        <td>{email1}</td>
                                        <td>{tipoGasto}</td>
                                        <td>{descripcion}</td>
                                        <td>{partida}</td>
                                        <td>{importe}</td>
                                        <td>{comprobante}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <div className="col-12 text-end p-1">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => setShowForm(true)}
                        >
                            Agregar solicitud
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Solicitudes}