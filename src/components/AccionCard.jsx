import { memo } from 'react'
import '../assets/styles/AccionCars.css'

const AccionCard = memo(({ titulo, icon }) => {

    return(
        <div className="py-3 text-center accionCard">
            <i className={`bi ${icon}`}></i>
            <h6>{titulo}</h6>                    
        </div>
    )
})

export { AccionCard }