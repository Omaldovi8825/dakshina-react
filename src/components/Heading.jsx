import { memo } from 'react'

const Heading = memo(({ titulo, subtitulo }) => {

    return(
        <div className="container mb-4">
            <div className="row">
                <div className="col-12">
                    <h2 className="color1">{titulo}</h2>
                    <h6 className="color1">{subtitulo}</h6>
                </div>
            </div>
        </div>
    )
})

export { Heading }