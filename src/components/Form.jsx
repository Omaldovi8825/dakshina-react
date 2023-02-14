import { useForm } from "react-hook-form";
import '../assets/styles/Form.css'

const Form = ({agregarSolcitiud, showForm}) => {

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

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm({
        defaultValues: estadoInicialForma
    })

    const onFileUpload = ({target}) => {
        console.log(target)
    }

    const onSumbit = (data) => {
        // console.log(data)
        agregarSolcitiud({id: `${data.proveedor}_${data.clabe}` ,...data})
        reset()
    }

    if(!showForm){
        return null
    }

    console.log(errors)

    return(
        <div className="container py-4 my-5 formaSolicitud">
            <form className="row" onSubmit={handleSubmit(onSumbit)}>
                <div className="col-12 col-md-6 mb-3">
                    <label className="form-label">Proveedor</label>
                    <input
                        type="text"
                        className="form-control"
                        {...register("proveedor", { required: false })}
                    />
                    {errors.proveedor?.type === "required" && <p className="error-message">Dato requerido</p>}
                </div>
                <div className="col-12 col-md-6 mb-3">
                    {/* 18 */}
                    <label className="form-label">Clabe interbancaria</label>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Introduce los 18 dígitos de la cuenta bancaria"
                        // {...register("clabe", { required: false, minLength: 18, maxLength: 18 })}
                        {...register("clabe", { required: false })}
                    />
                    {errors.clabe?.type === "required" && <p className="error-message">Dato requerido</p>}
                    {errors.clabe?.type === "minLength" && <p className="error-message">La CLABE contiene 18 dígitos</p>}
                    {errors.clabe?.type === "maxLength" && <p className="error-message">La CLABE no debe exceder 18 dígitos</p>}
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <label className="form-label">Nombre del banco</label>
                    <input
                        type="text"
                        className="form-control" 
                        {...register("banco", { required: false })}
                    />
                    {errors.banco?.type === "required" && <p className="error-message">Dato requerido</p>}
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <label className="form-label">Titular de la cuenta</label>
                    <input
                        type="text"
                        className="form-control"
                        {...register("titular", { required: false })}
                    />
                    {errors.titular?.type === "required" && <p className="error-message">Dato requerido</p>}
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <label className="form-label">RFC del proveedor</label>
                    <input
                        type="text"
                        className="form-control"
                        {...register("rfc", { required: false })}
                    />
                    {errors.rfc?.type === "required" && <p className="error-message">Dato requerido</p>}
                </div>
                <div className="col-12 col-md-6 mb-3">
                    {/* 1 o 2 */}
                    <label className="form-label">Correo electrónico</label>
                    <input
                        type="text"
                        className="form-control"
                        {...register("email1", { required: false, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i })}
                    />
                    {errors.email1?.type === "required" && <p className="error-message">Dato requerido</p>}
                    {errors.email1?.type === "pattern" && <p className="error-message">Introduce un correo válido</p>}
                </div>
                <div className="col-12 col-md-6 mb-3">
                    {/* 1 o 2 */}
                    <label className="form-label">Correo electrónico alterno</label>
                    <input
                        type="text"
                        className="form-control"
                        {...register("email2", { pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i })}
                    />
                    {errors.email2?.type === "pattern" && <p className="error-message">Introduce un correo válido</p>}
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <label className="form-label">Tipo de gasto</label>
                    <select
                        className="form-control"
                        name="tipoGasto"
                        {...register("tipoGasto")}
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
                        {...register("descripcion", { required: false })}
                    >
                    </textarea>
                    {errors.descripcion?.type === "required" && <p className="error-message">Dato requerido</p>}
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <label className="form-label">Partida presupuestal</label>
                    <select
                        className="form-control"
                        name="partida"
                        {...register("partida")}
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
                        {...register("importe", { required: false, min: 1})}
                    />
                    {errors.importe?.type === "required" && <p className="error-message">Dato requerido</p>}
                    {errors.importe?.type === "min" && <p className="error-message">Mínimo $1 MXN</p>}
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <label className="form-label">Comprobante</label>
                    <select
                        className="form-control"
                        name="comprobante"
                        {...register("comprobante")}
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