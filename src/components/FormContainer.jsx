
const Input = ({ type, name, value, onChange }) => {

    if(type === "textarea"){
        return(
            <textarea
                className="form-control"
                name="descripcion"
                value={value}
                onChange={onChange}
            >
            </textarea>
        )
    }

    return(
        <input
            type={type}
            className="form-control"
            name={name}
            value={value}
            onChange={onChange}
        />
    )
}

const Select = ({ name, value, options, onChange }) => {
    return(
        <select
            className="form-control"
            name={name}
            value={value}
            onChange={onChange}
        >
        {options.map( ({ value, label }) => (
            <option key={value} value={value}>{label}</option>
        ))}
        </select>
    )
}

const InputContainer = (props) => {

    const { type, label } = props

    return(
        <div className="col-12 col-md-6 col-lg-4 mb-3">
            <label className="form-label">{label}</label>
            {type === "select"
                ? <Select {...props} />
                : <Input {...props} />
            }
        </div>
    )
}

const FormContainer = ({ textoBoton, children, cancelar, onSubmit, onCancelSubmit }) => {

    const handleSubmit = (ev) => {
        ev.preventDefault()
        onSubmit()
    }

    return(
        <div className="container py-3 colorForma">
            <form className="row" onSubmit={handleSubmit}>
                {children}
                <div className="col-12 text-end">
                    {cancelar &&
                    <button
                        className="btn btn-secondary me-2"
                        type="button"
                        onClick={onCancelSubmit}
                    >
                        Cancelar
                    </button>
                    }
                    <button className="btn btn-secondary" type="submit">{textoBoton || 'Enviar'}</button>
                </div>
            </form>
        </div>
    )
}

export { FormContainer, InputContainer }