import ReactDOM from 'react-dom';
import '../assets/styles/Modal.css'

const Modal = (props) => {
    return ReactDOM.createPortal(
        <div className="modalFondo">
            {props.children}
        </div>,
        document.querySelector('#modal')
    )
}

export {Modal}