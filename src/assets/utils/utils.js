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

export { determinarNombreArchivo }