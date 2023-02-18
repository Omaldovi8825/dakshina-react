
const Input = ({ type, name, value, placeholder, onChange }) => {
    return(
        <input
            type={type}
            className="form-control"
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    )
}

const TextArea = ({ name, value, placeholder, onChange }) => {
    return(
        <textarea
            className="form-control"
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        >
        </textarea>
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

const InputType = (props) => {

    switch(props.type){
        case "select":
            return <Select {...props} />
        case "textarea":
            return <TextArea {...props} />
        default:
            return <Input {...props} />
    }

}

const InputContainer = (props) => {

    const {label, sublabel, clase } = props

    return(
        <div className={`col-12 ${clase} mb-3`}>
            <label className="form-label">{label}</label>
            <InputType {...props} />
            {sublabel &&
            <div className="form-text">{sublabel}</div>
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
        <div className="container mb-4">
            <form className="row colorForma py-3" onSubmit={handleSubmit}>
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